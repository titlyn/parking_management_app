import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class NavBar extends React.Component {


    render () {
        return (
            <View style = {style.nav}>
                <Text style={style.items}>Home</Text>
                <Text style={style.items}>Content</Text>
                <Text style={style.items}>About</Text>
                <Text style={style.items}>Contact</Text>
            </View>
        )
    }
}

const style = StyleSheet.create ({
    nav: {
        display: "flex",
        flexDirection: 'row',
        backgroundColor: '#f5f5',
        height: 75,
        borderRadius: 20,
    },

    items: {
        marginLeft: 50,
        marginTop: 25,
    }
})