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
  const [isModalVisible2, setModalVisible2] = useState(false);
  const [Details, setDetails] = useState([]);

  function toggleModal() {
    setModalVisible(!isModalVisible);
  }
  function toggleModal2() {
    setModalVisible2(!isModalVisible2);
  }
  return (
    <View style={styles.Tudocont}>
      <View style={{ flex: 1 }}>
        <Modal
          isVisible={isModalVisible}
          coverScreen={true}
          backdropColor={"#008AA1"}
        >
          <View style={{ flex: 1, }}>
            <View style={styles.containermodal}>
              <Text style={styles.titulo}>
                {Details.name}</Text>
              <Button title="Voltar" onPress={() => {
                toggleModal();
              }} />
              <Button title="Voltar" onPress={() => {
                toggleModal2();
              }} />
            </View>
            <Modal
              isVisible={isModalVisible2}
              coverScreen={true}
              backdropColor={"#008AA1"}
            >
              <View style={{ flex: 1, }}>
                <View style={styles.containermodal}>
                  <Text style={styles.titulo}>
                    {Details.name}</Text>
                  <Button title="Voltar" onPress={() => {
                    toggleModal2();
                  }} />
                </View>
              </View>
            </Modal>
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
              onPress={() => {
                toggleModal();
                setDetails(item)
              }
              }
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
  containermodal: {
    backgroundColor: "white",
    borderRadius: 5,
    height: "100%",
    padding: 20
  },
  titulo: {
    fontSize: 45,
    textAlign: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    margin: 10,

  },

});

export default Lista_vacas;
