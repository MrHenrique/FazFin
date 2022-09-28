import React from 'react';
import { Text, Dimensions, View, Image, StyleSheet, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import { Directions } from 'react-native-gesture-handler';
import Header from "../../components/Header";
import { Texto } from "./styles";

const ImgLeite = "../../../assets/milk-bottle.png";
const ImgAliment = "../../../assets/cow.png";
const ImgManejo = "../../../assets/smart-farm.png";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ScreenHeight = Dimensions.get('screen').height;
const ScreenWidth = Dimensions.get('screen').width;

function PageLancavacas({ navigation }) {
    return (
        <View style={styles.ContainerTudo}>
            <Header title="Lançar Contas"></Header>

            <SafeAreaView style={styles.areabotao} >
                <TouchableOpacity style={styles.botaos}>
                    <Image style={styles.imagem} source={require(ImgLeite)} />
                    <Text style={styles.Texto}>      Leite</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaos}>
                    <Image style={styles.imagem} source={require(ImgAliment)} />
                    <Text style={styles.Texto1}>Alimentação</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaos}>
                    <Image style={styles.imagem} source={require(ImgManejo)} />
                    <Text style={styles.Texto}>   Manejo </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.voltar}  onPress={() => navigation.goBack() }>
                    <Texto>{"Voltar"}</Texto>
                </TouchableOpacity>

            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    containerbotaos: {
        width: windowWidth - 65,
        margin: 5,
    },
    botaos: {
        alignContent: 'space-around',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderRadius: windowHeight * 0.015,
        paddingTop: "10%",
        paddingBottom: "10%",
        margin: "2%",
        backgroundColor: 'white',
    },
    Texto: {
        margin: "1%",
        fontSize: 35,
        fontWeight: 'bold',
    },
    areabotao: {
        paddingEnd: "3%",
        paddingStart: "3%",
        paddingTop: "5%",

    },
    Texto1: {
        margin: 10,
        fontSize: 30,
        fontWeight: 'bold',
    },
    voltar: {
        backgroundColor: "#008000",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: 'center',
        width: "80%",
        height: "10%",
        position: "absolute",
        bottom: (windowHeight - ScreenHeight)*2,
        left: "13%",
    },
    imagem: {
        height: 60,
        width: 60,
    },
    ContainerTudo: {
        backgroundColor: '#f2f2f2',
        width: ScreenWidth,
        height: ScreenHeight,
    }

});

export default PageLancavacas;