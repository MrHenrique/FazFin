import React from 'react';
import { Button, Dimensions, View, SafeAreaView, StyleSheet, Text, ImageBackground, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from "../../components/Header";
import { scale, verticalScale } from "react-native-size-matters";
import Lista_vacas from '../../components/Lista_Vacas';
const imgbg1 = "../../../assets/listavacas-bg.jpg";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function PageListavacas({ navigation }) {

    return (

        <View style={styles.container}>
            <SafeAreaView>
                <ImageBackground
                    style={styles.imgbg}
                    source={require(imgbg1)}
                    imageStyle={{ opacity: 0.6 }}
                >
                    <Header title={"Vacas"}></Header>
                    <Lista_vacas />
                    <View style={styles.contvoltar}>
                        <TouchableOpacity style={styles.botaovoltar} onPress={() => navigation.goBack()}>
                            <Text style={styles.textovoltar}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        </View>

    );
}

const styles = StyleSheet.create({
    imgbg: {
        flex: 1,
        objectFit: "cover",
        width: "100%",
      },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(0, 138, 161, 0.9)",
    },
    contvoltar: {
        position: 'absolute',
        top: verticalScale(625),
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        color: "rgba(15, 109, 0, 0.9)",


    },
    botaovoltar: {
        backgroundColor: "rgba(15, 109, 0, 0.9)",
        width: scale(300),
        height: verticalScale(40),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 18,
    },
    textovoltar: {
        fontSize: verticalScale(14),
        fontWeight: "bold",
        color: "#fff",
    },


});

export default PageListavacas;
