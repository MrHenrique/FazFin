import React from "react";
import {
  Texto,
  TituloBotao,
  BotaoPress,
  AreaCont,
  BannerButton,
  TextoBannerRec,
  TextoBannerDes,
  TextoBanner,
  BannerText,
  BotaoPress2,
  ImgBg,
} from "./styles";
import Header from "../../components/Header";
import Dropdown from "../../components/Select";
function GeralFaz({ navigation }) {
  const imgbg1 = "../../../assets/bg4.jpg";
  return (
    <ImgBg source={require(imgbg1)} imageStyle={{ opacity: 0.5 }}>
      <Header title="Olá, Carlos" />
      <AreaCont>
        <BannerButton>
          <BannerText>{"Verificar o balanço da Fazenda."}</BannerText>
          <TextoBanner>
            {"Receita Mensal: "}
            <TextoBannerRec>{"R$ 5000,00"}</TextoBannerRec>
          </TextoBanner>
          <TextoBanner>
            {"Receita Mensal: "}
            <TextoBannerDes>{"R$ 3500,00"}</TextoBannerDes>
          </TextoBanner>
          <TextoBanner>{"Total Mensal: R$ 1500,00"}</TextoBanner>
        </BannerButton>
        <BotaoPress2>
          <TituloBotao>{"Cadastrar ou modificar rebanhos"}</TituloBotao>
        </BotaoPress2>
        <Texto>Selecionar rebanho</Texto>
        <Dropdown datadropdown={["Rebanho 1", "Pasto Bezerros", "Solteiras"]} />
        <BotaoPress>
          <TituloBotao>{"Continuar"}</TituloBotao>
        </BotaoPress>
        <BotaoPress onPress={() => navigation.navigate("Home")}>
          <TituloBotao>{"Voltar"}</TituloBotao>
        </BotaoPress>
      </AreaCont>
    </ImgBg>
  );
}
export default GeralFaz;
