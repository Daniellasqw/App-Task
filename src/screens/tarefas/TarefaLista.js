import React from 'react';
import {View,Text,StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';


export default function TarefaLista({data,deleteTask,edit}){

return(
    <View style={styles.container}>
        <TouchableOpacity style={styles.x} onPress={()=>deleteTask(data.id)}>
            <Text  style={styles.xTitle}>x</Text>
        </TouchableOpacity>
       <View style={{paddingRight:10}}>
        <TouchableWithoutFeedback onPress={()=>edit(data)}>
        <Text style={styles.xTitle2}>{data.title}</Text>
        </TouchableWithoutFeedback>
       </View>
    </View>
)

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        backgroundColor:"#000",
        alignItems:'center',
        marginBottom:10,
        padding:10,
        borderRadius:5
    },
    x:{
        width:"10%",
        alignItems:'center',
        marginRight:10
    },
    xTitle:{
        color:"#fff",
        fontSize:20,
        paddingRight:10
    },
    xTitle2:{
        color:"#fff",
        paddingRight:10
    }
})
