import { StatusBar } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes/indes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#0059ff" barStyle="light-content"/>
      <Routes/>
    </NavigationContainer>
  );
}
