/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view';
import {
  Navigator,
} from 'react-native-deprecated-custom-components';
import TabBottom from './tabBottom';

import Home from './src/home'
import My from './src/my'
const tabTitles = ['首页', '我的'];
//默认图标
const tabIcon = [
  require('./src/img/tapbar-icon-user-normal.png'),
  require('./src/img/tapbar-icon-user-normal.png'),
];
//选中图标
const tabSelectedIcon = [
  require('./src/img/tapbar-icon-user-highlight.png'),
  require('./src/img/tapbar-icon-user-highlight.png'),
];

export default class App extends Component {
  onChangeTabs = ({ i }) => 'light-content';
  render() {
    return (
      <ScrollableTabView
        style={{ marginTop: 20, }}
        initialPage={0}
        tabBarPosition="bottom"
        onChangeTab={this.onChangeTabs}
        // renderTabBar={ () =>  < CustomTabBar someProp={' here '} /> }
        // renderTabBar={() => <DefaultTabBar />}
        renderTabBar={() =>
          <TabBottom
            tabNames={tabTitles}
            tabIconNames={tabIcon}
            selectedTabIconNames={tabSelectedIcon} />}
      >
        <Home navigator={this.props.navigator} />
        <My navigator={this.props.navigator} />
        {/* <Text tabLabel='Tab #1'>Home</Text>
        <Text tabLabel='Tab #2'>favorite</Text>
        <Text tabLabel='Tab #3'>My</Text> */}
      </ScrollableTabView>
    );
  }
}
        
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
