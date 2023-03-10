import React, { useEffect, useState} from 'react';
import { StyleSheet,View, Text,SafeAreaView, TouchableOpacity, Image, Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Slider from '@react-native-community/slider';
import AntDesign from '@expo/vector-icons/AntDesign';
const design = require("../../design");
const data = require("./Data");


const {width, height} = Dimensions.get('window');

const MusicPlayer = ({navigation}) => {

    const arr = data.default;
   
    const [iconName, setIconName] = useState("heart-outline");
    const [icon1Name, setIcon1Name] = useState("repeat");
    const [icon2Name, setIcon2Name] = useState("pause");
    const [currentSong, setCurrentSong] = useState(arr[1]);

        const id = currentSong.id;
        
        function moveForward(){
            if(currentSong.id == arr.length-1){
                setCurrentSong(arr[0]);
            }
            if(currentSong.id < arr.length-1){
                setCurrentSong(arr[id+1]);
            }
        }

    function moveBackwoard(){
        if(currentSong.id == 0){
        }else{
            setCurrentSong(arr[currentSong.id-1]);
        }
    }



    return(
        <SafeAreaView style={design.default.container}>
            <View style={styles.mainContainer}>
                <View style={styles.upperContainer}>
                    <TouchableOpacity onPress={()=> navigation.navigate("welcome")}>
                    <Ionicons name="arrow-back-sharp" size={35} color='#A6A6A6'/>
                    </TouchableOpacity>
                    <Text style={styles.title}>Now Playing</Text>
                    <Ionicons name="arrow-back-sharp" size={35} color='#000'/>
                </View>
                <View style={styles.coverWrapper}>
                    <Image  style={styles.cover} source={require("../covers/Attention.jpg")} />
                </View>
                <View>
                    <Text style={styles.title} >{currentSong.Name}</Text>
                    <Text style={styles.artist} >{currentSong.Artist}</Text>
                
                </View>
                <View style={styles.likerepeat}>
                    <TouchableOpacity onPress={()=>{
                        if(icon1Name=="repeat"){
                            setIcon1Name("repeat-one");
                        }
                        if(icon1Name=="repeat-one"){
                            setIcon1Name("repeat");
                        }
                    }}>
                    <MaterialIcons name={icon1Name} size={20} color='#C5AA1E' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                        if(iconName=="heart-outline"){
                            setIconName("heart");
                        }
                        if(iconName=="heart"){
                            setIconName("heart-outline");
                        }
                    }}>
                    <Ionicons name={iconName} size={20} color='#C5AA1E'/>
                    </TouchableOpacity>
                </View>
                <View style={styles.timerContainer}>
                    <Text style={styles.timerText}>0:00</Text>
                    <Text style={styles.timerText}>{currentSong.duration}</Text>
                    
                </View>
                <View>
                    <Slider 
                    style={styles.progressContainer} 
                    value={10}
                    minimumValue={0}
                    maximumValue={100}
                    minimumTrackTintColor='#C5AA1E'
                    thumbTintColor='#C5AA1E'
                    maximumTrackTintColor='white'
                    onSlidingComplete={()=>{}}
                    />
                </View>
            </View>

            <View style={styles.lrcontainer}>
                
            </View>
            <View style={styles.controlsContainer}>
                <View style={styles.control}>
                    <TouchableOpacity onPress={moveBackwoard}>
                        <AntDesign name="stepbackward" size={30} color='#C5AA1E'></AntDesign>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> {
                        if(icon2Name=="pause"){
                            setIcon2Name("play");
                        }
                        if(icon2Name=="play"){
                            setIcon2Name("pause");
                        }
                    }}>
                        <Ionicons name={icon2Name} size={50} color='#C5AA1E'></Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={moveForward}>
                        <AntDesign name="stepforward" size={30} color='#C5AA1E'></AntDesign>
                    </TouchableOpacity>
                </View>
            </View>
            
        </SafeAreaView>
    );
};

export default MusicPlayer;

const styles = StyleSheet.create({
    
    upperContainer:{

        marginTop:-40,
        marginBottom:20,
        flexDirection:'row',
        alignItems:"flex-start",
        justifyContent:"space-between",
        width:'80%',
    },

    mainContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
   },
    likerepeat:{
        width:'80%',  
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        
    },
    controlsContainer:{
        width:width,
        alignItems:'center',
        paddingtop:0,
        paddingBottom:60,
    },
    control:{
        width:'80%',  
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        
    },
    coverWrapper:{
        alignItems:'center',
        width: 300,
        height: 300,
        marginBottom:5,
    },
    cover:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
    },
    title:{
        color:'#C5AA1E',
        textAlign: 'center',
        fontSize: 19,
        fontWeight:'600',
    },
    artist:{
        color:'#C5AA1E',
        textAlign: 'center',
        fontSize: 15,
        fontWeight:'60',
    },
    progressContainer:{
        marginTop:70,
        width:310,
        height:25,
        marginBottom:-100,
        flexDirection:'row'
    },
    timerContainer:{
        marginTop:80,
        marginBottom:-60,
        flexDirection:"row",
        justifyContent:"space-between",
        width:280
    },
    timerText:{
        color:'#C5AA1E',
    }

});