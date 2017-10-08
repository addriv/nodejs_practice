//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// const Home = React.createClass({
//   render: function(){
//     return (
//       <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
//         <Text>
//           Welcome from Home!
//         </Text>
//       </View>
//     );
//   }
// });

// module.exports = Home;

// create a component
class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is Home!</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Home;
