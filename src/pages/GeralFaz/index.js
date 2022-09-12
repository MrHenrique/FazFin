import React from "react";
import Header from "../../components/Header";
import { AreaCont, Container, ImgBg } from "../Home/styles";
function GeralFaz() {
  const imgbg1 = "../../../assets/background7.jpg";
  return (
    <Container>
      <ImgBg source={require(imgbg1)} imageStyle={{ opacity: 0.5 }}>
        <Header title="Informações gerais da Fazenda."/>
        <AreaCont>
        </AreaCont>
      </ImgBg>
    </Container>
  );
}
