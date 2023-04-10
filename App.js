import {LogBox, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import UniversalStyles from './src/screen/UniversalStyles';
import NeumorphLogin from './src/screen/NeumorphLogin';
import Signup from './src/components/Signup';
import SimpleLogin from './src/components/SimpleLogin/SimpleLogin';
import Profile from './src/components/NeumorphProfile/Profile';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="UniversalStyles" component={UniversalStyles} />
        {/* <Stack.Screen name="NeumorphLogin" component={NeumorphLogin} /> */}
        {/* <Stack.Screen name="Signup" component={Signup} /> */}
        {/* <Stack.Screen name="SimpleLogin" component={SimpleLogin} /> */}
        {/* <Stack.Screen name="Profile" component={Profile} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
