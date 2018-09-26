import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Image
} from "react-native";

export default class App extends React.Component {
                 constructor(props) {
                   super(props);
                   this.state = { num1: 0, num2: 0, result: 0 };
                 }
                 addButtonPressed = () => this.setState({
                     result:
                       parseInt(this.state.num1) +
                       parseInt(this.state.num2)
                   });

                 subtractButtonPressed = () => this.setState({
                     result:
                       parseInt(this.state.num1) -
                       parseInt(this.state.num2)
                   });
                 render() {
                   const result = this.state.result;
                   return <View style={styles.container}>
                       <Text>Result: {result}</Text>
                       <TextInput style={{ width: 200, borderColor: "gray", borderWidth: 1 }} onChangeText={num1 => this.setState(
                             { num1 }
                           )} />
                       <TextInput style={{ width: 200, borderColor: "gray", borderWidth: 1 }} onChangeText={num2 => this.setState(
                             { num2 }
                           )} />
                       <Button onPress={() => this.addButtonPressed()} title="Add" />
                       <Button onPress={() => this.subtractButtonPressed()} title="Subtract" />
                     </View>;
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
