import { StyleSheet, Text, View, Button,Modal } from 'react-native'
import React from 'react'

const ModalCustom = ({modalVisible, itemSelected, handleCancelModal, handleDelete}) => {
  return (
    <Modal visible={modalVisible} animationType='slide' transparent={true}>
    <View style={styles.modalStyles}>
      <View style={styles.modalContainer}>
        <View style={styles.textContainer}>
            <Text>Are you sure to remove:</Text>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.textModal}>{itemSelected.value}</Text>
        </View>
          <View style={styles.btnContainer}>
            <Button title="Remove" color="#E493B3" onPress={handleDelete}/>
            <Button title="Cancel" color="#E493B3" onPress={handleCancelModal} />     
        </View>
      </View>
    </View>
  </Modal>
  )
}

export default ModalCustom

const styles = StyleSheet.create({
    modalStyles:{
        backgroundColor:"#EED3D9",
        flex:1,
        alignItems:"center",
        justifyContent:"center"
      },
      modalContainer:{
        backgroundColor:"#fcf7f9",
        width:"80%",
        paddingVertical:30,
        alignItems:"center",
        borderRadius:10,
      },
      textContainer:{
        margin:10,
      },
      textModal:{
        fontWeight:"bold",
      },
      btnContainer:{
        flexDirection:"row",
        gap:20,
      },
})
