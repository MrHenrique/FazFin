import * as React from "react";
import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import BezierChartFaturamento from "../../../components/Graficos/BezierChartFaturamento";
import { scale, verticalScale } from "react-native-size-matters";
import Modal from "react-native-modal";
function Faturamento() {
  const [isModalVisible, setModalVisible] = useState(false);
  function toggleModal() {
    setModalVisible(!isModalVisible);
  }
  const imgbg1 = "../../../../assets/bg2.jpg";
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imgbg}
        source={require(imgbg1)}
        imageStyle={{ opacity: 0.3 }}
      >
        <TouchableOpacity
          onPress={() => {
            toggleModal();
          }}
        >
          <Text style={styles.texto}>Total de Faturamento:</Text>
          <Text style={styles.textoValorPos}>R$ 5000,00</Text>
          <View style={styles.lineStyle} />
          <View style={styles.containerChart}>
            <BezierChartFaturamento />
          </View>

          <Modal
            isVisible={isModalVisible}
            coverScreen={true}
            backdropColor={"rgba(234,242,215,0.8)"}
            animationIn="slideInUp"
            animationOut="slideOutDown"
          >
            <View style={styles.modalContainer}>
              <Text style={styles.tituloModal}>Detalhes de Faturamento:</Text>
              <ScrollView style={styles.modalScroll}>
                <TouchableOpacity style={styles.listaDet}>
                  <Text style={styles.tituloBotao}>
                    {"Produção Leite 165l 09/10 - R$ 500,00"}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listaDet2}>
                  <Text style={styles.tituloBotao}>
                    {"Produção Leite 165l 19/10 - R$ 555,00"}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listaDet}>
                  <Text style={styles.tituloBotao}>
                    {"Produção Leite 165l 18/10 - R$ 555,00"}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listaDet2}>
                  <Text style={styles.tituloBotao}>
                    {"Produção Leite 165l 17/10 - R$ 555,00"}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listaDet}>
                  <Text style={styles.tituloBotao}>
                    {"Produção Leite 165l 16/10 - R$ 555,00"}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listaDet2}>
                  <Text style={styles.tituloBotao}>
                    {"Produção Leite 165l 15/10 - R$ 555,00"}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listaDet}>
                  <Text style={styles.tituloBotao}>
                    {"Produção Leite 165l 14/10 - R$ 555,00"}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listaDet2}>
                  <Text style={styles.tituloBotao}>
                    {"Produção Leite 165l 13/10 - R$ 555,00"}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listaDet}>
                  <Text style={styles.tituloBotao}>
                    {"Produção Leite 165l 12/10 - R$ 555,00"}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listaDet2}>
                  <Text style={styles.tituloBotao}>
                    {"Produção Leite 165l 11/10 - R$ 555,00"}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listaDet}>
                  <Text style={styles.tituloBotao}>
                    {"Produção Leite 165l 10/10 - R$ 555,00"}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listaDet2}>
                  <Text style={styles.tituloBotao}>
                    {"Produção Leite 165l 09/10 - R$ 555,00"}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listaDet}>
                  <Text style={styles.tituloBotao}>
                    {"Produção Leite 165l 08/10 - R$ 555,00"}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listaDet2}>
                  <Text style={styles.tituloBotao}>
                    {"Produção Leite 165l 07/10 - R$ 555,00"}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listaDet}>
                  <Text style={styles.tituloBotao}>
                    {"Produção Leite 165l 06/10 - R$ 555,00"}
                  </Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
            <TouchableOpacity
              style={styles.botaopressM}
              onPress={() => {
                toggleModal();
              }}
            >
              <Text style={styles.tituloBotao}>{"Voltar"}</Text>
            </TouchableOpacity>
          </Modal>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botaopress}
          onPress={() => navigation.navigate("GeralFaz")}
        >
          <Text style={styles.tituloBotao}>{"Voltar"}</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "rgba(234,242,215,1)",
    position: "absolute",
    top: verticalScale(0),
    alignSelf: "center",
    width: scale(330),
    borderRadius: 20,
  },
  modalScroll: {
    height: verticalScale(500),
    marginVertical: verticalScale(10),
  },
  container: {
    backgroundColor: "#006773",
    flex: 1,
  },
  lineStyle: {
    backgroundColor: "#FFF",
    padding: verticalScale(0.4),
    width: scale(310),
    alignSelf: "center",
    margin: verticalScale(6),
  },
  containerChart: {
    position: "absolute",
    top: verticalScale(150),
  },
  botaopress: {
    borderRadius: 20,
    backgroundColor: "rgba(15, 109, 0, 0.9)",
    width: scale(300),
    height: verticalScale(40),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    top: verticalScale(530),
    position: "absolute",
  },
  tituloBotao: {
    fontSize: verticalScale(14),
    fontWeight: "bold",
    color: "#fff",
  },
  tituloModal: {
    fontSize: verticalScale(20),
    fontWeight: "bold",
    color: "rgba(0, 69, 19, 0.95)",
    margin: verticalScale(5),
    alignSelf: "center",
  },
  imgbg: {
    flex: 1,
    objectFit: "cover",
    padding: verticalScale(10),
  },
  textoValorNeg: {
    color: "#FF3131",
    fontWeight: "bold",
    fontSize: verticalScale(30),
    marginLeft: scale(20),
  },
  texto: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: verticalScale(25),
    marginLeft: scale(20),
  },
  textoValorPos: {
    color: "#0FFF50",
    fontWeight: "bold",
    fontSize: verticalScale(30),
    marginLeft: scale(20),
  },
  botaopressM: {
    borderRadius: 20,
    backgroundColor: "rgba(15, 109, 0, 0.9)",
    width: scale(300),
    height: verticalScale(40),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    top: verticalScale(603),
    position: "absolute",
  },
  listaDet: {
    borderRadius: 20,
    backgroundColor: "rgba(15, 109, 0, 0.95)",
    width: scale(300),
    height: verticalScale(40),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: verticalScale(5),
  },
  listaDet2: {
    borderRadius: 20,
    backgroundColor: "rgba(0, 69, 19, 0.95)",
    width: scale(300),
    height: verticalScale(40),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: verticalScale(5),
  },
});
export default Faturamento;
