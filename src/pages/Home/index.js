import React from "react";
import { View, Text } from "react-native";
import { Container, Banner, Title, Logo, Texto } from "./styles";

import Header from "../../components/Header";
function Home() {
  return (
    <Container>
      <Header title="FazFin" />
      <Logo source={require("../../../assets/FazFin.png")} />
      <Title>Olá, Bem vindo.</Title>
      <Texto>Selecione sua Fazenda</Texto>
    </Container>
  );
}

export default Home;
