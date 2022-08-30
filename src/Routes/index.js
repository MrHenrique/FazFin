import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import CadastroFaz from "../pages/CadastroFaz";
import StackRoutes from "../Routes/stackRoutes";

const Drawer = createDrawerNavigator();

function Routes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,

        drawerStyle: {
          backgroundColor: "#004513",
          paddingTop: 20,
        },

        drawerActiveBackgroundColor: "#0F6D00",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#FFF",
      }}
    >
      <Drawer.Screen
        name="HomeDrawer"
        component={StackRoutes}
        options={{
          title: "Bem vindo.",
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={focused ? "movie-open" : "movie-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="CadastroFaz"
        component={CadastroFaz}
        options={{
          title: "Cadastro Fazenda",

          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={focused ? "archive" : "archive-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default Routes;
