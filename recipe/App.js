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
  Image
} from "react-native";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], search: "" };
  }
  //testing api (works)
  //componentDidMount(){
  //this.getJobs(); }

  getJobs = () => {
    //concatenate input field value to api
    const url = "http://www.recipepuppy.com/api/?i=" + this.state.search;
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          // set state the object data to pull in rest json and calls results
          data: responseJson.results
        });
      })
      .catch(error => {
        Alert.alert(error);
      });
  };
  //separates the views
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
        <StatusBar hidden={true} />
        {/*calls FlatList, must import component*/}
        <FlatList
          data={
            this.state.data //set data attribute to the object array
          }
          ItemSeparatorComponent={
            this.listSeparator //calls listSeparator method
          }
          style={{ marginLeft: "5%" }} 
          //x iterates through object name, i is the unique key index
          keyExtractor={(x, i) => i} 
          //item is set as index, returning objects in the api
          renderItem={({ item }) => (
            <View>
              {/*must import image into react-native */}
              <Image
                source={{ uri: item.thumbnail }}
                style={{ width: 50, height: 50 }}
              />
              <Text>{item.title}</Text>
            </View>
          )}
        />
        <TextInput
          style={{ fontSize: 18, width: 200 }}
          //shows in the input field
          placeholder="search recipe"
          //maps search object to api
          onChangeText={search => this.setState({ search })}
        />
        {/*calls the function getJobs*/}
        <Button title="Find" onPress={this.getJobs} />
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
