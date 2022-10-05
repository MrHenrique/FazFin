import React from 'react';
import {
    TituloBotao,
    BotaoPress,
    AreaCont,
    BotaoPress2,
    ImgBg,
    TituloBotao2,
    
} from "./styles";
import Header from "../../components/Header";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
function Manejo({ navigation }) {
    const imgbg1 = "../../../assets/bg10.jpg"
    return (
        <ImgBg source={require(imgbg1)} imageStyle={{ opacity: 0.5 }}>
            <Header title="Olá, Carlos" />
            <AreaCont>
                <BotaoPress2 onPress={() => navigation.navigate("VacinaRem")}>
                    <TituloBotao2>
                        <MaterialCommunityIcons name="hospital-box-outline" size={35} color="white" />
                        {"Vacina e Remedios"}
                    </TituloBotao2>
                </BotaoPress2>
                <BotaoPress2 onPress={() => navigation.navigate("MaodeObra")}>
                    <TituloBotao2>
                    <MaterialCommunityIcons name="hammer-screwdriver" size={35} color="white" />
                        {"Mão de obra"}
                    </TituloBotao2>
                </BotaoPress2>
                <BotaoPress2 onPress={() => navigation.navigate("VacinaRem")}>
                    <TituloBotao2>
                        <FontAwesome5 name="tractor" size={35} color="white" />
                        {"Outros"}
                    </TituloBotao2>
                </BotaoPress2>
                <BotaoPress onPress={() => navigation.navigate("PageLancavacas")}>
                    <TituloBotao>{"Voltar"}</TituloBotao>
                </BotaoPress>
            </AreaCont>
        </ImgBg>
    );
}
export default Manejo;