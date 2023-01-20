import React from 'react';
import {StyleSheet, View} from 'react-native';


export default class Main extends React.Component{
    
    render () {
        return (
            <View style={style.div1}>
                <View style={style.divLeft}>
                    <View style={style.divChild}>
                    </View>  

                    <View style={style.divChild}>
                    </View> 

                    <View style={style.divChild}>
                    </View>

                    <View style={style.divChild1}>
                    </View>

                    <View style={style.divChild}>
                    </View>
                </View>

                <View style={style.divRight}>
                    <View style={style.divChild1}>
                    </View>

                    <View style={style.divChild}>
                    </View>

                    <View style={style.divChild}>
                    </View>

                    <View style={style.divChild}>
                    </View>

                    <View style={style.divChild}>
                    </View>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create( {
    div1: {
        display: 'flex',
        marginLeft: 10,
        marginTop: 10,
        borderRadius: 20,
        backgroundColor: '#aaa',
        height: 500,
        width: 400,
        flexDirection: 'row',
        backgroundColor: '#aaa',
    },

    divChild: {
        marginTop: 10,
        marginLeft: 10,
        width: 140,
        height: 70,
        backgroundColor: 'red',
        borderRadius: 10,
    },

    divChild1 : {
        marginTop: 10,
        marginLeft: 10,
        width: 140,
        height: 70,
        borderRadius: 10,
        backgroundColor: 'green'
    }, 

    divLeft: {
        flex: 1,
        height: 'auto',
        width: 'auto',
    },

    divRight: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 10,
        height: 'auto',
        width: 'auto',
    }
}
)

