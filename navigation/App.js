import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { createStackNavigator } from "react-navigation";
import Calc from "./Components/Calc";
import History from "./Components/History";
import { Ionicons } from "@expo/vector-icons";

export default class App extends React.Component {
  render() {
    return  <MyApp />;
  }
}
const MyApp = createStackNavigator(
{
  Calculator: {screen: Calc},
  History: {screen: History}
},
{
navigationOptions: ({ navigation }) => ({
  tabBarIcon: ({ focused, tintColor }) => {
    const { routeName } = navigation.state;
    if (routeName === 'Calculator') {
      return <Ionicons name='md-calculator' size={25} color={tintColor} />;
      }  else if (routeName === 'History') {
      return <Ionicons name='md-information-circle' size={25} color={tintColor} />;
        }
      }
    })
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
