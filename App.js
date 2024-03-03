import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={{ fontWeight: "bold", fontSize: 20, margin: 5 }}>
          Open up App.js to start working on your app!
        </Text>
        <Text>Hello world!</Text>
        <StatusBar style="auto" />
        <Image
          source={require("./assets/adaptive-icon.png")}
          style={{ height: 200, width: 200 }}
        />
        <View style={styles.imageBtn}>
          <Image
            source={{
              uri: "https://avatars.githubusercontent.com/u/67302140?v=4",
            }}
            style={{ width: 30, height: 30 }}
          />
          <Button title="Click me" onPress={() => alert("Button clicked")} />
        </View>
        <Text style={styles.textStyle}>
          {new Array(20).fill(0).map((_, index) => (
            <Text key={index}>This is a text {index}</Text>
          ))}
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#fff",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageBtn: {
    display: "flex",
    flexDirection: "row",
    width: "full",
  },
  textStyle: { fontWeight: "bold", fontSize: 20, margin: 5 },
});
