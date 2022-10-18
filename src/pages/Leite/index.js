import React from "react";
import {
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";
import Header from "../../components/Header";
import { scale, verticalScale } from "react-native-size-matters";
const { height, width } = Dimensions.get("window");
function Manejo({ navigation }) {
  const imgbg1 = "../../../assets/bg10.jpg";
  return (
    <SafeAreaView style={styles.container}>
      <Header title={"Olá Carlos"} />
    </SafeAreaView>
  )

}
const styles = StyleSheet.create({
  imgbg: {
    flex: 1,
    objectFit: "cover",
    width: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "#004513",
  },
  contvoltar: {
    position: 'absolute',
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    color: "rgba(15, 109, 0, 0.9)",
    top: verticalScale(625),


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

export default Manejo;
