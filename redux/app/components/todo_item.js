import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity
} from 'react-native';

// create a component
class TodoItem extends Component {
  constructor(props){
    super(props);
    this.deleteSelf = this.deleteSelf.bind(this);
  }
  deleteSelf(){
    console.log(this.props);
    this.props.removeTodo(this.props.id);
  }

  render() {
    return (
      <TouchableOpacity onPress={this.deleteSelf}>
      <View style={styles.todoContainer}>
        <Text style={styles.todoText}>{this.props.text}</Text>
      </View>
      </TouchableOpacity>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  todoContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginBottom: -1,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  todoText: {
    
  }
});

//make this component available to the app
export default TodoItem;
