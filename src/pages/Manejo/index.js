import React from "react";
import {
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";
import Header from "../../components/Header";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
const { height, width } = Dimensions.get("window");
function Manejo({ navigation }) {
  const imgbg1 = "../../../assets/bg10.jpg";
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imgbg}
        source={require(imgbg1)}
        imageStyle={{ opacity: 0.6 }}
      >
        <Header title="Olá, Carlos" />
        <TouchableOpacity
          style={styles.botaoPress2}
          onPress={() => navigation.navigate("VacinaRem")}
        >
          <Text style={styles.tituloBotao2}>
            <MaterialCommunityIcons
              name="hospital-box-outline"
              size={width * 0.09}
              color="white"
            />
            {"Vacina e Remedios"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botaoPress2}
          onPress={() => navigation.navigate("MaodeObra")}
        >
          <Text style={styles.tituloBotao2}>
            <MaterialCommunityIcons
              name="hammer-screwdriver"
              size={width * 0.09}
              color="white"
            />
            {"Mão de obra"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botaoPress2}
          onPress={() => navigation.navigate("VacinaRem")}
        >
          <Text style={styles.tituloBotao2}>
            <FontAwesome5 name="tractor" size={width * 0.09} color="white" />
            {"Outros"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botaopress}
          onPress={() => navigation.navigate("PageLancavacas")}
        >
          <Text style={styles.tituloBotao}>{"Voltar"}</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#006773",
  },
  imgbg: {
    flex: 1,
    objectFit: "cover",
    width: "100%",
  },
  botaoPress2: {
    borderRadius: 20,
    backgroundColor: "rgba(15, 109, 0, 0.9)",
    width: width * 0.8,
    height: height * 0.15,
    margin: height * 0.1,
    marginBottom: height * -0.025,
    alignSelf: "center",
    justifyContent: "center",
  },
  tituloBotao2: {
    fontSize: height * 0.04,
    fontWeight: "bold",
    color: "#ffffff",
    alignSelf: "center",
    right: width * 0.025
  },
  botaopress: {
    borderRadius: 20,
    backgroundColor: "rgba(15, 109, 0, 0.9)",
    width: width * 0.9,
    height: height * 0.06,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: height * 0.015,
    alignSelf: "center",
    bottom: height * -0.14,
  },
  tituloBotao: {
    fontSize: height * 0.02,
    fontWeight: "bold",
    color: "#fff",
  },
  viewtext: {
    alignSelf: "center",
  },
  texto: {
    fontSize: height * 0.02,
    fontWeight: "bold",
    color: "#fff",
  },
});
export default Manejo;
