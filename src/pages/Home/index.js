import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  SafeAreaView,
} from "react-native";
import {
  Container,
  Title,
  Logo,
  Texto,
  ImgBg,
  TituloBotao,
  BotaoPress,
  AreaCont,
} from "./styles";
import Header from "../../components/Header";
import Dropdown from "../../components/Dropdown";
function Home({ navigation }) {
  const imgbg1 = "../../../assets/background7.jpg";
  return (
    <Container>
      <ImgBg source={require(imgbg1)} imageStyle={{ opacity: 0.5 }}>
        <Header title="FazFin" />
        <AreaCont>
          <Logo source={require("../../../assets/FazFin.png")} />
          <Title>Bem-vindo(a)</Title>
          <Texto>Selecione sua Fazenda</Texto>
          <Dropdown />
          <BotaoPress onPress={() => navigation.navigate("CadastroFaz")}>
            <TituloBotao>{"Cadastrar fazenda"}</TituloBotao>
          </BotaoPress>
          <BotaoPress>
            <TituloBotao>{"Continuar"}</TituloBotao>
          </BotaoPress>
        </AreaCont>
      </ImgBg>
    </Container>
  );
}

export default Home;
