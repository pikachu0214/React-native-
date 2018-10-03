import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList
} from "react-native";
//import { createBottomTabNavigator } from "react-navigation";
import HomeScreen from "./HomeScreen";
import { createStackNavigator } from "react-navigation";
export default class SettingScreen extends React.Component {
  static navigationOptions = { title: "Settings", };
  render() {
    const { params } = this.props.navigation.state;
    return <View style={styles.container}>
            <Text style={styles.text}>Welcome to settings {params.user}</Text>
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
    color: "blue"
  }
});
