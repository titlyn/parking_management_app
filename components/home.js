import { ImageBackground,View , Text} from 'react-native';
import {StyleSheet, Button} from 'react-native';
import StartScreen from './start';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Ionicons from '@expo/vector-icons/Ionicons'


export default function HomeScreen({navigation}) {
    return (
        <View style={styles.content}>
            <View style={styles.h1_top_1}>
                <Text style={styles.h1_top}>Find</Text>
                <View style={styles.h1_img}>
                    <Ionicons name={'location'} size={50} color={'#FFF'}/>
                </View>
            </View>
            <Text style={styles.h1_bottom}>Your place and enjoy</Text>
            
            <View style={styles.image}>
            <ImageBackground source={require('../image/parking.jpeg')} resizeMode="cover" style={styles.present}>
                <Pressable 
                    style={styles.button_div} 
                    onPress = {() => {navigation.navigate('Start')}}
                >
                    <Text style={styles.btn}>Get started</Text>
                </Pressable>

                <Pressable 
                    style={styles.btn_about}
                    onPress={() => {
                        navigation.navigate('About')
                    }
                }>
                    <Ionicons name='star' color={'#FFA400'} size={60}></Ionicons>
                    <Text style={{color: '#FFF', fontSize: 20}}>About</Text>
                </Pressable>
            </ImageBackground>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content : { 
        marginTop: 20,
        flex: 1,  
        paddingLeft: 30,
        backgroundColor: '#232528',
    },
    
    present : {
        marginTop: 40,
        width: 360,
        height: 500,
        alignItems: 'center',
    },

    button_div : {
        marginTop: 60,
        display : 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        width: 140,
        height: 60,
        borderRadius: 8,
    },

    btn : {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#232528',
    },

    h1_top_1 : {
        marginTop: 80,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },

    h1_top : {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#Fff', 
    },

    h1_img : {
        marginLeft: 50,
        width: 50,
        height: 50,
    },

    h1_bottom : {
        marginTop: 10,
        fontSize: 40,
        fontWeight: 'bold',
        color : '#fff',
    },

    btn_about : {
        marginTop: 200
    }

})