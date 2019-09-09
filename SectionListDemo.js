/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, SectionList, RefreshControl, ActivityIndicator } from 'react-native';
const CITY_LIST = [
  { data: ['北京', '上海', '广州', '深圳'],title:'一线城市'},
  { data: ['武汉', '成都', '杭州','南京'],title:'准一线城市'},
  { data: ['郑州', '青岛', '厦门','苏州'],title:'二线城市'},
]
export default class SectionListDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      dataArr: CITY_LIST
    }
  }
  loadData = (refreshing) => {
    if (refreshing){
      this.setState({ isLoading: true })
      setTimeout(() => {
        let dataArr = []
        for (let i = this.state.dataArr.length - 1; i >= 0; i--) {
          dataArr.push(this.state.dataArr[i])
        }
        this.setState({
          isLoading: false,
          dataArr: dataArr
        })
      }, 2000);
    }else{
      setTimeout(() => {
        let dataArr = this.state.dataArr.concat(CITY_LIST)
        console.log('ddd',dataArr)
        this.setState({
          dataArr: dataArr
        })
      }, 2000);
    }
    
  }
  renderListItem = (data) => {
    return <View key={data.index} style={styles.item}>
      <Text style={styles.text}>{data.item}</Text>
    </View>
  }
  renderSectionHeader = ({section}) => {
    return <View style={styles.sectionHeader}>
      <Text style={styles.headerText}>{section.title}</Text>
    </View>
  }
  genIndicator = () => {
    return <View style={styles.indicatorContainer}>
      <ActivityIndicator
        style={styles.indicator}
        size={'large'}
        animating={true}
        color='red'
      // hidesWhenStopped={true}
      />
      <Text>正在加载更多</Text>
    </View>
  }
  render() {
    const { isLoading, dataArr } = this.state
    return (
      <View style={styles.container}>
        <SectionList
          sections={dataArr}
          renderItem={(data) => this.renderListItem(data)}
          renderSectionHeader={(data)=>this.renderSectionHeader(data)}
          ItemSeparatorComponent={()=><View style={styles.line}></View>}
          refreshControl={
            <RefreshControl
              title={'Loading'}
              colors={['red']}
              progressBackgroundColor='blue'
              progressViewOffset={20}
              tintColor='blue'
              titleColor='blue'
              refreshing={isLoading}
              onRefresh={() => {
                this.loadData(true)
              }}
            />
          }
          ListEmptyComponent={
            <Text>空空如也~~~</Text>
          }
          ListFooterComponent={this.genIndicator}
          onEndReached={() => this.loadData(false)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f7f7f7'
  },
  item: {
    height: 80,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: "center"
  },
  text: {
    fontSize: 20
  },
  indicatorContainer: {
    paddingVertical: 20,
    alignItems: 'center'
  },
  indicator: {
    color: 'red',
    marginTop: 10
  },
  sectionHeader:{
    height:50,
    backgroundColor:'blue',
    alignItems: 'center',
    justifyContent: "center"
  },
  headerText:{
    color:'#fff'
  },
  line:{
    height:1,
    backgroundColor:'#333'
  }
});
