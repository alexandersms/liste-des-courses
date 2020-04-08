import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello les gens</Text>
      <Image source={{uri: "https://randomuser.me/api/portraits/men/1.jpg"}} style={styles.img} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff7675",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#fafafa",
    fontSize: 30,
    fontWeight: "bold"
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  }
});
