import React from 'react';
import { View , StyleSheet, Route } from 'react-native';

import { createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";


import MusicPlayer from './assets/Source/Screens/MusicPlayer';
import SignUp from './assets/Source/Screens/SignUp';
import StartScreen from './assets/Source/Screens/StartScreen';
import LibraryScreen from "./assets/Source/Screens/LibraryScreen";
import Login from './assets/Source/Screens/LogIn';
import HomeScreen from './assets/Source/Screens/HomeScreen';


const App = () => {
    
    const Stack = createStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="welcome" component={StartScreen} />
                <Stack.Screen name="loginPage" component={Login} />
                <Stack.Screen name="signupPage" component={SignUp} />
                <Stack.Screen name="libraryScreen" component={LibraryScreen} />
                <Stack.Screen name="player" component={MusicPlayer} />
                <Stack.Screen name="home" component={HomeScreen} />

            </Stack.Navigator>

        </NavigationContainer>
    );
};

export default App;

const styles = StyleSheet.create({

    container: {
        flex:1,
    },
});