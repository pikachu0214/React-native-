import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  AsyncStorage
} from "react-native";

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
  buttonPress = async () => {
    /* saved number of counts */
    try {
      await AsyncStorage.setItem("count", JSON.stringify(this.state.count));
    } catch (error) {
      Alert.alert("error saving data");
    }

    /* run the count program */
    try {
      let count = await AsyncStorage.getItem("count");
      /* count is the key from AsyncStorage.setItem('count', this.state.count ) */
      let parsed = JSON.parse(count);
      /* this is the key to the object, not the object */
      let randomNumber = this.state.randomNumber;
      let userGuess = parseInt(this.state.guess);
      if (userGuess > randomNumber) {
        this.setState(prevState => {
          return {
            text: "Your guess is too high ",
            count: prevState.count + 1
          };
        });
      } else if (userGuess < randomNumber) {
        this.setState(prevState => {
          return { text: "Your guess is too low ", count: prevState.count + 1 };
        });
      } else if (userGuess == randomNumber) {
        this.setState(prevState => {
          return { text: "HighScore", count: prevState.count + 1 };
        });
        Alert.alert("HighScore: " + parsed);
        /* alert the resulting high score */
      }
      return this.state.text;
    } catch (error) {
      Alert.alert(error);
    }
    
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
