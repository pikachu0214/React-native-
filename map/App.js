import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Location, Permissions, MapView } from "expo";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      region: {
        latitude: 60.200692,
        longitude: 24.934302,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0221
      }
    };
  }
  searchAdress = () => {
    const url =
      "https://maps.googleapis.com/maps/api/geocode/json?address=" +
      this.state.address +
      "&key=AIzaSyBZjmCp5PMzNuXoV5z4heNwsbe2B3-wlSg";
    fetch(url)
      .then(response => response.json())
      .then(responseData => {
        let latitude = responseData.results[0].geometry.location.lat;
        let longitude = responseData.results[0].geometry.location.lng;
        this.setState({
          region: {
            latitude: latitude,
            longitude: longitude
          }
        });
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: this.state.region.latitude,
            longitude: this.state.region.longitude,
            latitudeDelta: 0.0322,
            longitudeDelta: 0.0221
          }}
        >
          <MapView.Marker
            coordinate={{
              latitude: this.state.region.latitude,
              longitude: this.state.region.longitude
            }}
          />
        </MapView>
        <View style={styles.text}>
          <TextInput
            style={styles.textAddress}
            onChangeText={address => this.setState({ address })}
            value={this.state.address}
            placeholder="        Address "
          />
          <Button onPress={this.searchAdress} title="SHOW" />
        </View>
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
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute"
  },
  text: {
    position: "absolute",
    bottom: 530,
    width: 300
  },
  textAddress: {
    height: 40,
    backgroundColor: "white",
    bottom: 5
  }
});
