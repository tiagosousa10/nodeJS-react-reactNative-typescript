import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../../routes/app.routes";

import { api } from "../../services/api";
import { theme } from "../../utils/theme";

export default function Dashboard() {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();
  const [number, setNumber] = useState("");

  async function openOrder() {
    if (number === "") {
      return;
    }
    //requisicao
    const response = await api.post("/order", {
      table: Number(number),
    });

    //precisamos de fazer a requisicao e abrir a mesa para navegar para a proxima pagina/tela
    navigation.navigate("Order", {
      number: number,
      order_id: response.data.id,
    });

    setNumber("");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Novo pedido</Text>

      <TextInput
        style={styles.input}
        placeholder="Numero da mesa"
        placeholderTextColor={theme.colors.slateGray}
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
      />

      <TouchableOpacity style={styles.button} onPress={openOrder}>
        <Text style={styles.buttonText}>Abrir Mesa</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    backgroundColor: theme.colors.seasalt,
  },
  title: {
    fontSize: theme.fontSize.xxl,
    fontWeight: "bold",
    color: theme.colors.eerieBlack,
    marginBottom: 24,
  },
  input: {
    width: "90%",
    height: 60,
    backgroundColor: theme.colors.seasalt,
    borderRadius: theme.borderRadius.md,
    paddingHorizontal: 8,
    textAlign: "center",
    fontSize: 22,
    color: theme.colors.eerieBlack,
    borderWidth: 1,
    borderColor: theme.colors.platinum,
  },
  button: {
    width: "90%",
    height: 40,
    backgroundColor: theme.colors.outerSpace,
    borderRadius: theme.borderRadius.md,
    marginVertical: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: theme.fontSize.lg,
    color: theme.colors.seasalt,
    fontWeight: "bold",
  },
});
