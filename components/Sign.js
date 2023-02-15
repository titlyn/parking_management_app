import { TextInput } from "react-native-gesture-handler";
import { Text, Pressable, View, StyleSheet } from "react-native";

export default function SigninScreen({navigation}) {
    return(
        <View style={styles.content}>
            <Text style={styles.h1}>Sign in</Text>
            <TextInput style={styles.input} placeholder="Name" />
            <TextInput style={styles.input} placeholder="Car number" />
            <TextInput style={styles.input} placeholder="username" />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
            <TextInput style={styles.input} placeholder="Confirm password" secureTextEntry={true} />
            <Pressable style={styles.btn_div} onPress={() => {navigation.navigate('Place')}}>
                <Text style={styles.btn_text}>Sign in</Text>
            </Pressable>
        </View>
    )
}

const styles=StyleSheet.create({
    content : {
        flex : 1,
        marginTop: 20,
        display: 'flex',
        alignItems : 'center',
        backgroundColor : '#232528'
    },

    h1 : {
        fontSize : 30,
        fontWeight : 'bold',
        marginTop : 100,
        marginBottom: 10,
        color: '#FFF',
    },

    input : {
        marginTop: 20,
        fontSize : 18,
        padding: 10,
        width : 300,
        height : 40,
        borderRadius : 10,
        backgroundColor : '#EAF6FF'
    },

    btn_div : {
        display : "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop : 30,
        width: 150,
        height: 50,
        borderRadius: 10,
        backgroundColor : 'blue',
    },

    btn_text : {
        fontSize: 18,
        fontWeight: "bold",
        color: '#FFF',
    }
})