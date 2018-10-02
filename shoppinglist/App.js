import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TextInput
} from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", data: [], result: "" };
  }
  addList = () => {
    this.setState({
      data: [...this.state.data, { key: this.state.text }],
      text: ""
    });
  };
  resetList = () => {
    this.setState({
      data: [],
      text: ''
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.text}>
          <TextInput
            style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
          />
          <Button title="Add" onPress={this.addList} />
          <Button title="Clear" onPress={this.resetList} />
        </View>
        <View style={styles.list}>
          <Text style={{color: "blue"}}>Shopping List</Text>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => <Text>{item.key}</Text>}
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
    alignItems: "flex-start",
    justifyContent: "center"
  },
  text: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between"
  },
  list: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
