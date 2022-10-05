import React from "react";
import {
  Text,
  Dimensions,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import Header from "../../components/Header";
const ImgLeite = "../../../assets/milk-bottle.png";
const ImgAliment = "../../../assets/cow.png";
const ImgManejo = "../../../assets/smart-farm.png";
const { height, width } = Dimensions.get("window");
function PageLancavacas({ navigation }) {
  const imgbg1 = "../../../assets/bg11.jpg";
  return (
    <SafeAreaView style={styles.ContainerTudo}>
      <ImageBackground
        style={styles.imgbg}
        source={require(imgbg1)}
        imageStyle={{ opacity: 0.6 }}
      >
        <Header title="Lançar Contas" />

        <View style={styles.areabotao}>
          <TouchableOpacity style={styles.botaos}>
            <Text style={styles.Texto}>
              <Image style={styles.imagem} source={require(ImgLeite)} />  Leite
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaos}>
            <Text style={styles.Texto}>
              <Image style={styles.imagem} source={require(ImgAliment)} />  Alimentação
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaos}onPress={() => navigation.navigate("Manejo")}>
            <Text style={styles.Texto}>
              <Image style={styles.imagem} source={require(ImgManejo)} />  Manejo
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.voltar}
            onPress={() => navigation.navigate("GeralReb")}
          >
            <Text style={styles.tituloBotao}>{"Voltar"}</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  botaos: {
    borderRadius: 20,
    backgroundColor: "rgba(15, 109, 0, 0.9)",
    width: width * 0.8,
    height: height * 0.15,
    margin: height * 0.1,
    marginBottom: height * -0.025,
    alignSelf: "center",
    justifyContent: "center",
  },
  Texto: {
    fontSize: height * 0.05,
    fontWeight: "bold",
    color: "#ffffff",
    alignSelf: "center",
    right: width * 0.025
  },
  areabotao: {
    alignSelf: "center",
  },
  Texto1: {
    fontSize: width * 0.045,
    fontWeight: "bold",
    color: "#fff",
  },
  voltar: {
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
  imagem: {
    height: width * 0.10,
    width: width * 0.10,
  },
  ContainerTudo: {
    flex: 1,
    backgroundColor: "#006773",
  },
  imgbg: {
    flex: 1,
    objectFit: "cover",
    width: "100%",
  },

  tituloBotao: {
    fontSize: height * 0.02,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default PageLancavacas;
