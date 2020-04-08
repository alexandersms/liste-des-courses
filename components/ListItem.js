import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons"

const ListItem = ({ item, deleteItem }) => {
    return (
        <TouchableOpacity style={styles.ListItem}>
            <View style={styles.ListItemView}>
                <Text style={styles.ListItemText}>{item.text}</Text>
                <Ionicons name="md-remove-circle" size={40} color="firebrick" onPress={() => deleteItem(item.id)} />
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    ListItem: {
        padding: 15,
        backgroundColor: '#dfe6e9',
        borderBottomWidth: 1,
        borderColor: '#b2bec3'
    },
    ListItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    ListItemText: {
        fontSize: 21,
        fontWeight: "bold"
    }
})

export default ListItem
