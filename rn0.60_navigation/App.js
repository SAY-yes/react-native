import React from 'react'
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation'
import { Button, View, Platform, Image, ScrollView,SafeAreaView } from 'react-native'
import Page1 from './src/Page1'
import Page2 from './src/Page2'
import Page3 from './src/Page3'
import Page4 from './src/Page4'
import Page5 from './src/Page5'
import Login from './src/Login'
import HomePage from './src/HomePage'

const AppSatck = createStackNavigator({
  Home: HomePage,
  Page1: Page1
},{
  initialRouteName:'Home'
})

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      title: 'Login'
    })
  }
})
const switchNavigator = createSwitchNavigator({
  Auth: AuthStack,
  App: AppSatck
}, {
    initialRouteName: 'Auth'
})

export default createAppContainer(switchNavigator)