import React from "react";
import { AreaCont, Container, Texto, CampoTexto, BotaoPress, TituloBotao, } from "./styles";
function MaodeObra({ navigation }) {
    return (
        <Container>
            <AreaCont>


                <Texto>Quantidade</Texto>
                <CampoTexto
                    placeholder=""
                ></CampoTexto>


                <Texto>Serviço prestado</Texto>
                <CampoTexto
                    placeholder=""
                ></CampoTexto>


                <Texto>Total Gasto</Texto>
                <CampoTexto
                    placeholder=""
                ></CampoTexto>

                <BotaoPress onPress={() => navigation.navigate("Manejo")}>
                    <TituloBotao>{"Voltar"}</TituloBotao>
                </BotaoPress>

            </AreaCont>
        </Container>

    )
} export default MaodeObra; 