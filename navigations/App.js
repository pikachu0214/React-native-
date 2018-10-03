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
import HomeScreen from "./Components/HomeScreen";
import SettingScreen from "./Components/SettingScreen";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "react-navigation";
export default class App extends React.Component {
  render() {
    return <MyApp />;  
  }
}
const MyApp = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Settings: { screen: SettingScreen }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === "Home") {
          return <Ionicons name="md-home" size={25} color={tintColor} />;
        } else if (routeName === "Settings") {
          return <Ionicons name="md-settings" size={25} color={tintColor} />;
        }
      }
    })
  }
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
