import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  Alert,
  StatusBar,
  Image,
  Picker,
  Item,
  ScrollView
} from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: [],
      amount: 0,
      picker: "",
      pickIndex: 0,
      total: 0
    };
  }
  componentDidMount() {
    this.getJobs();
  }
  getJobs = () => {
    const url = "http://data.fixer.io/api/latest?access_key=ad25939469631d79ef81cce2d1ba2d06&format=1";
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ currency: responseJson.rates });
      })
      .catch(error => {
        Alert.alert(error);
      });
  };
  listSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "80%",
          backgroundColor: "#CED0CE",
          marginLeft: "10%"
        }}
      />
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.currency}
          ItemSeparatorComponent={this.listSeparator}
          style={{ marginLeft: "5%" }}
          keyExtractor={(x, i) => i}
          renderItem={({ item }) => (
            <View>
              <Item {...item} />
            </View>
          )}
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
