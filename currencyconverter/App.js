import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  Picker
} from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currencies: [], rates: {}, value: 0, result: 0 };
  }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
       fetch("http://data.fixer.io/api/latest?access_key=ad25939469631d79ef81cce2d1ba2d06&format=1")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ rates: responseJson.rates });
        this.setState({ currencies: Object.keys(this.state.rates) });
      })
      .catch(error => {
        Alert.alert(error);
      });
  }
  convert = () => {
    if (this.state.currency != undefined) {
      let rateValue = this.state.rates[this.state.currency];
      let userValue = this.state.value;
      let result = userValue / rateValue;

      this.setState({ result: result.toFixed(2) });
    }
    else {
      Alert.alert("Choose currency");
    }
  };
  render() {
    const labels = this.state.currencies.map(currency => (
      <Picker.Item key={currency} label={currency} value={currency} />
    ));
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30, marginBottom: "20%", color: "blue" }}>
          Currency Converter
        </Text>
        <Text style={styles.textResult}>{this.state.result} &euro;</Text>

        <View style={styles.userInput}>
          <TextInput
            style={{ width: 100, fontSize: 20, margin: 20 }}
            keyboardType="numeric"
            onChangeText={value => this.setState({ value })}
          />
          <Picker
            selectedValue={this.state.currency}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ currency: itemValue })
            }
          >
            <Picker.Item label=" " />
            {labels}
          </Picker>
        </View>

        <Button title="Convert" onPress={this.convert} />
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