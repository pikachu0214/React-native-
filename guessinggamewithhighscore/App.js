import React from "react";
import { StyleSheet, Text, View, Button, TextInput, Alert, AsyncStorage } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guess: 0,
      text: " Guess a number between 1-100",
      count: 0,
      randomNumber: 0
    };
  }
  componentDidMount() {
    const rand = Math.floor(Math.random() * 100) + 1;
    this.setState({
      randomNumber: rand
    });
  }
  /*try {
    await AsyncStorage.setItem('', )
  } catch(error){
    Alert.alert('Error saving data');
  }
  */
  buttonPress = () => {
    let randomNumber = this.state.randomNumber;
    let Guess = JSON.stringify(this.state.guess);
    let userGuess = JSON.parse(Guess);
    if (userGuess > randomNumber) {
      this.setState(prevState => {
        return {
          text: "Your guess is too high ",
          count: prevState.count + 1
        };
      });
    } else if (userGuess < randomNumber) {
      this.setState(prevState => {
        return {
          text: "Your guess is too low ",
          count: prevState.count + 1
        };
      });
    } else if (userGuess == randomNumber) {
      this.setState(prevState => {
        return { text: "you got it ", count: prevState.count + 1 };
      });
      Alert.alert("count: " + this.state.count);
    }
    return this.state.text;
  };
  render() {
    const result = this.state.text;
    return (
      <View style={styles.container}>
        <Text
          style={{
            width: 200,
            backgroundColor: "blue",
            borderRightWidth: 1
          }}
        >
          {result}
        </Text>
        <TextInput
          style={{ width: 200, borderColor: "blue", borderWidth: 1 }}
          keyboardType="numeric"
          onChangeText={guess => this.setState({ guess })}
        />
        <Button
          style={{ width: 100, borderColor: "white", borderWidth: 1 }}
          onPress={() => this.buttonPress()}
          title="Guess"
        />
      </View>
    );
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
