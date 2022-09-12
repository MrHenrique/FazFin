import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
import {
  Container,
  Texto,
  Logo,
  Title,
  ImgBg,
  TituloBotao,
  BotaoPress,
  AreaCont,
  CampoTexto,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

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
  const navigation = useNavigation();
  const imgbg1 = "../../../assets/backgroundCad.jpg";
  return (
    <Container>
      <ImgBg source={require(imgbg1)} imageStyle={{ opacity: 0.5 }}>
        <Header title="Cadastro de Fazenda" />
        <AreaCont>
          <Logo source={require("../../../assets/FazFin.png")} />
          <Texto>Nome da fazenda</Texto>
          <CampoTexto
            onChangeText={setNomefaz}
            value={nomefaz}
            placeholder="Qual o nome da sua Fazenda?"
          ></CampoTexto>
          <Texto>Proprietário</Texto>
          <CampoTexto
            onChangeText={setProprietario}
            value={proprietario}
            placeholder="Qual o nome do proprietário?"
          ></CampoTexto>
          <Texto>Tipo de produção</Texto>
          <CampoTexto
            onChangeText={setTipoprod}
            value={tipoprod}
            placeholder="Ex: Pecuaria Leiteira"
          ></CampoTexto>
          <BotaoPress>
            <TituloBotao>{"Cadastrar"}</TituloBotao>
          </BotaoPress>
          <BotaoPress
            onPress={() => {
              navigation.goBack();
            }}
          >
            <TituloBotao>{"Voltar"}</TituloBotao>
          </BotaoPress>
        </AreaCont>
      </ImgBg>
    </Container>
  );
}

export default CadastroFaz;
