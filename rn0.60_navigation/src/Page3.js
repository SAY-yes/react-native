/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput} from 'react-native';

export default class Page3 extends Component { 
  render() {
    const param = this.props.navigation.state.params
    const showText = param&&param.mode === 'edit' ? '正在编辑' :'编辑完成'
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>welcome to Page3</Text>
        <Text style={styles.welcome}>{showText}</Text>
        <TextInput 
        style={styles.input} 
          editable={param && param.mode === 'edit' ?true:false}
        onChangeText = {(text) =>{
          this.props.navigation.setParams({title:text})
        }}
        />
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
  },
  input:{
    borderWidth:1,
    borderColor:'black',
    marginTop:10
  }
});
