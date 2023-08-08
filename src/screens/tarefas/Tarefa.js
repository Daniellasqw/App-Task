import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity,
FlatList } from 'react-native';
import Login from '../../components/Login';
import Tarefa from './Tarefa';

let tarefas = [
    {
        id:1,
        title:'Tarefa 1'
    },
    {
        id:2,
        title:'Tarefa 2'
    },
    {
        id:3,
        title:'Tarefa 3'
    },
    
]

function Tarefas() {
    const [user, setUser] = useState(null);
    const [textTarefa, setTextTarefa] = useState('');

    function userToken(uid) {
        setUser(uid);
    }

    if (!user) {
        return <Login userToken={userToken} />;
    } else {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.containerForm}>
                    <TextInput
                        style={styles.input}
                        placeholder='O que vai fazer Hoje?'
                        placeholderTextColor={"grey"}
                        value={textTarefa}
                        onChangeText={(value) => setTextTarefa(value)}
                    />
                    <TouchableOpacity style={styles.buttonAdd}>
                        <Text style={styles.plus}>+</Text>
                    </TouchableOpacity>

                    

                </View>
                <FlatList 
                    data={tarefas}
                    keyExtractor={item=>item.id}
                    renderItem={({item})=>{
                        return(
                           <View>
                             <Text style={{color:"#000"}}>{item.title}</Text>
                           </View>
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
       padding:10,
       marginBottom:10
    },
    plus: {
        fontSize: 22,
        color: "#fff",
    },
    buttonAdd: {
        backgroundColor: "#141414",
        height:50,
        marginLeft:5, 
        borderRadius: 5,
        paddingHorizontal:14,
        justifyContent:"center",
        alignItems:"center"

    }
});