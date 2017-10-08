//import liraries
import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  StatusBar, 
  TextInput,
  ScrollView
} from 'react-native';

import TodoItemContainer from './todo_item_container';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      newTodoText: ''
    };
    this.addNewTodo = this.addNewTodo.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  addNewTodo(){
    const {newTodoText} = this.state;
    if (newTodoText && newTodoText != ''){
      this.setState({
        newTodoText: ''
      });
    }
    this.props.createTodo(newTodoText);
  }

  handleInput(event){
    this.setState({newTodoText: event.nativeEvent.text});
  }

  render() {

    const renderTodos =() => {
      return this.props.todos.map((todo, i) => {
        return (      
          <TodoItemContainer key={i} text={todo.text} id={todo.id}/>
        );
      });
    };

    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content'/>
        <View style={styles.topBar}>
          <Text style={styles.title}>
            To-Do List
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput 
            value={this.state.newTodoText}
            onChange={this.handleInput}
            returnKeyType="done"
            onSubmitEditing={this.addNewTodo}
            style={styles.input}></TextInput>
        </View>
        <ScrollView
          automaticallyAdjustContentInsets={false}>
          {renderTodos()}
        </ScrollView>
        <Text>Welcome to React Native!</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: 'white',
  },
  topBar: {
    padding: 16,
    paddingTop: 28,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2ecc71'
  },
  title : {
    color: 'white',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    padding: 8,
    paddingTop: 0,
    backgroundColor: '#2ecc71'
  },
  input: {
    height: 26,
    padding: 4,
    paddingLeft: 8,
    borderRadius: 8,
    backgroundColor: 'white'
  }
});

export default Main;
