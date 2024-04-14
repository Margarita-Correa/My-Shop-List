import { Button, StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

const TaskImput = ({handleChangeText, textItem, addItem}) =>{
  return (
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          onChangeText={handleChangeText}
          value ={textItem}
        />
        <Button title='ADD' color="#EEA5A6" onPress={addItem}/>
      </View>

  )
}
export default TaskImput

const styles = StyleSheet.create({
  inputContainer:{
    flexDirection: "row",
    justifyContent:"center",
  },
  input:{
    borderBottomWidth:1,
    borderBottomColor: "black",
    width:200,
    marginEnd:10,
  }
})