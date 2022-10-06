import { PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
const screenWidth = Dimensions.get("window").width;
function PieChartFaz() {
  const data = [
    {
      name: "Faturamento",
      valor: 5000,
      color: "rgba(15, 109, 0, 1)",
      legendFontColor: "#FFF",
      legendFontSize: scale(13),
    },
    {
      name: "Despesas",
      valor: 2500,
      color: "red",
      legendFontColor: "#FFF",
      legendFontSize: scale(13),
    },
  ];
  const chartConfig = {
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  };
  return (
    <PieChart
    data={data}
    width={screenWidth}
    height={verticalScale(220)}
    chartConfig={chartConfig}
    accessor={"valor"}
    backgroundColor={"transparent"}
    paddingLeft={scale(0)}
    center={[scale(10),verticalScale(10)]}
    absolute
    />
  );
}
export default PieChartFaz;
