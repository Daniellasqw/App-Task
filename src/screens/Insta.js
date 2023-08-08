import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import Lista from '../components/Lista'


const Insta = () => {
    const [state, setState] = useState({
        feed: [
            {
                id: '1',
                nome: 'Lucas Silva',
                descricao: 'Mais um dia de muitos bugs :)',
                imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
                imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
                likeada: false,
                likers: 0
            },
            {
                id: '2',
                nome: 'Matheus',
                descricao: 'Isso sim é ser raiz!!!!!',
                imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
                imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
                likeada: false,
                likers: 0
            },
            {
                id: '3',
                nome: 'Jose Augusto',
                descricao: 'Bora trabalhar Haha',
                imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
                imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
                likeada: false,
                likers: 3
            },
            {
                id: '4',
                nome: 'Gustavo Henrique',
                descricao: 'Isso sim que é TI!',
                imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
                imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png',
                likeada: false,
                likers: 1
            },
            {
                id: '5',
                nome: 'Guilherme',
                descricao: 'Boa tarde galera do insta...',
                imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
                imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
                likeada: false,
                likers: 32
            }
        ]
    });


    return (
        <View style={style.container}>

            <View style={style.header}>
                <TouchableOpacity>
                    <Image
                        source={require('./img/logo.png')}
                        style={style.logo}
                    />

                </TouchableOpacity>

                <TouchableOpacity>

                    <Image
                        source={require('./img/send.png')}
                        style={style.send}
                    />
                </TouchableOpacity>
            </View>

            <FlatList
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item)=>item.id}
            data={state.feed}
            renderItem={({item})=><Lista data={item}/>}
            
            />
        </View>
    )
}

export default Insta;

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'

    },
    header: {
        height: 55,
        backgroundColor: "#fff",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        padding: 5,
        borderBottomWidth: 0.1,
        shadowColor: '#000',
        elevation: 1

    },
    logo: {

    },
    send: {
        width: 23,
        height: 23,

    }

})