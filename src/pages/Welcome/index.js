import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";


export default function Welcome() {
  return (
    <View style={style.container}>
      <View style={style.containerLogo}>
        <Image
          source={require("../../assets/logo.png")}
          style={{ width: "100%" }}
          resizeMode="contain"
        />
      </View>

      <View style={style.containerForm}>
        <Text style={style.title}>
          Monitore, organise seus gastos de qualquer lugar!
        </Text>
        <Text style={style.text}>Faça o login para começar</Text>
        <TouchableOpacity style={style.button}>
          <Text style={style.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#38a69d",
  },
  containerLogo: {
    flex: 2,
    backgroundColor: "#38a69d",
    justifyContent: "center",
    alignITEMS: "center",
  },
  containerForm: {
    flex: 1,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 28,
    marginBottom: 12,
  },
  text: {
    color: "#a1a1a1",
  },
  button: {
    position: "absolute",
    backgroundColor: "#38a69d",
    borderRadius: 50,
    paddingVertical: 8,
    width: "60%",
    alignSelf: "center",
    bottom: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});
