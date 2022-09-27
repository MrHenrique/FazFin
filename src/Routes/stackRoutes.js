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
import VacinaRem from "../pages/VacinaRem";

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
        }}
      />
      <Stack.Screen
        name="GeralFaz"
        component={GeralFaz}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CadastroReb"
        component={CadastroReb}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Manejo"
        component={Manejo}
 options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
        name="GeralReb"
        component={GeralReb}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
      name="PageLancavacas"
      component={PageLancavacas}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="PageListavacas"
      component={PageListavacas}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="VacinaRem"
      component={VacinaRem}
      options={{
        headerShown: false,
      }}
    />
    </Stack.Navigator>
    
  );
}

export default StackRoutes;
