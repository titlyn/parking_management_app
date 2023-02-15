import {Text, View, Pressable, StyleSheet} from 'react-native';
import LoginScreen from './login';

export default function StartScreen({navigation}) {
    return (
        <View style={styles.content}>
            
            <Text style={styles.h1}>Let's start</Text>

            <Pressable
                style={styles.primary_btn}
                onPress = {() => {navigation.navigate('Login')}}
            >
                <Text style={styles.btn_text}>Login</Text>
            </Pressable>

            <Pressable
                style={styles.primary_btn}
                onPress={() => {navigation.navigate('Sign_in')}}
            >
                <Text style={styles.btn_text}>Sign in</Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    content :  {
        marginTop: 20,
        backgroundColor: '#232528',
        flex: 1,
        display: 'flex',
        paddingTop: 130,
        alignItems: 'center',
    },

    h1 : {
        fontSize : 40,
        fontWeight : 'bold',
        marginTop : 100,
        marginBottom: 30,
        color: '#FFF',

    },

    primary_btn : {
      margin: 30,
      backgroundColor: 'blue',
      width: 150,
      height: 40,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },

    btn_text : {
      fontSize: 18,
      color: '#FFF',
      fontWeight: 'bold',
    }
})