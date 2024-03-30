import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const App = ()=> {
  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>MY SHOP LIST</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
        <Button title='ADD'/>
      </View>

      <View style={styles.taskContainer}>
        <View style={styles.card}><Text style={styles.taskText}>Pollo</Text></View>
        <View style={styles.card}><Text style={styles.taskText}>Cuadrada feteada</Text></View>
        <View style={styles.card}><Text style={styles.taskText}>Bola de lomo</Text></View>
        <View style={styles.card}><Text style={styles.taskText}>Salmon</Text></View>
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
    alignItems: "stretch",
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
  taskContainer:{
    backgroundColor:"#AD88C6",
    borderWidth:2,
    marginTop:15,
    alignItems:'center',
    width:"80%",
    paddingVertical:10,
  },
  card:{
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#FFEAD2",
    width:"90%",
    paddingVertical: 15,
    marginVertical:10,
    borderRadius:10,
  },
  taskText:{
    fontWeight: 'bold',
    fontSize:16,
  }
});

export default App;