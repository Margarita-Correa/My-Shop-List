import { useState } from 'react';
import { Button, FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const App = ()=> {

  const [textItem, setTextItem] = useState("");
  const [itemList, setItemList]= useState([]);

  const addItem=()=>{
    setItemList(currentValue =>[
      ...currentValue, 
        {id: (Math.random()*10).toString(), value:textItem}
    ])
    setTextItem("")
  }
  console.log(itemList);
  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>MY SHOP LIST</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} 
          onChangeText={(e)=> setTextItem(e)}
          value ={textItem}
        />
        <Button title='ADD' onPress={addItem}/>
      </View>

      <View style={styles.taskContainer}>
        <FlatList 
          style={styles.flatlist}
          data={itemList}
          keyExtractor={task=> task.id.toString()}
          renderItem={({item})=>
          <View  style={styles.card}>
            <Text style={styles.taskText}>{item.value}</Text>
          </View>
          }
        />
      </View>
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
    backgroundColor:"#FFEAD2",
    width:"100%",
    paddingVertical: 15,
    marginVertical:10,
    borderRadius:5,
  },
  taskText:{
    fontWeight: 'bold',
    fontSize:16,
  }
});

export default App;