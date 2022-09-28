import React, { useState } from "react";
import {
  View,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { dataVacas } from "./vacas";

import Modal from "react-native-modal";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function Lista_vacas() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  }
  return (
    <View style={styles.Tudocont}>
      <View style={{ flex: 1 }}>
        <Modal isVisible={isModalVisible}>
          <View style={{ flex: 1 }}>
            <Text>Hello!</Text>
            <Button title="Hide modal" onPress={toggleModal} />
          </View>
        </Modal>
      </View>
      <FlatList
        data={dataVacas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.containerVacas}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.cardVacas}
              onPress={toggleModal}
            >
              <Text style={styles.textVacas}>{item.name}</Text>
            </TouchableOpacity>

          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerVacas: {
    margin: 5,
    alignItems: "center",
  },
  cardVacas: {
    padding: 15,
    backgroundColor: "#D9D9D9",
    alignItems: "center",
    borderRadius: windowHeight * 0.015,
    width: "90%",
  },
  textVacas: {
    color: "#000",
    fontSize: windowWidth * 0.06,
    fontWeight: "bold",
  },
  Tudocont: {
    flex: 1,
    paddingTop: "5%",
    paddingBottom: "1%",
    width: windowWidth,
  },

});

export default Lista_vacas;
