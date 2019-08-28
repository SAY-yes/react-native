/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';

export default class Login extends Component { 
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>登录页</Text>
        <Button title="go to App" onPress={()=>this.props.navigation.navigate('App')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20
  }
});
