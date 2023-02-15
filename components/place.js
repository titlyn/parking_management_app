import {StyleSheet,Text, View} from 'react-native';

export default function PlaceScreen({navigation}) {
    return (
        <View style={styles.places}>

            <View style={styles.left}>
                <View style={styles.p}></View>
                <View style={styles.p_line}></View>
                <View style={styles.p_r}></View>
                <View style={styles.p_line}></View>
                <View style={styles.p}></View>
                <View style={styles.p_line}></View>
                <View style={styles.p}></View>
                <View style={styles.p_line}></View>
            </View>

            <View style={styles.center}>
                <View style={styles.line}></View>
                <View style={styles.line}></View>
                <View style={styles.line}></View>
                <View style={styles.line}></View>
                <View style={styles.line}></View>
                <View style={styles.line}></View>
                <View style={styles.line}></View>
            </View>

            <View style={styles.right}>
                <View style={styles.p_r}></View>
                <View style={styles.p_line}></View>
                <View style={styles.p}></View>
                <View style={styles.p_line}></View>
                <View style={styles.p}></View>
                <View style={styles.p_line}></View>
                <View style={styles.p_r}></View>
                <View style={styles.p_line}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    places : {
        marginTop: 20,
        display : 'flex',
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        backgroundColor: '#232628'
    },

    left : {
        marginTop: 50,
        flex: 1,
    },

    right : {
        marginTop: 50,
        flex: 1,
    },

    center : {
        flex: 1,
        borderLeftWidth : 2,
        borderRightWidth: 2,
        marginLeft: 8,
        marginRight: 8,
        borderColor : '#EAF6FF',
        alignItems: 'center',
        marginBottom: 225,
        marginTop: 50,
    },

    line : {
        backgroundColor: '#EAF6FF',
        width: 5,
        height: 50,
        marginTop: 10,
    },

    p : {
        borderRadius: 10,
        marginTop: 20,
        width : 120,
        height : 60,
        backgroundColor : 'green',
    },

    p_r : {
        borderRadius: 10,
        marginTop: 20,
        width: 120,
        height: 60,
        backgroundColor: 'red',
    }, p_line : {
        width: 125,
        height: 5,
        backgroundColor: '#EAF6FF',
        marginTop: 20,
    }
})