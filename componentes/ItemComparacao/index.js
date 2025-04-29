/** @format */

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { formatarMoeda, formatarPercentual } from "../../dados"; // Ajuste o caminho

const ItemComparacao = ({ ano, salario, inflacao, crescimento, status }) => {
  // Recebe props

  const statusTexto =
    status === "acima" ? "Acima (↑)" : status === "abaixo" ? "Abaixo (↓)" : "-";
  const statusCor =
    status === "acima" ? "green" : status === "abaixo" ? "red" : "gray";

  return (
    <View style={styles.item}>
      <Text style={styles.ano}>Ano: {ano}</Text>
      <View style={styles.linha}>
        <Text style={styles.label}>Salário:</Text>
        <Text style={styles.valorSalario}>{formatarMoeda(salario)}</Text>
      </View>
      <View style={styles.linha}>
        <Text style={styles.label}>Inflação:</Text>
        <Text style={styles.valorInflacao}>{formatarPercentual(inflacao)}</Text>
      </View>
      <View style={styles.linha}>
        <Text style={styles.label}>Cresc. Sal.:</Text>
        <Text style={styles.valorCrescimento}>
          {formatarPercentual(crescimento)}
        </Text>
      </View>
      <View style={styles.linhaStatus}>
        <Text style={styles.label}>Status:</Text>
        <Text style={[styles.valorStatus, { color: statusCor }]}>
          {statusTexto}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 12,
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: "#e8f5e9", // Verde claro
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#c8e6c9",
  },
  ano: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
    color: "#2e7d32", // Verde escuro
  },
  linha: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  linhaStatus: {
    flexDirection: "row",
    justifyContent: "center", // Centraliza o status
    marginTop: 6,
    paddingTop: 6,
    borderTopWidth: 1,
    borderTopColor: "#c8e6c9",
  },
  label: {
    fontSize: 15,
    color: "#555",
    width: "35%", // Dá espaço para o label
  },
  valorSalario: {
    fontSize: 15,
    fontWeight: "500",
    color: "#1b5e20", // Verde mais escuro
    textAlign: "right",
    flex: 1,
  },
  valorInflacao: {
    fontSize: 15,
    fontWeight: "500",
    color: "#b71c1c", // Vermelho mais escuro
    textAlign: "right",
    flex: 1,
  },
  valorCrescimento: {
    fontSize: 15,
    fontWeight: "500",
    color: "#01579b", // Azul mais escuro
    textAlign: "right",
    flex: 1,
  },
  valorStatus: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "right",
    // flex: 1 // Removido para centralizar melhor com label
  },
});

export default ItemComparacao;
