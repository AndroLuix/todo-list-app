import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableHighlight , FlatList} from 'react-native';

export default class App extends Component {
  state = {
    text: '',
    todoList: [],
  }
  

  onChangeTextHandler = (text) => {
    this.setState({ text: text })  // Modifica qui
  }

  addTodoHandler = () => {
    if (this.state.text.trim() === "") {
      return alert("Inserisci del testo")
    }
    this.setState(prevState => {
      return {
        todoList: prevState.todoList.concat(prevState.text),
        text: ''  // Aggiungi questa riga per azzerare il valore dopo l'aggiunta 
      }
    })
  }

  render() {
    // Creo una lista per le attività
    const list = this.state.todoList.map((todo, index) => {
      return <Text key={index} style={styles.listBoxText}>{todo}</Text>  // Aggiungi una chiave unica (in questo caso, index)
    })

    return (
      <View>
        <View style={styles.container}>
          <TextInput
            style={styles.Input}
            placeholder='Scrivi le Attività'
            onChangeText={this.onChangeTextHandler}
            value={this.state.text}
          />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={this.addTodoHandler}>
            <View style={styles.Invia}>
              <Text style={styles.buttonText}>Invia</Text>
            </View>
          </TouchableOpacity>
        </View>

        <FlatList data={this.state.todoList}
         renderItem={({item}) =>(
           <TouchableOpacity activeOpacity={0.5} onPress={()=>{}}>
          <View style={styles.listBox}>
            <Text style={styles.listBoxText}> {item}</Text>
          </View>
        </TouchableOpacity>

        )}> </FlatList>
       
       
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  Input: {
    borderWidth: 1,
    borderRadius: 10,
    width: '80%',
    marginTop: 20,
    margin: 10,
    padding: 10,
  },
  buttonContainer: {
    height: 50,
  },
  Invia: {
    height: 50,
    backgroundColor: 'dodgerblue',
    padding: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginTop: 4,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  listBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  
  },
  listBoxText: {
    color: 'white',
    fontSize: 20,
    marginVertical: 10,
   
    backgroundColor: `rgba(4,120,87,1)`,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '90%',

  }
});
