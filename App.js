import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./src/navigation/";
import Login from "./src/screens/login/Login";
import Main from "./src/screens/main-page/Main";
import ProducerProfile from "./src/screens/producer-profile/ProducerProfile";

export default function App() {
  return (
    <Login />
    //<ProducerProfile/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
