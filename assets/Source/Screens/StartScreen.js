import React from 'react';
import { View , StyleSheet, Button, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const StartScreen = ({navigation}) => {

    return(
        <View style={styles.container}>
            <Text style = {styles.title}>Create your experience!</Text>
            <Text style = {styles.pText}>Stream yoru favourite songs ON THE GO...</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("loginPage")}>
                <View style = {styles.nextButton}>
                    <Text style = {{color:"black"}}>LET'S GO</Text>
                    <Ionicons name="arrow-forward-sharp" size={25} color='#000'/>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default StartScreen;

const styles = StyleSheet.create({
    nextButton:{
        display:"flex",
        flexDirection:"row",
        backgroundColor:"yellow",
        alignItems:"center",
        fontWeight:"bold",
        marginTop: 45,
        padding:6,
        borderRadius:30,
    },
    container: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"black",
    },
    title:{
        fontSize:24,
        color:"white",
        fontWeight:"700",
        margin: 6,
    },
    pText:{
        color:"white",
        margin:8,
        fontSize:16,
    }
});