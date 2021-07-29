import React ,{Component} from 'react'
import {View, Text, TouchableOpacity, ScrollView, FlatList, StyleSheet} from 'react-native';
import {Card,Icon,ListItem} from 'react-native-elements'
import MyHeader from '../components/MyHeader.js'
import firebase from 'firebase';
import db from '../config.js'

export default class MyPostsScreen extends Component {
    constructor(){
        super()
        this.state = {
            commentId : firebase.auth().currentUser.email,
            commentName : "",
            allReplies : []
        }
        this.requestRef= null
    }

    static navigationOptions = { header: null };

    getCommentDetails=(commentId)=>{
        db.collection("users").where("email_is","==", commentId).get()
        .then((snapshot)=>{
            snapshot.forEach((doc) => {
                this.setState({
                    "commentName" : doc.data().first_name + " " + doc.data().last_name
                })
            });
        })
    }

    getAllReplies =()=>{
        this.requestRef = db.collection("all_replies").where("comment_id", '==', this.state.commentId)
        .onSnapshot((snapshot)=>{
            var allReplies = []
            snapshot.docs.map((doc) =>{
                var reply = doc.data()
                reply["doc_id"] = doc.id
                
            })
        })
    }
}