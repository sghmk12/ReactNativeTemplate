import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';

import {
  StatusBar,
} from 'react-native';

import HomeScreen from "./screens/HomeScreen"
import DetailScreen from "./screens/DetailScreen"
import CalendarScreen from "./screens/CalendarScreen"

const Stack = createStackNavigator();
const AppTheme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    primary: 'darkslateblue',
    background:'aliceblue',
    card:"aliceblue"
  }
}
const AppDarkTheme = {
  ...DarkTheme
}

const App = () => {
  const scheme = useColorScheme()
  return (
    <>
    <StatusBar backgroundColor={scheme === 'dark' ? 'black' : 'aliceblue'}
      barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'}/>
    <NavigationContainer theme={scheme === 'dark' ? AppDarkTheme : AppTheme}>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle:{
            fontWeight:'bold'
          }
        }}>
        <Stack.Screen name = "Home" component={HomeScreen}
          options={{
            title:"React Native Tests"
          }}/>
        <Stack.Screen name = "Details" component={DetailScreen}/>
        <Stack.Screen name = "Calendar" component={CalendarScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};

export default App;
