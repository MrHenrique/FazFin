import React from "react";
import { fazendas } from "../../components/Select/data";
import Select from "../../components/Select";
import { scale, verticalScale } from "react-native-size-matters";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
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
        <View style={styles.select}>
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
          style={styles.botaopress2}
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
    height: verticalScale(90),
    width: verticalScale(90),
    position: "absolute",
    top: verticalScale(75),
    alignSelf: "center",
  },
  title: {
    fontSize: verticalScale(30),
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    position: "absolute",
    top: verticalScale(175),
  },
  texto: {
    fontSize: verticalScale(20),
    color: "#ffffff",
    alignSelf: "center",
  },
  botaopress: {
    borderRadius: 20,
    backgroundColor: "rgba(15, 109, 0, 0.9)",
    width: scale(300),
    height: verticalScale(40),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    top: verticalScale(575),
    position: "absolute",
  },
  botaopress2: {
    borderRadius: 20,
    backgroundColor: "rgba(15, 109, 0, 0.9)",
    width: scale(300),
    height: verticalScale(40),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    top: verticalScale(625),
    position: "absolute",
  },
  tituloBotao: {
    fontSize: verticalScale(14),
    fontWeight: "bold",
    color: "#fff",
  },
  select: {
    position: "absolute",
    top: verticalScale(300),
    alignSelf: "center",
  },
});

export default Home;
