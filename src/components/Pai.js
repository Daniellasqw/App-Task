import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert, SafeAreaView } from 'react-native';
import firebase from '../firebaseConnection';

const Pai = (props) => {

    return (
        <SafeAreaView style={styles.constainer}>
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity style={{flex:1, height: 70, backgroundColor: "#000",justifyContent:"center",alignItems:'center' }} onPress={()=>props.status("tela 1")}><Text>Tela 1</Text></TouchableOpacity>
                <TouchableOpacity style={{flex:1, height: 70, backgroundColor: "blue",justifyContent:"center" ,alignItems:'center' }}  onPress={()=>props.status("tela 2")}><Text>Tela 2</Text></TouchableOpacity>
            </View>

        <View style={{}}>
            {props.children}
        </View>


        </SafeAreaView>
    )



}

export default Pai


const styles = StyleSheet.create({

    constainer: {
        flex: 1,
        backgroundColor: "#cdcdcd"

    }
})