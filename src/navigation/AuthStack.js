import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, RegisterScreen } from '../screen';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screen/SplashScreen';
import { store } from '../redux/store';
import { Provider } from 'react-redux';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}