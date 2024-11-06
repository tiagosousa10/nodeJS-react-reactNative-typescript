import React, {useState,useEffect} from "react";
import {
    View,
    Text, 
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Modal,
    FlatList
    } from 'react-native'
import {useRoute,RouteProp,useNavigation, useTheme} from '@react-navigation/native'

import {Feather} from '@expo/vector-icons'
import { api } from "../../services/api"
import {ModalPicker} from '../../components/ModalPicker'
import {ListItem} from '../../components/ListItem'

//navegaçao entre paginas
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {StackParamsList} from '../../routes/app.routes'



type RouteDetailParams= {
    Order:{
        number:string| number;
        order_id:string
    }
}

export type CategoryProps= {
    id:string,
    name:string
}

type ProductProps={
    id:string,
    name:string
}

type ItemProps= {
    id:string,
    product_id:string,
    name:string,
    amount:string | number
}


type OrderRouteProps = RouteProp<RouteDetailParams, 'Order'>;



export default function Order(){
    const route= useRoute<OrderRouteProps>()
    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>()
//                          useState - categorias
    const [category,setCategory] = useState<CategoryProps[] | []>([])
    const [categorySelected, setCategorySelected] = useState<CategoryProps>()
    const [modalCategoryVisible,setModalCategoryVisible] = useState(false)
//                          useState - produtos
    const [products,setProducts] = useState<ProductProps[] | []>([])
    const [productSelected,setProductSelected] = useState<ProductProps | undefined>()
    const [modalProductVisible,setModalProductVisible] = useState(false)
//                          useState - Amount/Quantidade
    const[amount,setAmount] = useState('1')
    //                      useState - items (controlar lista de items)
    const [items,setItems] = useState<ItemProps[]>([])
    //                                      carregar as categorias
    //enviar o que recebemos no estado category
    //e devolver a categoria seleciona da posicao [0]
    useEffect(()=> {
        async function loadInfo(){
            const response = await api.get('/category')
            setCategory(response.data)
            setCategorySelected(response.data[0])
        }
        loadInfo()
    },[])


    useEffect(() => {
    //                                       carregar produtos
        async function loadProducts(){
            const response= await api.get('/category/product', {
                params:{
                    category_id:categorySelected?.id
                }
            })
            setProducts(response.data)
            setProductSelected(response.data[0])
        }

        loadProducts()

    },[categorySelected])

    //                              apagar/remover o pedido (icone do lixo)
    async function handleCloseOrder(){
        try{
            await api.delete('/order', {
                params:{
                    order_id:route.params?.order_id
                }
            })
            navigation.goBack()
            
        }catch(e){
            console.log(e)
        }
    }


//                                              mudar categoria selecionado
    function handleChangeCategory(item:CategoryProps){
            setCategorySelected(item)
        }

//                                              mudar produto selecionado
    function handleChangeProduct(item:ProductProps){
        setProductSelected(item)
    }    


    //                                      adicionando um produto nessa mesa
    async function handleAdd(){
        const response= await api.post('/order/add', {
            order_id:route.params?.order_id,
            product_id:productSelected?.id,
            amount:Number(amount)
        })

        let data = {
            id:response.data.id,
            product_id:productSelected?.id as string,
            name:productSelected?.name as string,
            amount:amount
        }

        setItems(oldArray => [...oldArray, data])
    }
//                                              removendo produto da lista de items
    async function handleDeleteItem(item_id:string){
        await api.delete('/order/remove', {
            params:{
                item_id:item_id
            }
        })

        //                                apos remover da api -> removemos o item da lista de items
        let removeItem = items.filter(item=> {
            return(item.id !==item_id)
        })
        //                                              atualizar os items
        setItems(removeItem)
    }

        function handleFinishOrder(){
            navigation.navigate('FinishOrder', {
                number: route.params.number, 
                order_id:route.params.order_id})
        }




        
    return(
        <View style={styles.container}  >

                                                 {/*REMOVER PEDIDO / ICONO DO LIXO */}

           <View style={styles.header}   >
                <Text style={styles.title}  >Mesa {route.params.number}  </Text>
                {items.length === 0 && (
                      <TouchableOpacity onPress={handleCloseOrder}>
                      <Feather size={28} name="trash-2" color={"#ff3f4b"}   />
                  </TouchableOpacity>
                )}
           </View>

                                                        {/*PRODUTOS */}
           {category.length !== 0 && (
            <TouchableOpacity    
             style={styles.input}
             onPress={() => setModalCategoryVisible(true)}
            >
            <Text style={{color:'#fff'}}>
                {categorySelected?.name}
            </Text>
           </TouchableOpacity>
           )}


                                                     {/*PRODUTOS POR CATEGORIA */}
            {products.length !== 0 && (
           <TouchableOpacity    style={styles.input}  onPress={() => setModalProductVisible(true)}>
           <Text style={{color:'#fff'}}>{productSelected?.name}    </Text>
          </TouchableOpacity>
            )}
           

                                                 {/*ADICIONAR NUMERO DE QUANTIDADE */}

           <View style={styles.qtdContainer}>
                <Text style={styles.qtdText}>Quantidade</Text>
                <TextInput
                  style={[styles.input, {width:'60%', textAlign:'center'}]}
                  placeholderTextColor={"#f0f0f0"}
                  keyboardType="numeric" 
                  value={amount}
                  onChangeText={setAmount}
                  />
           </View>
                                                {/*BOTAO "+" para adicionar produto a lista */}

           <View    style={styles.actions}>
                <TouchableOpacity   style={styles.buttonAdd} onPress={handleAdd}>
                    <Text style={styles.buttonText}  >+</Text>
                </TouchableOpacity>

                                                        {/*BOTAO AVANÇAR */}

                <TouchableOpacity 
                style={[styles.button, {opacity:items.length === 0 ? 0.3 : 1}]}
                disabled={items.length===0}
                onPress={handleFinishOrder}
                >
                    <Text   style={styles.buttonText}>Avançar</Text>
                </TouchableOpacity>
           </View>
                                                    {/*FLATLIST - com lista de items */}
       
            <FlatList 
              showsVerticalScrollIndicator={false}
              style={{flex:1,marginTop:24}}
              data={items}
              keyExtractor={(item)=>item.id}
              renderItem={({item}) => <ListItem data={item} deleteItem={handleDeleteItem}/> }
            />

                                                        {/*MODAL PARA categoria de PRODUTOS */}
           <Modal transparent={true} visible={modalCategoryVisible} animationType="fade"  >
            <ModalPicker  
            handleCloseModal={() => setModalCategoryVisible(false)} 
            options={category} 
            selectedItem={handleChangeCategory}   />
           </Modal>

                                                            {/*MODAL de PRODUTOS */}

           <Modal 
           transparent={true} 
           visible={modalProductVisible}
           animationType="fade"
           >
            <ModalPicker  
            handleCloseModal={() => setModalProductVisible(false)} 
            options={products} 
            selectedItem={handleChangeProduct}   />

           </Modal>

        </View>

    )
}





const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#1d1d2e',
        paddingVertical:'5%',
        paddingEnd:'4%',
        paddingStart:'4%'
    },
    header:{
        flexDirection:'row',
        marginBottom:12,
        alignItems:'center',
        marginTop:44,
    },
    title:{ 
        fontSize:30,
        fontWeight:'bold',
        color:'#fff',
        marginRight:14,
    },
    input:{
        backgroundColor:'#101026',
        borderRadius:4,
        width:'100%',
        height:40,
        marginBottom:12,
        justifyContent:'center',
        paddingHorizontal:8,
        color:'#fff',
        fontSize:20
    },
    qtdContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    qtdText:{
        fontSize:20,
        fontWeight:'bold',
        color:'#fff'
    },
    actions:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
    },
    buttonAdd:{
        width:'20%',
        backgroundColor:'#3fd1ff',
        borderRadius:4,
        height:40,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonText:{
        color:'#101026',
        fontSize:18,
        fontWeight:'bold'
    },
    button:{
        backgroundColor:"#3fffa3",
        borderRadius:4,
        height:40,
        width:'75%',
        alignItems:'center',
        justifyContent:'center'
    }
})
