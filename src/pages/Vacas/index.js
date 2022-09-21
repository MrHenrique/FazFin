import React from 'react';
import { Button, Dimensions, View, SafeAreaView, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from "../../components/Header";
import Lista_vacas from '../../components/Lista_Vacas';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function PageListavacas({ navigation }) {

    return (

        <View style={styles.container}>
            <SafeAreaView>
                <Header title={"Vacas"}></Header>
                <Lista_vacas />
                <View style={styles.contvoltar}>
                    <TouchableOpacity style={styles.botaovoltar} onPress={() => navigation.goBack()}>
                        <Text>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#008AA1',

    },
    contvoltar: {
        paddingTop: "10%",
        paddingBottom: "10%",
        paddingEnd: "10%",
        paddingStart: "10%",
        color: '#008000',

    },
    botaovoltar: {
        color: '#008000',
    },
    listavaca: {
        paddingTop: "1%"
    }


});

export default PageListavacas;
