import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  useWindowDimensions,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Header from "../../components/Header";
import PieChartFaz from "../../components/Graficos/PieChart";
import { scale, verticalScale } from "react-native-size-matters";
const FirstRoute = () => <Relatorio />;

const SecondRoute = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: "#673ab7",
    }}
  />
);

const ThirdRoute = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: "#673ab7",
    }}
  />
);
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

export default function FinanceiroFaz({ navigation }) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "first",
      title: "Relatórios",
    },
    {
      key: "second",
      title: "Despesas",
    },
    {
      key: "third",
      title: "Produção",
    },
  ]);
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: "#fff",
      }}
      style={styles.tab}
      labelStyle={{
        color: "#fff",
      }}
    />
  );
  return (
    <>
      <Header title={"Olá, Carlos"} />
      <TabView
        navigationState={{
          index,
          routes,
        }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{
          width: layout.width,
        }}
        renderTabBar={renderTabBar}
      />
    </>
  );
}
function Relatorio() {
  const imgbg1 = "../../../assets/bg5.jpg";
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imgbg}
        source={require(imgbg1)}
        imageStyle={{ opacity: 0.6 }}
      >
        <Text style={styles.texto}>Total de Faturamento:</Text>
        <Text style={styles.textoValorPos}>R$ 5000,00</Text>
        <View style={styles.lineStyle} />
        <Text style={styles.texto}>Total de despesas:</Text>
        <Text style={styles.textoValorNeg}>R$ 2500,00</Text>
        <View style={styles.lineStyle} />
        <Text style={styles.texto}>Balanço final:</Text>
        <Text style={styles.textoValorPos}>R$ 2500,00</Text>
        <View style={styles.containerChart}>
          <PieChartFaz />
        </View>
        <TouchableOpacity
          style={styles.botaopress}
          onPress={() => navigation.navigate("GeralFaz")}
        >
          <Text style={styles.tituloBotao}>{"Voltar"}</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  tab: {
    backgroundColor: "rgba(15, 109, 0, 0.9)",
  },
  container: {
    backgroundColor: "#006773",
    flex: 1,
  },
  containerChart: {
    position:"absolute",
    top: verticalScale(250),
  },
  botaopress: {
    borderRadius: 20,
    backgroundColor: "rgba(15, 109, 0, 0.9)",
    width: scale(300),
    height: verticalScale(40),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    top: verticalScale(530),
    position: "absolute",
  },
  tituloBotao: {
    fontSize: verticalScale(14),
    fontWeight: "bold",
    color: "#fff",
  },
  imgbg: {
    flex: 1,
    objectFit: "cover",
    padding: verticalScale(10),
  },
  textoValorNeg: {
    color: "#FF3131",
    fontWeight: "bold",
    fontSize: verticalScale(30),
    marginLeft: scale(20),
  },
  texto: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: verticalScale(25),
    marginLeft: scale(20),
  },
  textoValorPos: {
    color: "#0FFF50",
    fontWeight: "bold",
    fontSize: verticalScale(30),
    marginLeft: scale(20),
  },
});
