import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Location, Permissions, MapView } from "expo";
export default class App extends React.Component {
  //Program renders nearby restaurants from region with marker title and address
  constructor(props) {
    super(props);
    //set states
    this.state = {
      markers: [],
      location: null,
      address: "",
      region: {
        latitude: 60.200692,
        longitude: 24.934302,
        latitudeDelta: 2.0322,
        longitudeDelta: 2.0221
      }
    };
  }
  componentDidMount() {
    //getLocation and getRestaurants methods onLoad
    this.getLocation();
    this.getRestaurants();
  }
  getLocation = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      Alert.alert("No permission to access location");
    } else {
      let location = await Location.getCurrentPositionAsync({});
      this.setState({
        region: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        }
      });
    }
  };
  getRestaurants = () => {
    //nearby search method with latitude and longitude
    let location =
      this.state.region.latitude + "," + this.state.region.longitude;
    const url =
      "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
      location +
      //key is restricted to geocoding api
      "&radius=5000&type=restaurant&key=AIzaSyBZjmCp5PMzNuXoV5z4heNwsbe2B3-wlSg";
    fetch(url)
      .then(response => response.json())
      .then(responseData => {
        //loops through the api objects and returns objects
        for (let i = 0; i in responseData.results; i++) {
          let latitude = responseData.results[i].geometry.location.lat;
          let longitude = responseData.results[i].geometry.location.lng;
          let title = responseData.results[i].name;
          let address = responseData.results[i].vicinity;
          let marker = {
            latitude: latitude,
            longitude: longitude,
            title: title,
            description: address
          };
          this.setState({
            //added marker object to markers state
            markers: [...this.state.markers, marker]
          });
        }
      });
  };
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
            latitudeDelta: 2.0322,
            longitudeDelta: 2.0221
          }}
        >
          <MapView.Marker
            coordinate={{
              latitude: this.state.region.latitude,
              longitude: this.state.region.longitude
            }}
          />
          {/* calls marker method per https://github.com/react-community/react-native-maps */}
          {this.state.markers.map(marker => (
            <MapView.Marker
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude
              }}
              title={marker.title}
              description={marker.description}
            />
          ))}
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
