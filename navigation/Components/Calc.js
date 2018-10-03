import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList
} from "react-native";
import { createBottomTabNavigator } from "react-native";
import History from "./History";

export default class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", num1: "", num2: "", data: [], result: "" };
  }
  subtractButtonHandler = () => {
    const sum = parseFloat(this.state.num1) - parseFloat(this.state.num2);
    const output = this.state.num1 + " - " + this.state.num2 + " = " + sum;
    
    this.setState({
      data: [...this.state.data, { key: output }],
      num1: "",
      num2: "",
      result: sum
    });
  };
  addButtonHandler = () => {
    const sum = parseFloat(this.state.num1) + parseFloat(this.state.num2);
    const output = this.state.num1 + " + " + this.state.num2 + " = " + sum;
    this.setState({
      data: [...this.state.data, { key: output }],
      num1: "",
      num2: "",
      result: sum
    });
  };
  static navigationOptions = { title: "Calculator" };
  render() {
    const { navigate } = this.props.navigation;
    return <View style={styles.container}>
        <View style={styles.text}>
          <Text>Result: {this.state.result}</Text>
          <TextInput style={{ width: 200, borderColor: "grey", borderWidth: 1 }} keyboardType="numeric" onChangeText={num1 => this.setState(
                { num1 }
              )} value={this.state.num1} />
          <TextInput style={{ width: 200, borderColor: "grey", borderWidth: 1 }} keyboardType="numeric" onChangeText={num2 => this.setState(
                { num2 }
              )} value={this.state.num2} />
        </View>
        <View style={styles.buttons}>
          <Button onPress={() => this.addButtonHandler()} title="+" />
          <Button onPress={() => this.subtractButtonHandler()} title="-" />
          <Button onPress={() => navigate("History", {
                history: this.state.data
              })} title="History" />
        </View>
      </View>;
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
    //flex: 1,
    marginBottom: 5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 50

  }
});
