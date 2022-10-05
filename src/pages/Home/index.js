import React from "react";
import { fazendas } from "../../components/Select/data";
import Select from "../../components/Select";
import {
  Dimensions,
  View,
  SafeAreaView,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const { height, width } = Dimensions.get("window");
function Home({ navigation }) {
  const imgbg1 = "../../../assets/background7.jpg";
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imgbg}
        source={require(imgbg1)}
        imageStyle={{ opacity: 0.6 }}
      >
        <Image
          style={styles.logo}
          source={require("../../../assets/FazFin.png")}
        />
        <Text style={styles.title}>Bem-vindo(a)</Text>
        <View style={styles.viewtext}>
          <Text style={styles.texto}>Sua fazenda:</Text>
          <Select
            touchableText="Selecione sua fazenda"
            title="Fazendas"
            objKey="code"
            objValue="name"
            data={fazendas}
          />
        </View>
        <TouchableOpacity
          style={styles.botaopress}
          onPress={() => navigation.navigate("CadastroFaz")}
        >
          <Text style={styles.tituloBotao}>{"Cadastrar fazenda"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botaopress}
          onPress={() => navigation.navigate("GeralFaz")}
        >
          <Text style={styles.tituloBotao}>{"Continuar"}</Text>
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
  logo: {
    resizeMode: "contain",
    height: height * 0.15,
    width: width * 0.3,
    marginVertical: height * 0.04,
    alignSelf: "center",
  },
  title: {
    fontSize: height * 0.045,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
  texto: {
    fontSize: height * 0.03,
    color: "#ffffff",
    textAlign: "center",
  },
  viewtext: {
    alignSelf: "center",
    marginVertical: height * 0.05,
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
    bottom: height * -0.295,
  },
  tituloBotao: {
    fontSize: height * 0.02,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Home;
