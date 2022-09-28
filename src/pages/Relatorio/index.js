import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PieChartTest from "../../components/Graficos/PieChart";
import {
  Texto,
  TituloBotao,
  BotaoPress,
  AreaCont,
  ImgBg,
  TextoValorPos,
  TextoValorNeg,
  ImgBg2,
  Texto1,
} from "./styles";
function Relatorio() {
  const imgbg1 = "../../../assets/bg5.jpg";
  return (
    <ImgBg source={require(imgbg1)} imageStyle={{ opacity: 0.2 }}>
      <AreaCont>
        <Texto>Total de Faturamento:</Texto>
        <TextoValorPos>R$ 5000,00</TextoValorPos>
        <View style={styles.lineStyle} />
        <Texto>Total de despesas:</Texto>
        <TextoValorNeg>R$ 2500,00</TextoValorNeg>
        <View style={styles.lineStyle} />
        <Texto1>Balanço final:</Texto1>
        <TextoValorPos>R$ 2500,00</TextoValorPos>
        <View style={styles.lineStyle} />
        <PieChartTest />
      </AreaCont>
    </ImgBg>
  );
}
export default Relatorio;
const styles = StyleSheet.create({
  lineStyle: {
    borderWidth: 0.6,
    borderColor: "#008000",
    margin: 15,
    width: "90%",
  },
});
