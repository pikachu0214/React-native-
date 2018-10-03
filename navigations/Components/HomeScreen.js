import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList
} from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import SettingScreen from "./SettingScreen";
import { createStackNavigator } from "react-navigation";
export default class HomeScreen extends React.Component {
  static navigationOptions = { title: "Home" };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text> Home Screen </Text>
        <Button
          onPress={() => navigate("Settings", {user: 'Mike'})}
          title="Setting"
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
  },
  text: {
    padding: 5,
    color: "blue",
    backgroundColor: "#fff"
  }
});
