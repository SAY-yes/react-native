/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';

export default class Page4 extends Component { 
  render() {
    const { navigation} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>welcome to Page4</Text>
        <Button
          title={'open drawer'}
          onPress={() => navigation.openDrawer()}
        />
        <Button
          title={'close drawer'}
          onPress={() => navigation.closeDrawer()}
        />
        <Button
          title={'toggle drawer'}
          onPress={() => navigation.toggleDrawer()}
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
  }
});
