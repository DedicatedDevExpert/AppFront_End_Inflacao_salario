/** @format */

import React from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import { inflacao } from "../../dados"; // Ajuste o caminho
import ItemInflacao from "../../componentes/ItemInflacao"; // Ajuste o caminho

const TelaInflacao = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Histórico Inflação (IPCA)</Text>
      <FlatList
        data={inflacao}
        renderItem={({ item }) => (
          <ItemInflacao ano={item.ano} valor={item.valor} />
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
    color: "#c62828", // Vermelho
  },
  lista: {
    paddingBottom: 10,
  },
});

export default TelaInflacao;
