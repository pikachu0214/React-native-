import React from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';

export default class App extends React.Component {
  //create a state
  state = { user: "" };
  //method to change state
  updateUser = user => {
    //set new state
    this.setState({ user: user });
  };
  render() {
    return <View>
         {/*need <Picke></Picker> */} 
        <Picker selectedValue={this.state.user} onValueChange={this.updateUser}>
          <Picker.Item label="Steve" value="steve" />
          <Picker.Item label="Ellen" value="ellen" />
          <Picker.Item label="Maria" value="maria" />
        </Picker>
        <Text style={styles.container}>{this.state.user}</Text>
      </View>;
  }
}
{
 
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
