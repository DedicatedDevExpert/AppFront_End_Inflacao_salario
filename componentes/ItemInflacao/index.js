/** @format */

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { formatarPercentual } from "../../dados"; // Ajuste o caminho

const ItemInflacao = ({ ano, valor }) => {
  // Recebe props
  return (
    <View style={styles.item}>
      <Text style={styles.texto}>Ano: {ano}</Text>
      <Text style={styles.textoValor}>{formatarPercentual(valor)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 10,
    backgroundColor: "#ffebee", // Vermelho claro
    borderRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ffcdd2",
  },
  texto: {
    fontSize: 16,
  },
  textoValor: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#c62828", // Vermelho escuro
  },
});

export default ItemInflacao;
