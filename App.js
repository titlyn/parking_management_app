import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/home'
import StartScreen from './components/start';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/login';
import PlaceScreen from './components/place';
import SigninScreen from './components/Sign';
import AboutScreen from './components/about';


export default function App() {
  const Stack = createStackNavigator()
  var isLoggedin = false;
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName= 'Home'>
        <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name='Start' component={StartScreen} options={{headerShown: false}}/>
        <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name='Place' component={PlaceScreen} options={{headerShown: false}}/>
        <Stack.Screen name='Sign_in' component={SigninScreen} options={{headerShown: false}}/>
        <Stack.Screen name='About' component={AboutScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
});
