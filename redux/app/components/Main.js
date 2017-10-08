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

  render() {

    const renderTodos =() => {
      return temporaryTodos.map((todo, i) => {
        return (      
          <TodoItemContainer key={i} text={todo.text} id={i}/>
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
          <TextInput style={styles.input}></TextInput>
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
