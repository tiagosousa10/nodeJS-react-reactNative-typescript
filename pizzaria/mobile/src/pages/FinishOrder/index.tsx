import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Feather } from "@expo/vector-icons";

import {
  useNavigation,
  useRoute,
  RouteProp,
  Route,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../../routes/app.routes";

import { api } from "../../services/api";
import { theme } from "../../utils/theme";

type RouteDetailParams = {
  FinishOrder: {
    number: string | number;
    order_id: string;
  };
};

type FinishOrderRouteProp = RouteProp<RouteDetailParams, "FinishOrder">;

export function FinishOrder() {
  const route = useRoute<FinishOrderRouteProp>();
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();

  async function handleFinish() {
    try {
      await api.put("/order/send", {
        order_id: route.params?.order_id,
      });

      navigation.popToTop();
    } catch (e) {
      console.log("ERRO: ", e);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.alert}>Voce deseja finalizar o pedido?</Text>
      <Text style={styles.title}>Mesa {route.params?.number}</Text>

      <TouchableOpacity style={styles.button} onPress={handleFinish}>
        <Text style={styles.textButton}>Finalizar Pedido</Text>
        <Feather name="shopping-cart" size={20} color={theme.colors.seasalt} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.seasalt,
    paddingVertical: "5%",
    paddingHorizontal: "4%",
    alignItems: "center",
    justifyContent: "center",
  },
  alert: {
    fontSize: theme.fontSize.xl,
    color: theme.colors.eerieBlack,
    fontWeight: "bold",
    marginBottom: 12,
  },
  title: {
    fontSize: theme.fontSize.xxl,
    fontWeight: "bold",
    color: theme.colors.eerieBlack,
    marginBottom: 12,
  },
  button: {
    backgroundColor: theme.colors.outerSpace,
    flexDirection: "row",
    width: "65%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.borderRadius.md,
  },
  textButton: {
    fontSize: theme.fontSize.lg,
    marginRight: 8,
    fontWeight: "bold",
    color: theme.colors.seasalt,
  },
});
