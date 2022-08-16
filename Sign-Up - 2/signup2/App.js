import React from 'react'
import { Text,TextInput, TouchableOpacity, View ,   CheckBox ,StyleSheet, Button } from 'react-native'

const App = () => {
  return (
   <View style={Styles.mainContainer}>
<Text style={Styles.loginHeading}>LOGIN</Text>
<View style={Styles.inputsContainer}>

    <TextInput style={Styles.inputs} placeholder='Enter Full Name ' placeholderTextColor="grey"/>
    <TextInput style={Styles.inputs} placeholder='Enter Email ' placeholderTextColor="grey"/>
    <TextInput style={Styles.inputs} placeholder='Enter Password ' placeholderTextColor="grey"/>
</View>
<View style={Styles.buttonContainer}>
<TouchableOpacity style={Styles.loginButton}>
    <Text style={Styles.loginButtontext}>LOGIN</Text>
</TouchableOpacity>
</View>
   </View>
  )
}

const Styles = StyleSheet.create({
  mainContainer:{
    backgroundColor:"#219ebc",
    flex:1
  },
  loginHeading:{
flex:0.4,
marginTop:100,
color:"#2b2d42",
textAlign:"center",
fontSize:35,
  },
  inputsContainer:{
    flex:1,
    alignItems:"center"
  },
  inputs:{
    color:"white",
    fontSize:16,
    paddingLeft:15,
backgroundColor:"skyblue",
marginBottom:20,
width:230,
height:60
  },
   buttonContainer:{
    flex:0.2,
alignItems:"center",
justifyContent:"center"
  },
  loginButton:{
    backgroundColor:"skyblue",
    paddingLeft:50,
    paddingRight:50,
    paddingTop:10,
    paddingBottom:10,
  },
  loginButtontext:{
    color:"white",
    fontSize:20,
  }
});

export default App
