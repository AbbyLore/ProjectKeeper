import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FeedScreen from '../screens/FeedScreen';
import PostScreen from '../screens/PostScreen';



export const AppTabNavigator = createBottomTabNavigator({
  FeedScreen : {
    screen: FeedScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/flower-filler.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Post Feed",
    }
  },
  PostScreen: {
    screen: PostScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/rose-filler.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "New Post",
    }
  }
});
