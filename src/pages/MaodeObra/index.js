import React from "react";
import {
  AreaCont,
  Container,
  Texto,
  CampoTexto,
  BotaoPress,
  TituloBotao,
} from "./styles";
import { ImageBackground, StyleSheet } from "react-native";
import Header from "../../components/Header";
import Select from "../../components/Select";
import { rebanhos } from "../../components/Select/data";
function MaodeObra({ navigation }) {
  const imgbg1 = "../../../assets/bg2.jpg";
  return (
    <Container>
      <Header title={"Vacina e Remédios"} />
      <ImageBackground
        style={styles.imgbg}
        source={require(imgbg1)}
        imageStyle={{ opacity: 0.6 }}
      >
        <AreaCont>
          <Texto>Quantidade</Texto>
          <CampoTexto placeholder=""></CampoTexto>

          <Texto>Serviço prestado</Texto>
          <CampoTexto placeholder=""></CampoTexto>

          <Texto>Total Gasto</Texto>
          <CampoTexto placeholder=""></CampoTexto>
          <Select
            touchableText="Selecione seu rebanho"
            title="Rebanhos"
            objKey="code"
            objValue="name"
            data={rebanhos}
          />
          <BotaoPress onPress={() => navigation.navigate("Manejo")}>
            <TituloBotao>{"Voltar"}</TituloBotao>
          </BotaoPress>
        </AreaCont>
      </ImageBackground>
    </Container>
  );
}
const styles = StyleSheet.create({
  imgbg: {
    flex: 1,
    objectFit: "cover",
    width: "100%",
  },
});
export default MaodeObra;
