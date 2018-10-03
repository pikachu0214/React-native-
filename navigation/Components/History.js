import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import {createBottomTabNavigator} from 'react-native';
import Calc from "./Calc";

export default class History extends React.Component {
  static navigationOptions = {title: 'History'};
  render() {
    const { params } = this.props.navigation.state;
    return <View style={styles.container}>
        <FlatList data={params.history} renderItem={({ item }) => <Text>{item.key}</Text>} />
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
