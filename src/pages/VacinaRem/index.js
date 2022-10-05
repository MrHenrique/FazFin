import React from "react";
import {
  AreaCont,
  Texto,
  Container,
  CampoTexto,
  BotaoPress,
  TituloBotao,
} from "./styles";
import {} from "./styles";
import { rebanhos } from "../../components/Select/data";
import Select from "../../components/Select";
function VacinaRem({ navigation }) {
  return (
    <Container>
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
    </Container>
  );
}
export default VacinaRem;
