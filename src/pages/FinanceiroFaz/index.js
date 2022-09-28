import * as React from "react";
import { View, useWindowDimensions, StyleSheet } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Relatorio from "../Relatorio";
import Header from "../../components/Header";
import { BotaoPress, TituloBotao } from "./styles";
import PieChartTest from "../../components/Graficos/PieChart";
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

export default function FinanceiroFaz({navigation}) {
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
      <BotaoPress onPress={() => navigation.navigate("GeralFaz")}>
        <TituloBotao>{"Voltar"}</TituloBotao>
      </BotaoPress>
    </>
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
});
