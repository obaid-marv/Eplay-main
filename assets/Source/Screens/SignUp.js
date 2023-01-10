import React from 'react';
import { View , StyleSheet, Button, Text, TouchableOpacity, TextInput, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from '@react-navigation/native';

const SignUp = ({navigation}) => {

    return(
        <View style={styles.container}>


            <Text style = {styles.title}>Sign Up</Text>
            <TextInput style={styles.inputs} placeholderTextColor="yellow" placeholder='Enter your Username'/>
            <TextInput style={styles.inputs} placeholderTextColor="yellow" placeholder='Enter your email' />
            <TextInput style={styles.inputs} secureTextEntry placeholderTextColor="yellow" placeholder='Enter your Phone Number' />
            <TextInput style={styles.inputs} placeholderTextColor="yellow" placeholder='Enter your Password' />
            <TouchableOpacity onPress={() => navigation.navigate("home")}>  
                <Text style={styles.btn}>Sign Up</Text>
            </TouchableOpacity>


            <View style={styles.links}>
                    <Text style={styles.pText} >Already have an account?</Text>
                    <Pressable onPress={() => navigation.navigate("loginPage")}>
                        <Text style={styles.loginBtn}>Login</Text>
                    </Pressable>
            </View>
            <View style={styles.lineSeparator}>
                <Text style = {styles.colorWhite}></Text>
                <Text style = {styles.colorWhite} >OR</Text>
                <Text style = {styles.colorWhite} ></Text>


            </View>
                <TouchableOpacity>
                    <View style={styles.logoDiv}>
                        <Ionicons style={styles.logoIcon} name='md-logo-facebook' size={20} color="white"/>
                        <Text style={styles.logo}>logn in with facebook</Text>
                    </View>
                </TouchableOpacity>
            </View>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    links:{
        marginBottom:10,
        display:"flex",
        flexDirection:"row",
    },
    lineSeparator:{
        display:"flex",
        flexDirection:"row",
    },
    loginBtn:{
        flex:1,
        color:"blue",
        marginRight:20,
    },
    colorWhite:{
        color:"white",
        // flexGrow:1,
        // flexShrink:1,
        // flexBasis:1,
    },
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
    logoIcon:{
        flex:1,
    },
    btn:{
        backgroundColor:"yellow",
        color:"black",
        width:300,
        marginTop:23,
        marginBottom:15,
        padding:12,
        textAlign:"center",
        borderRadius:10,
    },
    logo:{
        flex:8,
        backgroundColor:"blue",
        color:"white",
        textAlign:"center"
    },
    inputs:{
        margin:8,
        borderColor:"yellow",
        fontWeight:"300",
        width:300,
        padding:8,
        textAlign:"center",
        color:"yellow",
        borderRadius:10,
        borderWidth:1,
    },
    logoDiv:{
display:"flex",
marginTop:25,
flexDirection:"row",
backgroundColor:"blue",
padding:10,
borderRadius:15,
width:300,
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
        marginBottom:18,
    },
    pText:{
        color:"yellow",
        flex:4,
        marginLeft:34,
        fontSize:12,
    }
});