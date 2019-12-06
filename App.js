import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import placeImage from "./src/assets/image.png";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";

export default class App extends Component {
  state = {
    places: [],
    selectedPlace: null
  };

  placeAddedHandler = placeName => {
    this.setState(prevStat => {
      return {
        places: prevStat.places.concat({
          key: Math.random(),
          name: placeName,
          image: {
            uri: "https://facebook.github.io/react/logo-og.png"
          }
          // image:placeImage
        })
      };
    });
  };

  placeSelectedHandler = key => {
    this.setState(prevStat => {
      return {
        selectedPlace: prevStat.places.find(place => {
          return place.key === key;
        })
      };
    });
  };

  placeDeletedHandler = () => {
    this.setState(prevStat => {
      return {
        places: prevStat.places.filter(place => {
          return place.key !== prevStat.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  };
  modalCloseHandler = () => {
    this.setState({
      selectedPlace: null
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDelete={this.placeDeletedHandler}
          onModalClose={this.modalCloseHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.state.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFF"
  }
});
