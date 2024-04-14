import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const  ItemList = ({itemList, handleModal}) => {
  return (
    <View style={styles.elementContainer}>
        <FlatList
        style={styles.flatlist}
        data={itemList}
        keyExtractor={element=> element.id.toString()}
        renderItem={({item})=>
            <TouchableOpacity style={styles.card} onPress={()=>handleModal(item)}>
                <Text style={styles.elementText}>{item.value}</Text>
            </TouchableOpacity>
        }
        />
    </View>
  )
}

export default ItemList

const styles = StyleSheet.create({
    elementContainer:{
        backgroundColor:"#AD88C6",
        marginTop:15,
        alignItems:'center',
        width:"100%",
        paddingVertical:10,
    }, 
    flatlist:{
        width:"80%"
    }, 
    card:{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#EED3D9",
        width:"100%",
        paddingVertical: 15,
        marginVertical:10,
        borderRadius:5,
    },
    elementText:{
        fontWeight: 'bold',
        fontSize:16,
    }
})