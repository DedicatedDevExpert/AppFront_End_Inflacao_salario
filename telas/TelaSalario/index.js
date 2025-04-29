/** @format */

import React from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import { salarios } from "../../dados"; // Ajuste o caminho
import ItemSalario from "../../componentes/ItemSalario"; // Ajuste o caminho

const TelaSalario = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Histórico Salário Mínimo</Text>
      <FlatList
        data={salarios}
        renderItem={({ item }) => (
          <ItemSalario ano={item.ano} valor={item.valor} />
        )} // Passa props
        keyExtractor={(item) => item.ano.toString()}
        contentContainerStyle={styles.lista}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 15,
    textAlign: "center",
    color: "#1565c0", // Azul
  },
  lista: {
    paddingBottom: 10,
  },
});

export default TelaSalario;
