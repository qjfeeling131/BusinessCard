import '@tarojs/async-await'
import Taro, {Component, Config} from '@tarojs/taro'
import {Provider} from '@tarojs/redux'
import Index from './pages/businesscard/businesscard'
import configStore from './store'
import './app.scss'
import {Global} from "./const/global";

declare let global: Global;
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore();

class App extends Component {

  constructor(props) {
    super(props);

    console.log('呵呵', global);
    //获取胶囊按钮位置信息为后面自定义导航条做准备
    global.menuButton = Taro.getMenuButtonBoundingClientRect();
    console.log('胶囊信息', global.menuButton);
    global.debug = true;
    Taro.getSystemInfo({
      success: res => {
        global = Object.assign(global, res, {debug: true});
        console.log('设备信息', res);
        if (res.model && res.model.includes('iPhone X')) {
          global.iphoneX = true;
          console.log('是iphoneX机型')
        } else if (res.platform === 'ios' && res.screenHeight === 812 && res.screenWidth === 375 ||
          res.screenHeight === 896 && res.screenWidth === 414) {
          global.iphoneX = true;
          console.log('是iphoneX机型')
        } else {
          global.iphoneX = false;
          console.log('不是iphoneX机型')
        }
        console.log('设备信息', global);
      }

    }).then(res => console.log(res));
    //生产环境屏蔽所有log信息优化性能
    if (!global.debug) {
      console.info = () => {
      };
      console.log = () => {
      };
      console.warn = () => {
      };
      console.debug = () => {
      };
      console.error = () => {
      };
    }
  }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      //主界面
      "pages/businesscard/businesscard",
      "pages/radarscan/radarscan",
      "pages/customer/customer",
      "pages/mine/mine",
      //名片模块子页面
      "pages/businesscard/add_businesscard",
      "pages/businesscard/qiehuan_businesscard",
      "pages/businesscard/mingpian_haibao",
      "pages/businesscard/more_goods",
      "pages/businesscard/mingpianjia",
      "pages/businesscard/my_collect",
      //雷达模块子界面
      "pages/radarscan/radar_detail",
      //客户模块子页面
      "pages/customer/customer_detail",
      "pages/customer/customer_ziliao",
      "pages/customer/add_customer",
      "pages/customer/customer_remark",
      "pages/customer/add_genjin",
      //我的模块子页面
      "pages/mine/personal_info",
      "pages/mine/add_task",
      "pages/mine/tool_box",
      "pages/mine/haibao",
      "pages/mine/goods_detail",
      "pages/mine/goods_manage",
      "pages/mine/add_goods",
      "pages/mine/task_center",
      "pages/mine/contact_way",
      "pages/mine/setting_page",
      "pages/mine/feedback",
      "pages/mine/my_tags",
      "pages/mine/company_info",
      "pages/mine/my_edu",
      "pages/mine/self_intro",
      "pages/mine/audio_recorder",
      "pages/mine/industry_list",
      "pages/mine/perform_info",
      "pages/mine/my_photo",
      "pages/mine/my_video",
      "pages/mine/fenxiao_center",
      "pages/mine/data_center",
      "pages/mine/my_customer",
      "pages/mine/tixian",
      "pages/mine/tixian_recorder",
      "pages/mine/tixian_page",
      "pages/mine/about_us",
      "pages/mine/help",
    ],
    permission: {
      "scope.userLocation": {
        "desc": "获取你的详细位置信息"
      }
    },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTextStyle: 'black',
      pageOrientation: 'portrait',
      navigationStyle: 'custom'
    },
    tabBar: {
      color: "#9b9b9b",
      selectedColor: '#313137',
      backgroundColor: '#FFFFFF',
      borderStyle: 'white',
      list: [{
        pagePath: "pages/businesscard/businesscard",
        iconPath: "./assets/ico_tabar_businesscard_normal.png",
        selectedIconPath: "./assets/ico_tabar_businesscard_pressed.png",
        text: "名片",
      }, {
        pagePath: "pages/radarscan/radarscan",
        iconPath: "./assets/ico_tabar_radarscan_normal.png",
        selectedIconPath: "./assets/ico_tabar_radarscan_pressed.png",
        text: "雷达",
      }, {
        pagePath: "pages/customer/customer",
        iconPath: "./assets/ico_tabar_customer_normal.png",
        selectedIconPath: "./assets/ico_tabar_customer_pressed.png",
        text: "客户",
      }, {
        pagePath: "pages/mine/mine",
        iconPath: "./assets/ico_tabar_mine_normal.png",
        selectedIconPath: "./assets/ico_tabar_mine_pressed.png",
        text: "我的",
      }]
    }
  }

  componentWillMount() {

  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  componentDidCatchError() {
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index/>
      </Provider>
    )
  }
}

Taro
  .render(
    <App/>,
    document
      .getElementById(
        'app'
      ));
