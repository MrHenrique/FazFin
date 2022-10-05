import React from "react";
import { Feather } from "@expo/vector-icons";
import {
  Dimensions,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const { height, width } = Dimensions.get("window");
function Header({ title }) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.openDrawer()}
      >
        <Feather name="menu" size={height * 0.045} color="#FFF" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    alignItems: "center",
    backgroundColor: "rgba(15, 109, 0, 0.9)",
    height: height * 0.07,
    paddingLeft: width * 0.03,
  },
  menuButton: {
    height: height * 0.075,
    justifyContent: "center",
    paddingLeft: width * 0.03,
  },
  title: {
    color: "#FFF",
    fontSize: height * 0.036,
    fontWeight: "bold",
  },
});
export default Header;
