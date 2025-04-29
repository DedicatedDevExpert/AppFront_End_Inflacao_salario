/** @format */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";

// Import das Telas
import TelaSalario from "./telas/TelaSalario"; // Ajuste o caminho
import TelaInflacao from "./telas/TelaInflacao"; // Ajuste o caminho
import TelaComparacao from "./telas/TelaComparacao"; // Ajuste o caminho

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          // Nomes das abas serão usados como labels
          tabBarActiveTintColor: "tomato", // Cor da aba ativa
          tabBarInactiveTintColor: "gray", // Cor da aba inativa
          headerShown: false, // Oculta header padrão, já temos títulos nas telas
          tabBarStyle: {
            backgroundColor: "#f0f0f0",
            paddingBottom: 5,
            paddingTop: 5,
          }, // Estilo da barra
          tabBarLabelStyle: { fontSize: 13 }, // Estilo do texto da aba
        }}
      >
        {/* As telas como componentes das abas */}
        <Tab.Screen
          name="Salário"
          component={TelaSalario}
          options={{
            tabBarIcon: () => (
              <FontAwesome name="money" size={24} color="tomato" />
            ),
          }}
        />
        <Tab.Screen
          name="Inflação"
          component={TelaInflacao}
          options={{
            tabBarIcon: () => (
              <AntDesign name="barschart" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Comparativo"
          component={TelaComparacao}
          options={{
            tabBarIcon: () => (
              <Ionicons name="trending-up" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
