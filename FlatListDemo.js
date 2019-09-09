/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,FlatList,RefreshControl,ActivityIndicator} from 'react-native';
const CITY_LIST = ['北京', '上海','广州','深圳','武汉','成都','杭州']
export default class FlatListDemo extends Component { 
  constructor(props){
    super(props);
    this.state={
      isLoading:false,
      dataArr: CITY_LIST
    }
  }
  loadData = (refreshing) => {
    if (refreshing){
      this.setState({ isLoading: true })
    }
    
    setTimeout(() => {
      let dataArr = []
      if (refreshing){
        for (let i = this.state.dataArr.length - 1; i >= 0; i--) {
          dataArr.push(this.state.dataArr[i])
        }
      }else{
        dataArr = this.state.dataArr.concat(['beijing','shanghai'])
      }
      console.log('aaa',dataArr)
      this.setState({
        isLoading: false,
        dataArr: dataArr
      })
    }, 2000);
  }
  renderListItem = (data) => {
    return <View key={data.index} style={styles.item}>
      <Text style={styles.text}>{data.item}</Text>
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
    const { isLoading, dataArr} = this.state
    return (
      <View style={styles.container}>
        <FlatList
          data={dataArr}
          renderItem={(data)=>this.renderListItem(data)}
          // refreshing={isLoading}
          // onRefresh={()=>{
          //   this.loadData()
          // }}
          refreshControl={
            <RefreshControl
              title={'Loading'}
              colors={['red']}
              progressBackgroundColor='blue'
              progressViewOffset={20}
              tintColor='blue'
              titleColor='blue'
              refreshing={isLoading}
              onRefresh={()=>{
                this.loadData(true)
              }}
            />
          }
          ListEmptyComponent={
            <Text>空空如也~~~</Text>
          }
          ListFooterComponent={this.genIndicator}
          onEndReachedThreshold={20}
          onEndReached={()=>this.loadData()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item:{
    backgroundColor:"#169",
    height:200,
    marginLeft:15,
    marginRight:15,
    marginBottom:15,
    alignItems:'center',
    justifyContent:"center"
  },
  text:{
    color:"white",
    fontSize:20
  },
  indicatorContainer:{
    paddingVertical:20,
    alignItems:'center'
  },
  indicator:{
    color:'red',
    marginTop:10
  }
});
