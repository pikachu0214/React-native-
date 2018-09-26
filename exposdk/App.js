import React from "react";
import { StyleSheet, Text, View, Alert, Button, TextInput } from "react-native";
import { MapView } from "expo";

export default class App extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 60.200692,
            longitude: 24.934302,
            latitudeDelta: 0.0322,
            longitudeDelta: 0.0221
          }}
        >
          <MapView.Marker
            coordinate={{ latitude: 60.201373, longitude: 24.934041 }}
            title="Haaga-Helia"
          />
        </MapView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
