import React from "react";
import { Modal, Text, View, StyleSheet, Button, Image } from "react-native";

const placeDetail = props => {
  let modalContent = null;
  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image source={props.selectedPlace.image} style={styles.placeImage} />
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
    );
  }

  return (
    <Modal
      onRequestClose={props.onModalClose}
      visible={props.selectedPlace !== null}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        {modalContent}
        <View style={styles.deleteBtn}>
          <Button
            title="Delete"
            color="red"
            backgroundColor="black"
            style={styles.deleteBtn}
            onPress={props.onItemDelete}
          />
        </View>
        <View style={styles.cancleBtn}>
          <Button
            title="Cancel"
            style={styles.cancleBtn}
            onPress={props.onModalClose}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  deleteBtn: {
    margin: 8,
    backgroundColor: "#fff"
  },
  cancleBtn: {
    margin: 8,
    backgroundColor: "#fff"
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  }
});

export default placeDetail;
