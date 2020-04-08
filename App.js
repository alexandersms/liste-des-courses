import React, {useState} from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Header from "./components/Header";
import ListItem from "./components/ListItem";

//import { uuid } from "uuidv4";

export default function App() {

  const [items, setItems] = useState([
    {id: 1, text: "Lait"},
    {id: 2, text: "Baguette"},
    {id: 3, text: "Yaourt"},
    {id: 4, text: "Riz"},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id)
    })
  }

  return (
    <View style={styles.container}>
      <Header/>
      <FlatList
        data={items}
        renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem}/>}
        keyExtractor={item => item.id}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});
