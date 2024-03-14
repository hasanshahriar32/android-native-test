import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";

export default function App() {
  return (
    <View style={style.container}>
      <Text style={style.textOne}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
      <Button title="Click Me" onPress={() => alert("Button Clicked")} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: 300,
    width: 380,
    backgroundColor: "dodgerblue",
  },
  textOne: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    marginTop: 100,
  },
});
