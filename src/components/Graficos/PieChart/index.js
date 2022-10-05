import { PieChart } from "react-native-chart-kit";
import { View, Text, Dimensions, StyleSheet } from "react-native";
const { height, width } = Dimensions.get("window");
function PieChartFaz() {
  const data = [
    {
      name: "",
      valor: 5000,
      color: "rgba(15, 109, 0, 1)",
      legendFontColor: "#FFF",
      legendFontSize: height * 0.027,
    },
    {
      name: "",
      valor: 2500,
      color: "red",
      legendFontColor: "#FFF",
      legendFontSize: height * 0.027,
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
        width={width*0.8}
        height={height*0.25}
        chartConfig={chartConfig}
        accessor={"valor"}
        backgroundColor={"transparent"}
        paddingLeft={width*0.1}
        absolute
      />
  );
}
export default PieChartFaz;
