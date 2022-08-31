import React from "react";
import SelectDropdown from "react-native-select-dropdown";
import { Container } from "./styles";
function Dropdown() {
  const fazenda = ["Faz Palmital", "Faz Sonho Meu", "Sitio 3M"];
  return (
    <Container>
      <SelectDropdown
        defaultButtonText={"Clique para selecionar"}
        buttonStyle={"green"}
        defaultValue={0}
        data={fazenda}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
      />
    </Container>
  );
}

export default Dropdown;
