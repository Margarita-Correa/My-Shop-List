import { useState } from 'react';
import { Button, FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const App = ()=> {

  const [textItem, setTextItem] = useState("");
  const [itemList, setItemList]= useState([]);


  const [modalVisible, setModalVisible]= useState(false)
  const [itemSelected,setItemSelected] = useState({})

  const handleChangeText = (text)=>setTextItem(text)

  const addItem=()=>{
    setItemList(currentValue =>[
      ...currentValue, 
        {id: Math.random().toString(), value:textItem}
    ])
    setTextItem("")
  }

  const handleModal =(item)=>{
    setItemSelected(item)
    setModalVisible(true)
  }

  const handleDelete =()=>{
    const filter = itemList.filter(task => task !== itemSelected)
    setItemList(filter)
    setModalVisible(false)
  }

  const handleCancelModal=()=>{
    setItemSelected({}),
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>MY SHOP LIST</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} 
          onChangeText={handleChangeText}
          value ={textItem}
        />
        <Button title='ADD' color="#EEA5A6" onPress={addItem}/>
      </View>

      <View style={styles.taskContainer}>
        <FlatList 
          style={styles.flatlist}
          data={itemList}
          keyExtractor={task=> task.id.toString()}
          renderItem={({item})=>
            <TouchableOpacity style={styles.card} onPress={()=>handleModal(item)}>
                <Text style={styles.taskText}>{item.value}</Text>
            </TouchableOpacity>
          }
        />
      </View>
      
       <Modal visible={modalVisible} animationType='slide' transparent={true}>
        <View style={styles.modalStyles}>
          <View style={styles.modalContainer}>
            <View style={styles.textContainer}>
                <Text>Estas seguro que queres  borrar:</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textModal}>{itemSelected.value}</Text>
            </View>
              <View style={styles.btnContainer}>
                <Button title="Borrar" color="#E493B3" onPress={handleDelete}/>
                <Button title="Cancelar" color="#E493B3" onPress={handleCancelModal} />     
            </View>
          </View>
        </View>

      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    backgroundColor:"#AD88C6",
    alignItems:"center",
    flex:1,
  },
  inputContainer:{
    flexDirection: "row",
    justifyContent:"center",
  },
  titleView:{
    flexDirection: "row",
    justifyContent:"center",
    backgroundColor:"#AD88C6",
    width:"100%",
    padding: 15,
    marginVertical:10,
  },
  title:{
    fontWeight:'bold',
    fontSize:22,
  },
  input:{
    borderBottomWidth:1,
    borderBottomColor: "black",
    width:200,
    marginEnd:10,
  },
  flatlist:{
    width:"80%"
  },
  taskContainer:{
    backgroundColor:"#AD88C6",
    marginTop:15,
    alignItems:'center',
    width:"100%",
    paddingVertical:10,
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
  taskText:{
    fontWeight: 'bold',
    fontSize:16,
  },
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
});

export default App;