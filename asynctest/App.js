import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.saveData}>
          <Text>Click to save me</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.displayData}>
          <Text>Click to display me</Text>
        </TouchableOpacity>
      </View>
    );
  }
  saveData= () => {
    let user = {
      name: 'John Doe',
      email: 'test@gmail.com',
      city: 'Stockholm'

    }
    AsyncStorage.setItem("user", JSON.stringify(user)); 
    /* JSON.stringify(user) is used to put the data model user in a string */
    /* This was before setting it to an object
      Before: AsyncStorage.setItem('user', user);
      let user = 'john  doe';
    */
  }
  displayData = async () => {
    try {
          let user = await AsyncStorage.getItem("user"); /* user is the key from AsyncStorage.setItem('user', '' ) */
          let parsed = JSON.parse(user); /* this is the key to the object, not the object */
          alert(user); /* This displays: {name: 'John Doe', email: 'test@gmail.com', city: 'Stockholm'} */
          alert(parsed.email); /* This displays: {email: 'test@gmail.com'} */
        } catch (error) {
      alert(error);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
