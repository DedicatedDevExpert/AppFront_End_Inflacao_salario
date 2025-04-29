/** @format */

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { formatarMoeda } from "../../dados"; // Ajuste o caminho se necessário

const ItemSalario = ({ ano, valor }) => {
  // Recebe props
  return (
    <View style={styles.item}>
      <Text style={styles.texto}>Ano: {ano}</Text>
      <Text style={styles.textoValor}>{formatarMoeda(valor)}</Text>
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
    backgroundColor: "#e3f2fd", // Azul claro
    borderRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#bbdefb",
  },
  texto: {
    fontSize: 16,
  },
  textoValor: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1565c0", // Azul escuro
  },
});

export default ItemSalario;
