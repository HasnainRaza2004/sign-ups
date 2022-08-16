import React from 'react'
import { Text,TextInput, TouchableOpacity, View ,   CheckBox ,StyleSheet } from 'react-native'

const App = () => {
  return (
    <View style={{backgroundColor:"#8282e5",flex:1}}>
    <View style={{flex:0.7,alignItems:"center"}}>
      <Text style={{color:"white",fontSize:35,marginTop:100}}>SIGN UP</Text>
      </View>
      <View style={{flex:1,flexDirection:"column",alignItems:"center"}}>
    <TextInput style={Styles.inputs} placeholder='Enter Full Name' placeholderTextColor="black" />
    <TextInput style={Styles.inputs} placeholder='Enter Email ' placeholderTextColor="black"/>
    <TextInput style={Styles.inputs} placeholder='Enter Contact ' placeholderTextColor="black"/>
      </View>
      <View style={{alignItems:"center",alignContent:"center"}}>
        <TouchableOpacity style={Styles.button}>
        <Text style={{color:"white",fontSize:17}}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
button:{
backgroundColor:"#06d6a0",
width:200,
height:50,
borderRadius:20,
marginBottom:150,
alignItems:"center",
justifyContent:"center"
},
inputs:{
  width:250,
  height:60,
  marginBottom:20,
  paddingLeft:15,
  backgroundColor:"white",
  shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
borderRadius:30,
shadowOpacity: 0.36,
shadowRadius: 6.68,

elevation: 11,
  
},
});

export default App
