import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert, SafeAreaView } from 'react-native';
import firebase from '../firebaseConnection';

const Login = ({userToken}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState('login');

    function login() {
        if (type === "login") {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    userToken(user.uid);
                }).catch((err) => {
                    console.log(err);
                    Alert.alert("Ops! Parece que deu algum problema!");
                });
        } else {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log("New user created:", user);
                   userToken(user.uid);
                }).catch((err) => {
                    console.log(err);
                    Alert.alert("Ops! Parece que deu algum problema!");
                });
        }
    }

    return (
        
        <SafeAreaView style={styles.container}>

            <TextInput
                placeholder='Seu email..'
                style={styles.textInput}
                value={email}
                onChangeText={setEmail}
                placeholderTextColor={"grey"}
               
            />
            <TextInput
                placeholder='*********'
                style={styles.textInput}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholderTextColor={"grey"}
            />
            <TouchableOpacity style={[styles.button, { backgroundColor: type === "login" ? "#3ea6f2" : "#141414" }]} onPress={login}>
                <Text style={{ color: "#fff", fontSize: 17 }}>{type === "login" ? "Acessar" : "Cadastrar"}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setType(type === "login" ? "cadastrar" : "login")}>
                <Text style={{ textAlign: "center", color: "#000" }}>{type === "login" ? "Criar uma conta" : "Já possuo uma conta"}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 10,
        backgroundColor: "#f2f6fc"
    },
    textInput: {
        marginBottom: 10,
        backgroundColor: "#fff",
        borderRadius: 4,
        height: 45,
        padding: 10,
        borderWidth: 1,
        borderColor: "#141414",
        color: "#000"
    },
    button: {
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#141414",
        height: 45,
        marginBottom: 10,
        borderRadius: 4
    }
});
