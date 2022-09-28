import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import CadastroFaz from "../pages/CadastroFaz";
import GeralFaz from "../pages/GeralFaz";
import CadastroReb from "../pages/CadastroReb";
import Manejo from "../pages/Manejo";
import GeralReb from "../pages/GeralReb";
import PageLancavacas from "../pages/PageLancavacas";
import PageListavacas from "../pages/PageListavacas";
import FinanceiroFaz from "../pages/FinanceiroFaz";
const Stack = createNativeStackNavigator();
function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CadastroFaz"
        component={CadastroFaz}
        options={{
          headerShown: false,
          title: "Cadastro",
        }}
      />
      <Stack.Screen
        name="FinanceiroFaz"
        component={FinanceiroFaz}
        options={{
          headerShown: false,
        }} />
    </Stack.Navigator>
  );
}

export default StackRoutes;
