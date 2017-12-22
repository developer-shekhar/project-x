/* HOC to handle app login */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    ActivityIndicator,
    Alert,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
  } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from "react-native-elements";

import Icon from 'react-native-vector-icons/FontAwesome';


import {colors} from "../../constants/color";

const UserIcon = () => (<Icon name="user" size={150} color="#700" />);
const RocketIcon = () => (<Icon name="rocket" size={150} color="#700" />);


export default class Login extends Component {
   render() {
       return(
         <KeyboardAvoidingView 
         behavior = "padding"
          style = {styles.container}> 
           <View style = {styles.topCont}>
              <RocketIcon/> 
           </View>
           <View style = {styles.bottomCont}>

             <TextInput 
                placeholder = "user or email" 
                placeholderTextColor = {colors.textSecondaryLight} 
                returnKeyType = "next"
                autoCapitalize = "none"
                style = {[styles.inputElement, styles.applyBorder]}
                onSubmitEditing = { () => this.passwordInput.focus()}
                keyboardType = "email-address"
                autoCorrect = {false}
              />
             <TextInput 
                placeholder = "password" 
                placeholderTextColor = {colors.textSecondaryLight} 
                secureTextEntry= {true}
                returnKeyType = "done" 
                autoCapitalize = "none"
                ref = {(input) => this.passwordInput = input}
                style = {[styles.inputElement, styles.applyBorder]}
              />
            <TouchableOpacity
              style = {[styles.btnCont, styles.applyBorder]}
            > 
              <Text
                style = {styles.btnText}
              > 
                  LOGIN
              </Text>
            </TouchableOpacity>
           </View>
        </KeyboardAvoidingView>
       )
   }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primary,
    },
    topCont : {
      flex : 1,
      flexDirection : "row",
      justifyContent: "center",
      alignItems : "flex-end",
    },
    bottomCont : {
      padding : 20,
      flex : 1,
       justifyContent : "flex-start",
       
    },
    inputElement : {
      padding: 10,
      backgroundColor: "#80CBC4",
      marginBottom : 10,
    
    },
    btnCont : {
      backgroundColor : colors.accent,
      padding: 10,
      justifyContent : "center",
      alignItems : "center",
     
    },
    btnText : {
      color: colors.textPrimary,
      fontWeight : "700",
      fontSize : 20,
    },
    applyBorder : {
      borderRadius: 6,
      borderWidth: 0.5,
      borderColor: 'green',
    },
    
  });




  