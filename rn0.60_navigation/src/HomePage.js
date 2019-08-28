/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Button, View, Text, Image} from 'react-native';

export default class Homepage extends Component { 
  static navigationOptions = {
    title:'Home'
  }
  render() {
    const {navigation} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>welcome to Homepage</Text>
        <View style={styles.button}>
          <Button 
            title={'Go To Page1'}
            onPress={() => navigation.navigate('Page1',{name:'动态的'})}
          />
        </View>
        <View style={styles.button}>
          <Button
            title={'Go To Page2'}
            onPress={() => navigation.navigate('Page2')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title={'Go To Page3'}
            onPress={() => navigation.navigate('Page3', { title: 'Devio' })}
          />
        </View>
        <View style={styles.button}>
          <Button
            title={'Go To Bottom'}
            onPress={() => navigation.navigate('Bottom')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title={'Go To Top'}
            onPress={() => navigation.navigate('Top')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title={'Go To Drawer'}
            onPress={() => navigation.navigate('Drawer')}
          />
        </View>
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
  button:{
    marginTop:20
  }
});
