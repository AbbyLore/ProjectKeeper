import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity, TouchableHighlightBase } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'
import MyHeader from '../components/MyHeader';

export default class FeedScreen extends Component{
    constructor(){
        super()
        this.state = {
            postsList : []
        }
    this.requestRef = null
    }

    getPostsList = () => {
        this.requestRef = db.collection("user_posts")
        .onSnapshot((snapshot) => {
            var postsList = snpashot.docs.map(document => document.data());
            this.setState({
                postsList : postsList
            });
        })
    }

    componentDidMount(){
        this.getPostsList()
    }

    componentWillUnmount(){
        this.requestRef();
    }

    keyExtractor = (item, index) => index.toString()

    renderItem = ( {item, i} ) => {
        return (
            <ListItem
            key = {i}
            title = {item.project_name}
            subtitle = {item.description}
            titleStyle = {{color: 'black', fontWeight: 'bold' }}
            rightElement = {
                <TouchableOpacity style = {styles.button}>
                    <Text style = {{color:'#ffff'}}>View Post</Text>
                </TouchableOpacity>
            }
            bottomDivider
            />
        )
    }

    render(){
        return(
            <View style = {{flex:1}}>
                <MyHeader title = "Browse Posts"/>
                <View style = {{flex:1}}>
                    {
                        this.state.postsList.length === 0
                        ?(
                            <View style = {styles.subContainer}>
                                <Text style = {{ fontSize: 20 }}>Projects</Text>
                            </View>
                        )
                        :(
                            <FlatList
                                keyExtractor = {this.keyExtractor}
                                data = {this.state.postsList}
                                renderItem = {this.renderItem}
                            />
                        )
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    subContainer:{
      flex:1,
      fontSize: 20,
      justifyContent:'center',
      alignItems:'center'
    },
    button:{
      width:100,
      height:30,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8
       }
    }
  })
  //100 lines >:P