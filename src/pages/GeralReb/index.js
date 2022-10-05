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
const { height, width } = Dimensions.get("window");
function GeralReb({ navigation }) {
  const imgbg1 = "../../../assets/bg3.jpg";
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imgbg}
        source={require(imgbg1)}
        imageStyle={{ opacity: 0.5 }}
      >
        <Header title="Olá, Carlos" />
        <TouchableOpacity style={styles.bannerButton}>
          <Text style={styles.bannerText}>
            {"Verificar o balanço do rebanho."}
          </Text>
          <Text style={styles.textoBannerT}>
            <Text style={styles.textoBanner}>{"Receita Mensal: "}</Text>
            <Text style={styles.textoBannerRec}>{"R$ 1500,00"}</Text>
          </Text>
          <Text style={styles.textoBannerT}>
            <Text style={styles.textoBanner}>{"Gasto Mensal: "}</Text>
            <Text style={styles.textoBannerDes}>{"R$ 500,00"}</Text>
          </Text>
          <Text style={styles.textoBannerT}>
            <Text style={styles.textoBanner}>{"Total Mensal: "}</Text>
            <Text style={styles.textoBannerRec}>{"R$ 1000,00"}</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botaoPress2}
          onPress={() => navigation.navigate("PageListavacas")}
        >
          <Text style={styles.tituloBotao2}>
            <MaterialCommunityIcons name={"cow"} size={width*0.09} color={"white"} />
            {"Animais"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botaoPress2}
          onPress={() => navigation.navigate("PageLancavacas")}
        >
          <Text style={styles.tituloBotao2}>
            <MaterialCommunityIcons
              name={"calculator-variant"}
              size={width*0.09}
              color={"white"}
            />
            {"Despesas"}
          </Text>
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
  container: {
    flex: 1,
    backgroundColor: "#006773",
  },
  imgbg: {
    flex: 1,
    objectFit: "cover",
    width: "100%",
  },
  bannerButton: {
    borderRadius: 30,
    height: height * 0.25,
    width: width * 0.8,
    alignSelf: "center",
    backgroundColor: "rgba(15,109,0,0.9)",
    bottom: height * -0.05,
    marginBottom: height*0.1,
  },
  bannerText: {
    color: "#fff",
    fontSize: width * 0.05,
    fontWeight: "bold",
    margin: width * 0.015,
    marginTop: height * 0.03,
    alignSelf: "center",
  },
  textoBannerT: {
    textAlign: "center",
    margin: width * 0.005,
  },
  textoBanner: {
    color: "#fff",
    fontSize: width * 0.045,
  },
  textoBannerRec: {
    color: "#0FFF50",
    fontSize: width * 0.045,
  },
  textoBannerDes: {
    color: "#FF3131",
    fontSize: width * 0.045,
  },
  botaoPress2: {
    borderRadius: 20,
    backgroundColor: "rgba(15, 109, 0, 0.9)",
    width: width * 0.8,
    height: height * 0.15,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    margin:height * 0.015,
  },
  tituloBotao2: {
    fontSize: width * 0.08,
    fontWeight: "bold",
    color: "#fff",
  },
  botaopress: {
    borderRadius: 20,
    backgroundColor: "rgba(15, 109, 0, 0.9)",
    width: width * 0.9,
    height: height * 0.06,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    bottom: height * -0.12,
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
    fontSize: height * 0.03,
    color: "#ffffff",
    textAlign: "center",
  },
});
export default GeralReb;
