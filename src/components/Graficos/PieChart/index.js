import { PieChart } from "react-native-chart-kit";
import { View, Text, Dimensions, StyleSheet } from "react-native";
function PieChartTest() {
    const screenWidth = Dimensions.get("window").width;
  const data = [
    {
      name: "Faturamento",
      valor: 5000,
      color: "green",
      legendFontColor: "#000000",
      legendFontSize: 15,
    },
    {
      name: "Despesas",
      valor: 2500,
      color: "#F00",
      legendFontColor: "#000000",
      legendFontSize: 15,
    },
  ];
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  return (
      <PieChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        accessor={"valor"}
        backgroundColor={"transparent"}
        paddingLeft={"5"}
        absolute    
      />
  );
}
export default PieChartTest;
    