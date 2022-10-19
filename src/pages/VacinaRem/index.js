import React from "react";
import {
  AreaCont,
  Texto,
  Container,
  CampoTexto,
  BotaoPress,
  TituloBotao,
} from "./styles";
import { ImageBackground ,StyleSheet} from "react-native";
import {} from "./styles";
import { rebanhos } from "../../components/Select/data";
import Select from "../../components/Select";
import Header from "../../components/Header";
function VacinaRem({ navigation }) {
  const imgbg1 = "../../../assets/bg1.jpg";
  return (
    <Container>
      <Header title={"Vacina e Remédios"} />
      <ImageBackground
        style={styles.imgbg}
        source={require(imgbg1)}
        imageStyle={{ opacity: 0.6 }}
      >
        <AreaCont>
          <Texto>Preço do Remedio/Vacina</Texto>
          <CampoTexto placeholder=""></CampoTexto>

          <Texto>Quantidade</Texto>
          <CampoTexto placeholder=""></CampoTexto>

          <Texto>Volume por frasco(ou ml)</Texto>
          <CampoTexto placeholder=""></CampoTexto>

          <Texto>Selecionar rebanho vacinado</Texto>
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
export default VacinaRem;
