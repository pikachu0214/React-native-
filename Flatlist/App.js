import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList
} from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", data: [], num1: 0, num2: 0, result: "" };
  }
  /*
  add = () => {
    this.setState({
     result: 
     parseFloat(this.state.num1) +
     parseFloat(this.state.num2)
    });
  }
  */
  incrementPress = () => {
    this.setState({
      data: [...this.state.data, { key: this.state.text }],
      text:
        this.state.num1 +
        " + " +
        this.state.num2 +
        " = " +
        this.state.result,
        result: parseFloat(this.state.num1) + parseFloat(this.state.num2)
    });
  };
  /*
    sub = () => {
      this.setState({
        result: parseFloat(this.state.num1) - parseFloat(this.state.num2)
      });
    }
  */
  decrementPress = () => {
    this.setState({
      data: [...this.state.data, { key: this.state.text }],
      text:
        this.state.num1 +
        " - " +
        this.state.num2 +
        " = " +
        this.state.result,
      result: parseFloat(this.state.num1) - parseFloat(this.state.num2)
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.text}>
          <Text>Result: {this.state.result}</Text>
          <TextInput
            style={{ width: 200, borderColor: "grey", borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={num1 => this.setState({ num1 })}
            value={this.state.num1}
          />
          <TextInput
            style={{ width: 200, borderColor: "grey", borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={num2 => this.setState({ num2 })}
            value={this.state.num2}
          />
          <Button onPress={() => this.incrementPress()} title="+" />
          <Button onPress={() => this.decrementPress()} title="-" />
        </View>
        <View style={styles.flatlist}>
          <Text>History: </Text>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => <Text> {item.key}</Text>}
          />
        </View>
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
  },
  text: {
    flex: 3,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  flatlist: {
    flex: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
