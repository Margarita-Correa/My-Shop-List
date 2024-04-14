import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ModalCustom from './src/components/ModalCustom/Modal';
import TaskImput from './src/components/TaskImput/TaskImput';
import ItemList from './src/components/ItemList/ItemList';

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

      <TaskImput 
        handleChangeText={handleChangeText}
        addItem={addItem}
        textItem={textItem}
      />

      <ItemList
        itemList={itemList}
        handleModal={handleModal}
      />

      <ModalCustom 
          handleCancelModal={handleCancelModal}
          handleDelete={handleDelete}
          modalVisible={modalVisible}
          itemSelected={itemSelected}
      />

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
});

export default App;