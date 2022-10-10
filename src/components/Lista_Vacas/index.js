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
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import Modal from "react-native-modal";
import { scale, verticalScale } from "react-native-size-matters";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function Lista_vacas() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [Details, setDetails] = useState([]);

  function toggleModal() {
    setModalVisible(!isModalVisible);
  }
  function verificagenero() {
    if (Details.genero == "1") return <Text>Gênero: Macho</Text>;
    return <Text>Gênero: Femea</Text>;
  }
  function Contasvaca(a) {
    if (a == 1) return Details.lucro;
    else if (a == 2) return Details.gasto;
    else if (a == 3) return Details.media;
  }
  return (
    <View style={styles.Tudocont}>
      <View style={{ flex: 1 }}>
        <Modal
          isVisible={isModalVisible}
          coverScreen={true}
          backdropColor={"#008AA1"}
        >
          <View style={{ flex: 1 }}>
            <View style={styles.containermodal}>
              <Text style={styles.titulo}>{Details.name}</Text>
              <Text style={styles.preencher}>
                Ano de nascimento: {Details.anonasc}
              </Text>
              <Text style={styles.preencher}>{verificagenero()}</Text>
              <Text style={styles.preencher}>
                Indentidicação(brinco): {Details.etiqueta}
              </Text>
              <Text style={styles.preencher}>
                Descrição: {Details.descricao}
              </Text>
              <View style={styles.contasvaca}>
                <Text style={styles.text}>Lucro Total: {Contasvaca(1)}</Text>
                <Text style={styles.text}>Gasto Total: {Contasvaca(2)}</Text>
                <Text style={styles.text}>
                  Média da Produção: {Contasvaca(3)}
                </Text>
              </View>
              <View style={styles.contasvaca}>
                <Text style={styles.rendimento}>Rendimento</Text>
                <Text style={styles.rendimentototal}>{Details.rendimento}</Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.botaovoltar}
              onPress={() => {
                toggleModal();
              }}
            >
              <Text style={styles.textovoltar}>Voltar</Text>
            </TouchableOpacity>
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
                setDetails(item);
              }}
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
    paddingBottom: verticalScale(80),
  },
  containermodal: {
    backgroundColor: "white",
    borderRadius: 5,
    height: "90%",
    padding: 20,
    marginBottom: 11,
  },
  titulo: {
    fontSize: 45,
    textAlign: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    margin: 10,
  },
  preencher: {
    width: "100%",
    fontSize: 20,
    margin: 5,
  },
  botaovoltar: {
    backgroundColor: "#008000",
    width: "100%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
  },
  textovoltar: {
    color: "white",
    fontSize: 18,
  },
  contasvaca: {
    width: "100%",
    padding: 10,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    backgroundColor: "#f2f2f2",
  },
  rendimento: {
    fontSize: 25,
    textAlign: "center",
  },
  rendimentototal: {
    fontSize: 25,
    textAlign: "center",
    color: "#080",
  },
});

export default Lista_vacas;
