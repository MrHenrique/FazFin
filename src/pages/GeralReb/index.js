import React from "react";
import {
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
  TituloBotao2,
} from "./styles";
import Header from "../../components/Header";
import { MaterialCommunityIcons,MaterialIcons } from "@expo/vector-icons";
function GeralReb({ navigation }) {
  const imgbg1 = "../../../assets/bg3.jpg";
  return (
    <ImgBg source={require(imgbg1)} imageStyle={{ opacity: 0.5 }}>
      <Header title="Olá, Carlos" />
      <AreaCont>
        <BannerButton>
          <BannerText>{"Verificar o balanço da Fazenda."}</BannerText>
          <TextoBanner>
            {"Receita Mensal: "}
            <TextoBannerRec>{"R$ 1500,00"}</TextoBannerRec>
          </TextoBanner>
          <TextoBanner>
            {"Gasto Mensal: "}
            <TextoBannerDes>{"R$ 500,00"}</TextoBannerDes>
          </TextoBanner>
          <TextoBanner>{"Total Mensal: R$ 1000,00"}</TextoBanner>
        </BannerButton>
        <BotaoPress2 onPress={() => navigation.navigate("PageListavacas")}>
          <TituloBotao2>
            <MaterialCommunityIcons name={"cow"} size={35} color={"white"} />
            {"Animais"}
          </TituloBotao2>
        </BotaoPress2>
        <BotaoPress2 onPress={() => navigation.navigate("PageLancavacas")}>
          <TituloBotao2>
            <MaterialCommunityIcons name={"calculator-variant"} size={35} color={"white"} />
            {"Despesas"}
          </TituloBotao2>
        </BotaoPress2>
        <BotaoPress onPress={() => navigation.navigate("GeralFaz")}>
          <TituloBotao>{"Voltar"}</TituloBotao>
        </BotaoPress>
      </AreaCont>
    </ImgBg>
  );
}
export default GeralReb;
