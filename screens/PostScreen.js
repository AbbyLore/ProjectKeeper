import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'

export default class PostScreen extends Component{
  constructor(){
    super();
    this.state = {
      userId : firebase.auth().currentUser.email,
      projectName:"",
      description:""
    }
  }

  createUniqueId(){
    return Math.random().toString(36).substring(7);
  }



  addPost = (projectName, description) => {
    var userId = this.state.userId
    var randomPostId = this.createUniqueId()
    db.collection('user_posts').add({
      "user_id": userId,
      "project_name": projectName,
      "description": description,
      "request_id": randomPostId,
    })

    this.setState({
      projectName : '',
      description : ''
    })

    return Alert.alert("Posted Successfully")
  }


  render(){
    return(
      <View style={{flex:1}}>
        <MyHeader title = "Post"/>
        <KeyboardAvoidingView style = {styles.keyboardStyle}>
          <TextInput
          style = {styles.formTextInput}
          placeholder = {"Enter Project Name"}
          onChangeText = {(text) => {
            this.setState({
              projectName: text
            })
          }}
          value = {this.state.projectName}
          />
          <TextInput
          style = {[styles.formTextInput, {height: 300}]}
          multiline
          numberOfLines = {10}
          placeholder = {"Describe Your Project!"}
          onChangeText = {(text) => {
            this.setState({
              description: text
            })
          }}
          value = {this.state.description}
          />
          <TouchableOpacity
          style = {styles.button}
          onPress = {() => {this.addPost(this.state.projectName, this.state.description)}}
          >
            <Text>Post</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  keyboardStyle : {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10,
  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:20
    },
  }
)