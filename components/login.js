import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import Place from './place';

export default function LoginScreen({navigation}) {
    const name = 'Rakoto'
    const pasword = 'password'
    var nameinput
    var passwordinput

    function login(){
      if (nameinput==name && passwordinput==pasword) {
        navigation.navigate('Place')
      } else {
        alert('Wrong Password!')
      }
    }
    return (
      <View style={styles.content}>
        <Text style={styles.h1}>Parking</Text>

        <View style={styles.input_div}>
          <TextInput placeholder='Username' style={styles.username} value={nameinput}/>

          <TextInput placeholder='Password' style={styles.password} secureTextEntry={true} value={passwordinput} />

          <Pressable style={styles.login_btn} onPress={()=> {login()}}>
            <Text style={styles.login}>Login</Text>
          </Pressable>
        </View>
      </View>
    );
  }


const styles=StyleSheet.create({
  content: {
    marginTop: 20,
    backgroundColor: '#232528',
    flex: 1,
    alignItems: 'center',
  },

  h1 : {
    marginTop: 80,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFF'
    },

    username : {
      marginTop: 100,
      height: 40,
      width: 300,
      backgroundColor: '#EAF6FF',
      borderRadius: 10,
      padding: 10,
      fontSize: 16,
    },

    password : {
      marginTop: 20,
      height: 40,
      width : 300,
      backgroundColor: '#EAF6FF',
      borderRadius: 10,
      padding: 10,
      fontSize: 16,
    }, 

    login_btn: {
      marginLeft: 70,
      width: 150,
      height: 50,
      backgroundColor: 'blue',
      borderRadius: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
    },

    login : {
      color: '#FFF',
      fontSize: 18,
      fontWeight: 'bold',
    }
})