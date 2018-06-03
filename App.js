import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { SwitchNavigator } from 'react-navigation'

// import the different screens
import Loading from './/Loading'
import SignUp from './/SingUp'
import Login from './/Login'
import Main from './/Main'
import CreateNote from './/CreateNote'

// create our app's navigation stack
const App = SwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    CreateNote,
    Main
  },
  {
    initialRouteName: 'Loading'
  }
)

export default App