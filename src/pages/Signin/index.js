import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

export default function Signin() {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <Animatable.View
        delay={500}
        animation="fadeInLeft"
        style={style.containerHeader}
      >
        <Text style={style.message}>Ben-vindo(a)</Text>
      </Animatable.View>
      <Animatable.View
        delay={500}
        animation="fadeInUp"
        style={style.containerForm}
      >
        <Text style={style.title}>Email</Text>
        <TextInput placeholder="Digite um email..." style={style.input} />

        <Text style={style.title}>Senha</Text>
        <TextInput placeholder="Sua senha" style={style.input} />

        <TouchableOpacity style={style.button}>
          <Text style={style.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.buttonRegister}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={style.buttonRegisterext}>
            Não possui uma conta? Cadastre-se
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0059ff",
  },
  containerHeader: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingStart: "5%",
  },
  message: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
  },
  containerForm: {
    backgroundColor: "#fff",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#0059ff",
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: "center",
  },
  buttonRegisterext: {
    color: "#a1a1a1",
  },
});
