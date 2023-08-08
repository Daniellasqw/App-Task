import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Login from '../../components/Login';

function Tarefa() {
    const [user, setUser] = useState(null);

    function userToken(uid) {
        setUser(uid);
    }

    if (!user) {
        return <Login userToken={userToken} />;
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{color:"#000"}}>Dentro de Tarefas</Text>
        </SafeAreaView>
    );
}

export default Tarefa;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 25,
        paddingHorizontal: 10,
        backgroundColor: "#f2f6fc"
    }
});