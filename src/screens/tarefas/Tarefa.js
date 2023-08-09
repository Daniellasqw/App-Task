import React, { useState, useEffect, useRef } from 'react';
import {
    View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity,
    FlatList, Keyboard
} from 'react-native';
import Login from '../../components/Login'; 
import TarefaLista from './TarefaLista';
import firebase from '../../firebaseConnection';



function Tarefas() {
    const [user, setUser] = useState(null);
    const [textTarefa, setTextTarefa] = useState('');
    const [tarefas, setTarefas] = useState([]);
    const inputRef = useState(null);
    const [key, setKey] = useState('')

    useEffect(() => {
        function getUser() {
            if (!user) {
                return;
            }

            firebase.database().ref('tarefas').child(user).once('value', (snapshot) => {
                setTarefas([]);

                snapshot?.forEach((item) => {
                    let data = {
                        id: item.key,
                        title: item.val().title
                    }
                    setTarefas(oldTarefas => [...oldTarefas, data])
                });
            })

        }
        getUser()

    }, [user])

    function userToken(uid) {
        setUser(uid);
    }

    function deleteTask(id) {
        console.log(id)
        firebase.database().ref("tarefas").child(user).child(id).remove()
            .then(() => {
                let dados = tarefas.filter(tarefa => tarefa.id != id);
                setTarefas(dados)
            })
    }

    function edit(data) {
        setKey(data.id)
        setTextTarefa(data.title)
        inputRef.current.focus()
    }

    function add() {
        if (textTarefa === '') {
            return;
        }
        if (key !== "") {
            console.log(key)
            firebase.database().ref("tarefas").child(user).child(key).update({
                title: textTarefa
            })
                .then(() => {
                    const index = tarefas.findIndex((item) => item.id === key);
                    const tarefaClone = tarefas
                    tarefaClone[index].title = textTarefa;
                    setTarefas([...tarefaClone])

                })
            setTextTarefa("")
            setKey('');
            Keyboard.dismiss()
            return;
        }
        let tarefa = firebase.database().ref('tarefas').child(user);
        let chave = tarefa.push().key
        tarefa.child(chave).set({
            title: textTarefa
        }).then(() => {
            console.log("cadastrado com sucesso")
            const data = {
                id: chave,
                title: textTarefa
            }
            setTarefas(oldTarefas => [...oldTarefas, data])
            setTextTarefa("")
            Keyboard.dismiss();
        })
            .catch("erro ao cadastrar")
    }

    function cancelEdit(){
        setKey('');
        setTextTarefa('');
        Keyboard.dismiss();
    }

    if (!user) {
        return <Login userToken={userToken} />;
    } else {
        return (
            <SafeAreaView style={styles.container}>
                {key.length > 0 &&
                    <View style={{ flexDirection: "row", marginBottom: 10, alignItems: "center" }}>
                        <TouchableOpacity style={styles.cancelEdit} onPress={cancelEdit}>
                            <Text style={{ color: "#fff" }}>
                                x
                            </Text>
                        </TouchableOpacity >
                        <Text style={{ color: "red", left: 20 }}>
                            Você está editando uma tarefa
                        </Text>
                    </View>}

                <View style={styles.containerForm}>
                    <TextInput
                        style={styles.input}
                        placeholder='O que vai fazer Hoje?'
                        placeholderTextColor={"grey"}
                        value={textTarefa}
                        onChangeText={(value) => setTextTarefa(value)}
                        ref={inputRef}
                    />
                    <TouchableOpacity style={styles.buttonAdd} onPress={add}>
                        <Text style={styles.plus}>+</Text>
                    </TouchableOpacity>



                </View>
                <FlatList
                    data={tarefas}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <TarefaLista data={item} deleteTask={deleteTask} edit={edit} />
                        )
                    }}

                />
            </SafeAreaView>
        );
    }


}

export default Tarefas;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 25,
        paddingHorizontal: 10,
        backgroundColor: "#f2f6fc"
    },
    containerForm: {

        flexDirection: "row"
    },
    input: {
        flex: 1,
        borderColor: "#141414",
        borderWidth: 1,
        borderRadius: 5,
        color: "#141414",
        padding: 10,
        marginBottom: 10
    },
    plus: {
        fontSize: 22,
        color: "#fff",
    },
    buttonAdd: {
        backgroundColor: "#141414",
        height: 50,
        marginLeft: 5,
        borderRadius: 5,
        paddingHorizontal: 14,
        justifyContent: "center",
        alignItems: "center"
    },
    cancelEdit: {

        justifyContent: 'center',
        alignItems: "center",
        width: 40,
        height: 40,
        backgroundColor: "red", borderRadius: 20

    }
});