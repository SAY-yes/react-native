## 1、新创建的rn项目，ios跑不起来？
* 安装CocoaPods，参考<a href="https://www.jianshu.com/p/acf16330bcc0">最新的CocoaPods安装使用教程-2019-03-01</a>
* 进入到项目的iOS目录下，pod install
* 打开iOS目录下的proj_name.xcworkspace文件
## 2、error eslint@6.3.0: The engine "node" is incompatible with this module. Expected version "^8.10.0 || ^10.13.0 || >=11.10.1". Got "11.10.0"
node 版本问题，要求node版本"^8.10.0 || ^10.13.0 || >=11.10.1"
sudo n 11.1.0
* 安装node版本管理模块n
	sudo npm install n -g
* 安装稳定版
	sudo n stable
* 安装最新版
	sudo n latest
* 版本降级/升级
	sudo n 版本号
* 检测目前安装了哪些版本的node
	n
* 切换版本（不会删除已经安装的其他版本）
	n 版本号
* 删除版本
	sudo n rm 版本号
## 3、安装react-navigation
* npm install react-navigation
* npm install react-native-gesture-handler react-native-reanimated
* iOS链接原生库，执行pod install
* 如果您在构建应用程序时遇到有关Android支持库的错误，则需要安装和配置<a href="https://github.com/mikehardy/jetifier">jetifier</a>
* Android链接react-native-gesture-handler，修改MainActivity.java

		package com.reactnavigation.example;

		import com.facebook.react.ReactActivity;
		+ import com.facebook.react.ReactActivityDelegate;
		+ import com.facebook.react.ReactRootView;
		+ import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

		public class MainActivity extends ReactActivity {

			@Override
			protected String getMainComponentName() {
				return "Example";
			}

		+  @Override
		+  protected ReactActivityDelegate createReactActivityDelegate() {
		+    return new ReactActivityDelegate(this, getMainComponentName()) {
		+      @Override
		+      protected ReactRootView createRootView() {
		+       return new RNGestureHandlerEnabledRootView(MainActivity.this);
		+      }
		+    };
		+  }
		}