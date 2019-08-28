import React from 'react'
import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator, createAppContainer, createDrawerNavigator, DrawerItems } from 'react-navigation'
import { Button, View, Platform, Image, ScrollView,SafeAreaView } from 'react-native'
import Page1 from './src/Page1'
import Page2 from './src/Page2'
import Page3 from './src/Page3'
import Page4 from './src/Page4'
import Page5 from './src/Page5'
import Login from './src/Login'
import HomePage from './src/HomePage'

const AppDrawerNavigator = createDrawerNavigator({
  page4:{
    screen:Page4,
    navigation:{
      drawerLabel:'Page4',
      drawerIcon:({tintColor})=>{
        return <Image
          resizeMode='stretch'
          source={require('./assets/member.png')}
          style={{ width: 21, height: 22 }}
        />
      }
    }
  },
  page5: {
    screen: Page5,
    navigation: {
      drawerLabel: 'Page5'
    }
  },
  page6: {
    screen: Page5,
    navigation: {
      drawerLabel: 'Page6'
    }
  },
  page7: {
    screen: Page5,
    navigation: {
      drawerLabel: 'Page7'
    }
  },
  page8: {
    screen: Page5,
    navigation: {
      drawerLabel: 'Page8'
    }
  },
  page1: {
    screen: Page1,
    navigation: {
      drawerLabel: 'Page1'
    }
  },
  page2: {
    screen: Page2,
    navigation: {
      drawerLabel: 'Page2'
    }
  },
  page3: {
    screen: Page3,
    navigation: {
      drawerLabel: 'Page3'
    }
  },
  page9: {
    screen: Page1,
    navigation: {
      drawerLabel: 'Page9'
    }
  },
  page10: {
    screen: Page2,
    navigation: {
      drawerLabel: 'Page10'
    }
  },
  page11: {
    screen: Page3,
    navigation: {
      drawerLabel: 'Page11'
    }
  },
  page12: {
    screen: Page1,
    navigation: {
      drawerLabel: 'Page12'
    }
  },
  page13: {
    screen: Page2,
    navigation: {
      drawerLabel: 'Page13'
    }
  },
  page14: {
    screen: Page3,
    navigation: {
      drawerLabel: 'Page14'
    }
  },
  page15: {
    screen: Page1,
    navigation: {
      drawerLabel: 'Page15'
    }
  },
  page16: {
    screen: Page2,
    navigation: {
      drawerLabel: 'Page16'
    }
  },
  page17: {
    screen: Page3,
    navigation: {
      drawerLabel: 'Page17'
    }
  }
},{
  initialRouteName:'page4',
  contentOptions:{
    activeTintColor:'#e91e63'
  },
  drawerBackgroundColor:'#ccc',
  edgeWidth:300,
  overlayColor:'rgba(255,255,255,.8)'
  // contentComponent:(props)=>(
  //   <ScrollView style={{backgroundColor:'#789',flex:1}}>
  //     <SafeAreaView forceInset={{top:'always',horizontal:'never'}}>
  //       <DrawerItems {...props}/>
  //     </SafeAreaView>
  //   </ScrollView>
  // )
})
const AppTopNavigator = createMaterialTopTabNavigator({
  page1: {
    screen: Page1,
    navigationOptions: {
      tabBarLabel: 'All'
    }
  },
  page2: {
    screen: Page2,
    navigationOptions: {
      tabBarLabel: 'Ios'
    }
  },
  page3: {
    screen: Page3,
    navigationOptions: {
      tabBarLabel: 'Android'
    }
  },
  page4: {
    screen: Page4,
    navigationOptions: {
      tabBarLabel: 'Devio'
    }
  }
}, {
    tabBarOptions: {
      tabStyle: { minWidth: 50 },
      upperCaseLabel: false,
      scrollEnabled: true,
      style: {
        backgroundColor: '#678'
      },
      indicatorStyle: {
        height: 2,
        backgroundColor: 'white'
      },
      labelStyle: {
        fontSize: 13,
        marginVertical: 6
      }
    }
  });
const AppBottomNavigator = createBottomTabNavigator({
  page1: {
    screen: Page1,
    navigationOptions: {
      tabBarLabel: '最热'
    }
  },
  page2: {
    screen: Page2,
    navigationOptions: {
      tabBarLabel: '趋势'
    }
  },
  page3: {
    screen: Page3,
    navigationOptions: {
      tabBarLabel: '收藏'
    }
  },
  page4: {
    screen: Page4,
    navigationOptions: {
      tabBarLabel: '我的'
    }
  }
}, {
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:({focused,horizontal,tintColor})=>{
      return  <Image
        resizeMode='stretch'
        source={focused ? require('./assets/member.png') : require('./assets/btn_member.png')}
        style={{ width: 21, height: 22 }}
      />
    }
  }),
  tabBarOptions:{
    activeTintColor:'#a00'
  }
})
const AppStackNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage
  },
  Page1: {
    screen: Page1,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}页面名`
    })
  },
  Page2: {
    screen: Page2,
    navigationOptions: {
      title: 'This is Page2'
    }
  },
  Page3: {
    screen: Page3,
    navigationOptions: (props) => {
      const { navigation } = props
      const { state, setParams } = navigation
      const { params } = state
      return {
        title: params.title ? params.title : '',
        headerRight: (
          <Button
            title={params.mode === 'edit' ? '保存' : '编辑'}
            onPress={() => setParams({ mode: params.mode === 'edit' ? '' : 'edit' })}
          />
        )
      }
    }
  },
  Page4: {
    screen: Page4,
    navigationOptions: {
      title: 'This is Page4'
    }
  },
  Bottom: {
    screen: AppBottomNavigator,
    navigationOptions: {
      title: 'BottomNavigator'
    }
  },
  Top: {
    screen: AppTopNavigator,
    navigationOptions: {
      title: 'TopNavigator'
    }
  },
  Drawer:{
    screen: AppDrawerNavigator,
    navigationOptions:{
      title:'DrawerNavigator'
    }
  }
}, {
    defaultNavigationOptions: {
      headerTitleStyle: {
        flex: 1,
        textAlign: 'center',
      },
      // headerRight: (
      //   <View style={{ width: 24, height: 24, margin: 3 }}></View>
      // )
    }
  })

const AppStackNavigatorContainer = createAppContainer(AppStackNavigator)
export default AppStackNavigatorContainer