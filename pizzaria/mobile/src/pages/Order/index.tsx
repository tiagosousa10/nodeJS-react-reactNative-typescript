import React, {useState,useEffect} from "react";
import {
    View,
    Text, 
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Modal
    } from 'react-native'
import {useRoute,RouteProp,useNavigation, useTheme} from '@react-navigation/native'
import {Feather} from '@expo/vector-icons'
import { api } from "../../services/api"
import {ModalPicker} from '../../components/ModalPicker'

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

type OrderRouteProps = RouteProp<RouteDetailParams, 'Order'>;

export default function Order(){
    const route= useRoute<OrderRouteProps>()
    const navigation = useNavigation()

    const [category,setCategory] = useState<CategoryProps[] | []>([])
    const [categorySelected, setCategorySelected] = useState<CategoryProps>()

    const [modalCategoryVisible,setModalCategoryVisible] = useState(false)

    const[amount,setAmount] = useState('1')

    //buscar as categorias
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

    function handleChangeCategory(item:CategoryProps){
            setCategorySelected(item)
        }


    return(
        <View style={styles.container}  >

           <View style={styles.header}   >
                <Text style={styles.title}  >Mesa {route.params.number}  </Text>
                <TouchableOpacity onPress={handleCloseOrder}>
                    <Feather size={28} name="trash-2" color={"#ff3f4b"}   />
                </TouchableOpacity>
           </View>

           {category.length !== 0 && (
            <TouchableOpacity    style={styles.input} onPress={() => setModalCategoryVisible(true)}>
            <Text style={{color:'#fff'}}>
                {categorySelected?.name}
            </Text>
           </TouchableOpacity>
           )}

           <TouchableOpacity    style={styles.input}>
            <Text style={{color:'#fff'}}>Pizza de Calabresa</Text>
           </TouchableOpacity>
           
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
           <View    style={styles.actions}>
                <TouchableOpacity   style={styles.buttonAdd}>
                    <Text style={styles.buttonText}  >+</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text   style={styles.buttonText}>Avançar</Text>
                </TouchableOpacity>
           </View>

           <Modal transparent={true} visible={modalCategoryVisible} animationType="fade"  >
            <ModalPicker  handleCloseModal={() => setModalCategoryVisible(false)} options={category} selectedItem={handleChangeCategory}   />
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
