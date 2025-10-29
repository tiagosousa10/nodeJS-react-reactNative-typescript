import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
  FlatList,
  Alert,
} from "react-native";
import {
  useRoute,
  RouteProp,
  useNavigation,
  useTheme,
} from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";
import { api } from "../../services/api";
import { ModalPicker } from "../../components/ModalPicker";
import { ListItem } from "../../components/ListItem";
import { theme } from "../../utils/theme";

//navegaçao entre paginas
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../../routes/app.routes";

type RouteDetailParams = {
  Order: {
    number: string | number;
    order_id: string;
  };
};

export type CategoryProps = {
  id: string;
  name: string;
};

type ProductProps = {
  id: string;
  name: string;
};

type ItemProps = {
  id: string;
  product_id: string;
  name: string;
  amount: string | number;
};

type OrderRouteProps = RouteProp<RouteDetailParams, "Order">;

export default function Order() {
  const route = useRoute<OrderRouteProps>();
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();
  //                          useState - categorias
  const [category, setCategory] = useState<CategoryProps[] | []>([]);
  const [categorySelected, setCategorySelected] = useState<CategoryProps>();
  const [modalCategoryVisible, setModalCategoryVisible] = useState(false);
  //                          useState - produtos
  const [products, setProducts] = useState<ProductProps[] | []>([]);
  const [productSelected, setProductSelected] = useState<
    ProductProps | undefined
  >();
  const [modalProductVisible, setModalProductVisible] = useState(false);
  //                          useState - Amount/Quantidade
  const [amount, setAmount] = useState("1");
  //                      useState - items (controlar lista de items)
  const [items, setItems] = useState<ItemProps[]>([]);
  //                                      carregar as categorias
  //enviar o que recebemos no estado category
  //e devolver a categoria seleciona da posicao [0]
  useEffect(() => {
    async function loadInfo() {
      const response = await api.get("/category");
      setCategory(response.data);
      setCategorySelected(response.data[0]);
    }
    loadInfo();
  }, []);

  useEffect(() => {
    //                                       carregar produtos
    async function loadProducts() {
      if (categorySelected?.id) {
        try {
          const response = await api.get("/category/product", {
            params: {
              category_id: categorySelected.id,
            },
          });

          console.log("Produtos carregados:", response.data);

          if (response.data && Array.isArray(response.data)) {
            setProducts(response.data);
            if (response.data.length > 0) {
              setProductSelected(response.data[0]);
            } else {
              setProductSelected(undefined);
            }
          } else {
            setProducts([]);
            setProductSelected(undefined);
          }
        } catch (error) {
          console.log("Erro ao carregar produtos:", error);
          Alert.alert("Erro", "Não foi possível carregar os produtos");
          setProducts([]);
          setProductSelected(undefined);
        }
      }
    }

    if (categorySelected) {
      loadProducts();
    }
  }, [categorySelected]);

  // Carregar items existentes do pedido
  useEffect(() => {
    async function loadItems() {
      try {
        const response = await api.get("/order/detail", {
          params: {
            order_id: route.params?.order_id,
          },
        });

        // A API retorna um array de items diretamente
        if (response.data && Array.isArray(response.data)) {
          const formattedItems = response.data.map((item: any) => ({
            id: item.id,
            product_id: item.product_id,
            name: item.product?.name || "",
            amount: item.amount,
          }));
          setItems(formattedItems);
        }
      } catch (e) {
        console.log("Erro ao carregar items:", e);
      }
    }

    if (route.params?.order_id) {
      loadItems();
    }
  }, [route.params?.order_id]);

  //                              apagar/remover o pedido (icone do lixo)
  async function handleCloseOrder() {
    try {
      await api.delete("/order", {
        params: {
          order_id: route.params?.order_id,
        },
      });
      navigation.goBack();
    } catch (e) {
      console.log(e);
    }
  }

  //                                              mudar categoria selecionado
  function handleChangeCategory(item: CategoryProps) {
    setCategorySelected(item);
  }

  //                                              mudar produto selecionado
  function handleChangeProduct(item: ProductProps) {
    setProductSelected(item);
  }

  //                                      adicionando um produto nessa mesa
  async function handleAdd() {
    // Validação antes de fazer a requisição
    if (!productSelected?.id) {
      Alert.alert("Erro", "Selecione um produto antes de adicionar");
      return;
    }

    if (!route.params?.order_id) {
      Alert.alert("Erro", "ID do pedido não encontrado");
      return;
    }

    if (!amount || Number(amount) <= 0) {
      Alert.alert("Erro", "Quantidade inválida");
      return;
    }

    try {
      const response = await api.post("/order/add", {
        order_id: route.params.order_id,
        product_id: productSelected.id,
        amount: Number(amount),
      });

      let data = {
        id: response.data.id,
        product_id: productSelected.id,
        name: productSelected.name,
        amount: amount,
      };

      setItems((oldArray) => [...oldArray, data]);

      // Resetar quantidade para 1 após adicionar
      setAmount("1");
    } catch (e: any) {
      console.log("Erro ao adicionar produto:", e);
      Alert.alert(
        "Erro",
        e.response?.data?.error || "Erro ao adicionar produto. Tente novamente."
      );
    }
  }
  //                                              removendo produto da lista de items
  async function handleDeleteItem(item_id: string) {
    await api.delete("/order/remove", {
      params: {
        item_id: item_id,
      },
    });

    //                                apos remover da api -> removemos o item da lista de items
    let removeItem = items.filter((item) => {
      return item.id !== item_id;
    });
    //                                              atualizar os items
    setItems(removeItem);
  }

  function handleFinishOrder() {
    navigation.navigate("FinishOrder", {
      number: route.params.number,
      order_id: route.params.order_id,
    });
  }

  return (
    <View style={styles.container}>
      {/*REMOVER PEDIDO / ICONO DO LIXO */}

      <View style={styles.header}>
        <Text style={styles.title}>Mesa {route.params.number} </Text>
        {items.length === 0 && (
          <TouchableOpacity onPress={handleCloseOrder}>
            <Feather size={28} name="trash-2" color={theme.colors.error} />
          </TouchableOpacity>
        )}
      </View>

      {/*PRODUTOS */}
      {category.length !== 0 && (
        <TouchableOpacity
          style={styles.input}
          onPress={() => setModalCategoryVisible(true)}
        >
          <Text style={styles.inputText}>{categorySelected?.name}</Text>
        </TouchableOpacity>
      )}

      {/*PRODUTOS POR CATEGORIA */}
      {categorySelected && (
        <TouchableOpacity
          style={styles.input}
          onPress={() => {
            if (products.length > 0) {
              setModalProductVisible(true);
            } else {
              Alert.alert(
                "Aviso",
                "Não há produtos disponíveis nesta categoria"
              );
            }
          }}
        >
          <Text style={styles.inputText}>
            {productSelected?.name || "Selecione um produto"}
          </Text>
        </TouchableOpacity>
      )}

      {/*ADICIONAR NUMERO DE QUANTIDADE */}

      <View style={styles.qtdContainer}>
        <Text style={styles.qtdText}>Quantidade</Text>
        <TextInput
          style={[styles.input, { width: "60%", textAlign: "center" }]}
          placeholderTextColor={theme.colors.slateGray}
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
      </View>
      {/*BOTAO "+" para adicionar produto a lista */}

      <View style={styles.actions}>
        <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        {/*BOTAO AVANÇAR */}

        <TouchableOpacity
          style={[styles.button, { opacity: items.length === 0 ? 0.3 : 1 }]}
          disabled={items.length === 0}
          onPress={handleFinishOrder}
        >
          <Text style={styles.buttonText}>Avançar</Text>
        </TouchableOpacity>
      </View>
      {/*FLATLIST - com lista de items */}

      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, marginTop: 24 }}
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem data={item} deleteItem={handleDeleteItem} />
        )}
      />

      {/*MODAL PARA categoria de PRODUTOS */}
      <Modal
        transparent={true}
        visible={modalCategoryVisible}
        animationType="fade"
      >
        <ModalPicker
          handleCloseModal={() => setModalCategoryVisible(false)}
          options={category}
          selectedItem={handleChangeCategory}
        />
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
          selectedItem={handleChangeProduct}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.seasalt,
    paddingVertical: "5%",
    paddingEnd: "4%",
    paddingStart: "4%",
  },
  header: {
    flexDirection: "row",
    marginBottom: 12,
    alignItems: "center",
    marginTop: 44,
  },
  title: {
    fontSize: theme.fontSize.xxl,
    fontWeight: "bold",
    color: theme.colors.eerieBlack,
    marginRight: 14,
  },
  input: {
    backgroundColor: theme.colors.seasalt,
    borderRadius: theme.borderRadius.md,
    width: "100%",
    height: 40,
    marginBottom: 12,
    justifyContent: "center",
    paddingHorizontal: 8,
    color: theme.colors.eerieBlack,
    fontSize: theme.fontSize.xl,
    borderWidth: 1,
    borderColor: theme.colors.platinum,
  },
  inputText: {
    color: theme.colors.eerieBlack,
  },
  qtdContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  qtdText: {
    fontSize: theme.fontSize.xl,
    fontWeight: "bold",
    color: theme.colors.eerieBlack,
  },
  actions: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  buttonAdd: {
    width: "20%",
    backgroundColor: theme.colors.outerSpace,
    borderRadius: theme.borderRadius.md,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: theme.colors.seasalt,
    fontSize: theme.fontSize.lg,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: theme.colors.outerSpace,
    borderRadius: theme.borderRadius.md,
    height: 40,
    width: "75%",
    alignItems: "center",
    justifyContent: "center",
  },
});
