import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Modal,
  SafeAreaView,
  View,
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";

const { height, width } = Dimensions.get("window");
const Touchable = (
  text = "Selecione sua fazenda",
  onPress,
  selected,
  objValue
) => {
  const TouchableComponent = () => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.touchableContainer}>
        <Text style={styles.touchableText}>
          {selected === null ? text : selected?.[objValue]}
        </Text>
        <MaterialCommunityIcons name="chevron-right" color="white" size={26} />
      </TouchableOpacity>
    );
  };
  return { TouchableComponent };
};

const Option = (item, value, selected, objKey, onPress) => {
  const OptionComponent = () => {
    return (
      <TouchableOpacity
        style={[
          styles.optionContainer,
          {
            backgroundColor:
              selected?.[objKey] === item?.[objKey] ? "#0F6D00" : "#004513",
          },
        ]}
        onPress={onPress}
      >
        <Text
          style={[
            styles.optionText,
            {
              fontWeight:
                selected?.[objKey] === item?.[objKey] ? "bold" : "normal",
            },
          ]}
        >
          {item?.[value]}
        </Text>
        {selected?.[objKey] === item?.[objKey] ? (
          <MaterialCommunityIcons name="check" size={18} color="white" />
        ) : null}
      </TouchableOpacity>
    );
  };
  return { OptionComponent };
};

const Select = ({
  touchableComponent = Touchable,
  optionComponent = Option,
  touchableText = "Select",
  title = "",
  data = [],
  objKey = "id",
  objValue = "name",
}) => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const { TouchableComponent } = touchableComponent(
    touchableText,
    () => setVisible(true),
    selected,
    objValue
  );
  function renderOption(item) {
    const { OptionComponent } = optionComponent(
      item,
      objValue,
      selected,
      objKey,
      () => toggleSelect(item)
    );
    return <OptionComponent />;
  }
  function toggleSelect(item) {
    if (item?.[objKey] === selected?.[objKey]) {
      setSelected(null);
    } else {
      setSelected(item);
      setVisible(false);
    }
  }
  return (
    <>
      <TouchableComponent />
      <Modal visible={visible} animationType="fade">
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{title}</Text>
            </View>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <MaterialCommunityIcons
                name="close"
                size={width * 0.08}
                color="white"
              />
            </TouchableOpacity>
          </View>
          <FlatList
            style={styles.liststyle}
            data={data}
            keyExtractor={(_, index) => String(index)}
            renderItem={({ item }) => renderOption(item)}
          />
        </SafeAreaView>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  liststyle: {
    backgroundColor: "#00290C",
  },
  touchableContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: height * 0.08,
    borderBottomColor: "white",
    borderBottomWidth: width * 0.004,
    width: width * 0.8,
  },
  touchableText: {
    color: "white",
    fontSize: width * 0.05,
    fontWeight: "bold",
  },
  header: {
    height: height * 0.1,
    backgroundColor: "#004513",
    borderBottomColor: "#00290C",
    borderBottomWidth: width * 0.004,
    flexDirection: "row-reverse",
    alignItems: "center",
    paddingVertical: height * 0.012,
    paddingHorizontal: width * 0.048,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: width * 0.08,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  optionContainer: {
    backgroundColor: "#0F6D00",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: height * 0.012,
    paddingHorizontal: width * 0.048,
    borderBottomColor: "#00290C",
    borderBottomWidth: width * 0.004,
  },
  optionText: {
    color: "white",
    fontSize: width * 0.055,
  },
});
export default Select;
