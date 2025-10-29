import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { AuthContext } from "../../contexts/AuthContext";
import { theme } from "../../utils/theme";

export default function SignIn() {
  const { signIn, loadingAuth } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    if (email === "" || password === "") {
      return;
    }

    await signIn({ email, password });
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Digite seu email"
          style={styles.input}
          placeholderTextColor={theme.colors.slateGray}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Sua senha"
          style={styles.input}
          placeholderTextColor={theme.colors.slateGray}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          {loadingAuth ? (
            <ActivityIndicator size={25} color={theme.colors.seasalt} />
          ) : (
            <Text style={styles.buttonText}>Acessar</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.seasalt,
  },
  logo: {
    marginBottom: 18,
  },
  inputContainer: {
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 32,
    paddingHorizontal: 14,
  },
  input: {
    width: "95%",
    height: 40,
    backgroundColor: theme.colors.seasalt,
    marginBottom: 12,
    borderRadius: theme.borderRadius.md,
    paddingHorizontal: 8,
    color: theme.colors.eerieBlack,
    borderWidth: 1,
    borderColor: theme.colors.platinum,
    fontSize: theme.fontSize.md,
  },
  button: {
    width: "95%",
    height: 40,
    backgroundColor: theme.colors.outerSpace,
    borderRadius: theme.borderRadius.md,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: theme.fontSize.lg,
    fontWeight: "bold",
    color: theme.colors.seasalt,
  },
});
