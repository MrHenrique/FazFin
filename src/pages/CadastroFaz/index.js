import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  View,
  ImageBackground,
  TextInput,
  StyleSheet,
  Dimensions,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const { height, width } = Dimensions.get("window");
function CadastroFaz() {
  const [nomefaz, setNomefaz] = useState("");
  const [proprietario, setProprietario] = useState("");
  const [tipoprod, setTipoprod] = useState("");
  function cadFaz() {
    const data = {
      nomefaz,
      proprietario,
      tipoprod,
    };
    console.log(data);
  }
  const CadSucess = () => {
    Alert.alert("Cadastro com sucesso!");
  };
  const navigation = useNavigation();
  const imgbg1 = "../../../assets/backgroundCad.jpg";
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
        <View style={styles.viewtext}>
          <Text style={styles.texto}>Nome da fazenda</Text>
          <TextInput
            style={styles.campoTexto}
            onChangeText={setNomefaz}
            value={nomefaz}
            placeholder="Qual o nome da sua Fazenda?"
          ></TextInput>
          <Text style={styles.texto}>Proprietário</Text>
          <TextInput
            style={styles.campoTexto}
            onChangeText={setProprietario}
            value={proprietario}
            placeholder="Qual o nome do proprietário?"
          ></TextInput>
          <Text style={styles.texto}>Tipo de produção</Text>
          <TextInput
            style={styles.campoTexto}
            onChangeText={setTipoprod}
            value={tipoprod}
            placeholder="Ex: Pecuaria Leiteira"
          ></TextInput>
        </View>
        <TouchableOpacity style={styles.botaopress} onPress={CadSucess}>
          <Text style={styles.tituloBotao}>{"Cadastrar"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botaopress}
          onPress={() => navigation.navigate("Home")}
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
  logo: {
    resizeMode: "contain",
    height: height * 0.15,
    width: width * 0.3,
    marginVertical: height * 0.04,
    alignSelf: "center",
  },
  texto: {
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: height * 0.025,
  },
  viewtext: {
    alignSelf: "center",
    marginVertical: height * 0.05,
  },
  campoTexto: {
    backgroundColor: "#ffffff",
    color: "#000000",
    textAlign: "center",
    borderRadius: 20,
    width: width * 0.8,
    height: height * 0.06,
    marginVertical: height * 0.015,
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
    bottom: height * -0.1,
  },
  tituloBotao: {
    fontSize: height * 0.02,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default CadastroFaz;
