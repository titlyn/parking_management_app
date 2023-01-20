import React from "react";
import {View, Text,Pressable, StyleSheet} from 'react-native';

export default class About extends React.Component {

    render () {
        return (
            <View style = {style.view}>
                <Text style={style.title}>
                    About our App
                </Text>

                <Text style={style.content}>
                    Parking System Management
                </Text>

                <Pressable 
                    style = {style.button}
                    onPress = {()=> {}}
                >
                    <Text style={{color: '#fff', fontSize: 16, margin: 'auto', padding: 'auto'}}>Home</Text>
                </Pressable>
            </View>
        )
    }
}

const style = StyleSheet.create({
    view: {
        display: "flex",
        alignItems: 'center',
        marginTop: 100,
    },
    
    title : {
        color: '#000',
        fontSize: 22,
        marginBottom: 20,
    },

    content: {
        
    },

    button: {
        marginTop: 100,
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        width: 100,
        height: 30,
        borderRadius: 10,
        backgroundColor: 'blue',
    }
})