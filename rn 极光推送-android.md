## 一、 准备工作
1、在极光推送后台注册应用，生成appKey;
2、
3、
## 二、安装
npm install  jpush-react-native jcore-react-native --save 
> jpush-react-native自1.4.4后 需安装jcore-react-native

## 三、配置
1、自动配置
react-native link jpush-react-native
react-native link jcore-react-native
> link过程需要输入appKey

完成之后可检查结果：
app目录下的build.gradle
```
android {
    defaultConfig {
        ...
        manifestPlaceholders = [ //新添加
				
					JPUSH_APPKEY: "bc4d4bac9***c58784e913b",
				
        	APP_CHANNEL : "default"
        ]
    }
}
dependencies {
    compile project(':jcore-react-native')//新添加
    compile project(':jpush-react-native')//新添加
    compile fileTree(dir: "libs", include: ["*.jar"])
    ...
}
```
setting.gradle
```
include ':jcore-react-native'
project(':jcore-react-native').projectDir = new File(rootProject.projectDir, '../node_modules/jcore-react-native/android')

include ':jpush-react-native'
project(':jpush-react-native').projectDir = new File(rootProject.projectDir, '../node_modules/jpush-react-native/android')
```
AndroidManifest.xml
```
<application
      ...>
     //新增
    <meta-data
        android:name="JPUSH_APPKEY"
        android:value="${JPUSH_APPKEY}" />
    //新增
    <meta-data
        android:name="JPUSH_CHANNEL"
        android:value="${APP_CHANNEL}" />
</application>
```
2、手动配置
在MainApplication.java文件中，添加JPushPackage
```
// 设置为 true 将不弹出 toast
private boolean SHUTDOWN_TOAST = true;
// 设置为 true 将不打印 log
private boolean SHUTDOWN_LOG = false;

@Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
              new JPushPackage(SHUTDOWN_TOAST,SHUTDOWN_LOG)
      );
    }
```
在MainActivity文件中添加配置：
```
@Override
protected void onCreate(Bundle savedInstanceState) {
	super.onCreate(savedInstanceState);
	JPushInterface.init(this);
	// String registrationId = JPushInterface.getRegistrationID(this);
	// Log.e("1099", "run:--------->registrationId： "+registrationId );
}

@Override
protected void onPause() {
	super.onPause();
	JPushInterface.onPause(this);
}

@Override
protected void onResume() {
	super.onResume();
	JPushInterface.onResume(this);
}
```
## 4、在js中使用
import JPushModule from 'jpush-react-native'
通过JPushModule调用响应的API。
```
componentDidMount() {
	JPushModule.initPush()
	if (Platform.OS === 'ios') {
		JPushModule.setupPush()
	}else{
		//v1.6.6 版本以后，增加了 notifyJSDidLoad 方法，在监听所有相关事件之前要调用此方法，否则不会收到点击通知事件。
		JPushModule.notifyJSDidLoad(resultCode => {
      			if (resultCode === 0) {
      			}
    		})
	}
	JPushModule.getRegistrationID(registrationId => {
		// alert(registrationId)
		console.log('Id------', registrationId)
		AsyncStorage.setItem("regId", registrationId)
	})
 
	//接收自定义消息监听
	JPushModule.addReceiveCustomMsgListener(map => {
			this.setState({
					pushMsg: map.message
			})
			console.log('extras: ' + map.extras)
	})
	//接收通知监听
	JPushModule.addReceiveNotificationListener((map) => {
			console.log("alertContent: " + map.alertContent);
			console.log("extras: " + map.extras);
	})

	//在用户点击通知后，将会触发此事件
	JPushModule.addReceiveOpenNotificationListener((map) => {
		let extra
		if (Platform.OS == 'android') {
			extra = JSON.parse(map.extras)
		} else {
			extra = map.extras
		}

		if (extra.info) { // 通知
			navigation.navigate("NoticeDetailPage", map);
		}
		if (extra.message) { // 消息
			navigation.navigate("InfoDetailPage", map);
		}
	})
};
 
```