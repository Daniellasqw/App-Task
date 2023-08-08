import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default (props) => {

    const [state, setState] = useState({
        feed: props.data
    })

function mostraLikes(likers){

    let feed = state.feed
    if(feed.likers <= 0){
        return;
    }
    return(
        <Text style={styles.likes}>
            {feed.likers} {feed.likers > 1?"curtidas":'curtida'}
        </Text>
    )

}

function like(){
    let feed = state.feed;
    console.log(feed.likeada)
    if(feed.likeada ===true){
        setState(            
            {
                feed:{
            ...feed,
            likeada:false,
            likers:feed.likers -1
        }}
        )
    }else{
        console.log('foi',feed.likeada )
        setState(
            {feed:{
                ...feed,
                likeada:true,
                likers:feed.likers +1
            }}
       )
    }
}

    return (
        <View style={styles.areaFeed}>
            <View style={styles.viewPerfil}>
                <Image

                    source={{ uri: state.feed.imgperfil }}
                    style={styles.fotoPerfil}
                />
                <Text style={styles.nomeUser}>{state.feed.nome}</Text>
            </View>
            <Image
                resizeMode='cover'
                source={{ uri: state.feed.imgPublicacao }}
                style={styles.fotoPublicacao}
            />
            <View style={styles.footerPub}>
                <TouchableOpacity onPress={like}>
                    <Image
                        source={state.feed.likeada ===false?require('../img/like.png'):require('../img/likeada.png')}
                        style={styles.iconeLike}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnSend}>
                    <Image
                        source={require('../img/send.png')}
                        style={styles.iconeLike}
                    />
                </TouchableOpacity>
            </View>
            {mostraLikes(state.feed.likers)}
            <View style={styles.viewRodape}>
            <Text style={styles.nomeRodape}>
                 {state.feed.nome}
            </Text>
            <Text style={styles.descRodape}>
                 {state.feed.descricao}
            </Text>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    areaFeed: {

    },
    fotoPerfil: {
        width: 40,
        height: 40, borderRadius: 25

    },
    viewPerfil: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        padding: 8
    },
    nomeUser: {
        color: "#000",
        fontSize: 22,
        textAlign: 'left',marginLeft:8 
    },
    fotoPublicacao: {
        flex: 1,
        height: 400,
        alignItems: 'center'
    },
    footerPub: {
        flexDirection: "row",
        padding: 5
    },
    iconeLike: {
        width: 30,
        height: 30
    },
    btnSend: {
        paddingLeft: 5
    },
   viewRodape:{
   
    flexDirection:"row",
    alignItems:"center"
   },
   nomeRodape:{
    color: "#000",
    fontWeight:"bold",
    paddingLeft:8
   },
   descRodape:{
    color: "#000",
    paddingLeft:8,
    fontSize:15,
   },
   likes:{
    color:"#000",
    fontWeight:"bold",marginLeft:8
   }
})