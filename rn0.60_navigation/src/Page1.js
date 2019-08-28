import React, {Component} from 'react';
import { StyleSheet, Button, View, Text} from 'react-native';
import Page4 from './Page4';

export default class Page1 extends Component { 
  render() {
    const {navigation} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>welcome to Page1</Text>
        <Button 
          title={'跳转到Page4'}
          onPress={() => navigation.navigate('Page4')}
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
