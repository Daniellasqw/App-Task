import React, { useEffect, useState } from 'react';
import { View, Text, Animated, StyleSheet, TouchableOpacity, Dimensions, TextInput, Button, Alert, FlatList,SafeAreaView } from 'react-native';
const { width } = Dimensions.get('window');
import firebase from "./firebaseConnection"
import Login from './components/Login';
import Pai from './components/Pai';
import Tarefa from './screens/tarefas/Tarefa';

const App = () => {
    const [nome, setNome] = useState("")
    const [cargo, setCargo] = useState("")
    const[usuarios,setUsuarios]=useState([])
    const [user,setUser]=useState(null)

    useEffect(() => {


        // function dados(){
        //     firebase.database().ref("usuarios").on("value",(snapshot)=>{
        //         setUsuarios([])
        //         snapshot.forEach((childItem)=>{
        //             let data ={
        //                 key:childItem.key,
        //                 nome:childItem.val().nome,
        //                 cargo:childItem.val().cargo
        //             };
        //             setUsuarios(prevState =>[...prevState,data].reverse())
        //         })
        //     })
        // }
        // dados();

        // inserindo dados
        //    firebase.database().ref("usuarios").set({
        //     nome:"Daniella",
        //     idade:24
        // });

        //on fica monitorando
        // const dados1 = firebase.database().ref("nome");
        // dados1.on("value", (snapshot) => {
        //     setNome(snapshot.val());
        // });

        //once pega uma unica vez
        // const dados2 = firebase.database().ref("nome");
        // dados2.once("value", (snapshot) => {
        //     setNome(snapshot.val());
        // });

        //criar um nó
        //firebase.database().ref("teste1").set("teste dentro1");

        //remover um nó ou child caso queiroa remover o child,basta colocar na referencia o caminho .ref("teste1"/outro/id)
        //firebase.database().ref("teste1").remove();

        //child
        // firebase.database().ref("usuarios").child(3).set({
        //     nome:"Daniella",
        //     idade:24
        // });

        // firebase.database().ref("usuarios").child(3)
        //     .update({ idade: 26 })

    }, []);

   
    return (
       <Tarefa/>
    )
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
       paddingTop:25,
       paddingHorizontal:10,
       backgroundColor:"#f2f6fc"

    },
    texto: {
       
        fontSize: 20,
        color: "#000",
    },
    input: {
        padding: 10,
        borderWidth: 1,
        marginBottom: 10
    }


})