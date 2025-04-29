import React from 'react';
import { Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { comparacao } from '../../dados'; // Ajuste o caminho
import ItemComparacao from '../../componentes/ItemComparacao'; // Ajuste o caminho

const TelaComparacao = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titulo}>Comparativo Salário x Inflação</Text>
            <FlatList
                data={comparacao}
                renderItem={({ item }) => <ItemComparacao {...item} />} // Passa todas as props
                keyExtractor={(item) => item.ano.toString()}
                 contentContainerStyle={styles.lista}
            />
        </SafeAreaView>
    );
};

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 15,
        textAlign: 'center',
        color: '#2e7d32' // Verde
    },
     lista: {
        paddingBottom: 10,
    }
});

export default TelaComparacao;