import React from "react";
import {
    AreaCont,
    Texto,
    Container,
    CampoTexto,
    BotaoPress,
    TituloBotao,
    
} from "./styles";
import { } from "./styles";
function VacinaRem({ navigation }) {
    return (
        <Container>
            <AreaCont>
                <Texto>Preço do Remedio/Vacina</Texto>
                <CampoTexto
                    placeholder=""
                ></CampoTexto>


                <Texto>Quantidade</Texto>
                <CampoTexto
                    placeholder=""
                ></CampoTexto>


                <Texto>Volume por frasco(ou ml)</Texto>
                <CampoTexto
                    placeholder=""
                ></CampoTexto>


                <Texto>Digite o Rebanho ou Animal Aplicado</Texto>
                <CampoTexto
                    placeholder=""
                ></CampoTexto>

                <BotaoPress onPress={() => navigation.navigate("Manejo")}>
                    <TituloBotao>{"Voltar"}</TituloBotao>
                </BotaoPress>

            </AreaCont>
        </Container>
    )
} export default VacinaRem;
