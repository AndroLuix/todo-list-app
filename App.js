import React, { Component } from 'react';
import { todoStyle } from './styles/todoStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { View, TextInput, TouchableOpacity, FlatList, Alert, Text, StyleSheet } from 'react-native';

export default class App extends Component {

  state = {
    text: '',
    todoList: [],
  }

  onChangeTextHandler = (text) => {
    this.setState({ text: text });
  }

  addTodoHandler = () => {
    if (this.state.text.trim() === "") {
      return Alert.alert("Inserisci del testo", 'OK', [{ text: 'OK' }]);
    }
    this.setState(prevState => {
      return {
        todoList: [...prevState.todoList, prevState.text],
        text: ''
      }
    
    });
  }

  /**
   * Elimina attività
    
   */
  componentDidUpdate(prevProps, prevState) {
    if (prevState.todoList !== this.state.todoList) {
      this.flatListRef?.scrollToOffset({ animated: true, offset: 0 });
    }
  }

  deleteActivityMessage = (index) => {
    return Alert.alert(
      "Elimina", "Sicuro di voler eliminare l'Attività",
      [
        {
          text: "Sì", onPress: () => {
            const updatedState = this.removeActivity(index);
            this.setState(updatedState);
          }
        },
        { text: "No", onPress: () => console.warn("Attività NON eliminata") }
      ]
    );
  };

  removeActivity = (index) => {
    const updatedList = [...this.state.todoList];
    updatedList.splice(index, 1);
    console.warn('Attività cancellata');
    return { todoList: updatedList };
  }

  

  render() {
    return (
      <View>
        <View style={todoStyle.container}>
          <TextInput
            style={todoStyle.Input}
            placeholder='Scrivi le Attività'
            onChangeText={this.onChangeTextHandler}
            value={this.state.text}
          />
          <TouchableOpacity
            style={todoStyle.buttonContainer}
            onPress={this.addTodoHandler}>
            <View style={todoStyle.Invia}>
              <Text style={todoStyle.buttonText}>Invia</Text>
            </View>
          </TouchableOpacity>
        </View>

        <FlatList
          data={this.state.todoList}
          renderItem={({ item, index }) => (
            <View style={todoStyle.listBoxContainer}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { }}>
                <View style={todoStyle.listBox}>
                  <Text style={todoStyle.listBoxText}> {item}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5}
                onPress={() => this.deleteActivityMessage(index)}>
                <View style={todoStyle.trashIcon}>
                  <FontAwesomeIcon icon={faTrash} />
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
