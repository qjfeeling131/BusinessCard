/**
 * @filename mingpianjia.tsx
 * @author 何晏波
 * @QQ 1054539528
 * @Description: 名片夹
 */
import Taro, {Component, Config} from '@tarojs/taro'
//@ts-ignore
import CustomSafeAreaView from "../../compoments/safe-area-view/index";
//@ts-ignore
import {styleAssign} from "../../utils/datatool";
import {bgColor, commonStyles, default as styles} from "../../utils/style";
import {connect} from "@tarojs/redux";
import * as actions from '../../actions/dict';
import TopHeader from "../../compoments/top-header/index";
import {View} from "@tarojs/components";
import MingPianJiaItem from "../../compoments/mingpianjia-item/index";

interface Props {
  wxacode:any;
}

interface State {

}

@connect(state => state.login, {...actions})
class Mingpianjia extends Component<Props, State> {

  private viewRef;


  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {

  }

  constructor(props) {
    super(props);
    console.log(this.viewRef);
    this.state = {}
  }


  componentDidShow(){
  }


  render() {

    return (
      <CustomSafeAreaView ref={(ref) => {
        this.viewRef = ref;
      }} customStyle={styleAssign([bgColor(commonStyles.whiteColor)])}>
        <TopHeader title={'名片夹'}/>
        <View style={styleAssign([styles.uf1, bgColor(commonStyles.pageDefaultBackgroundColor)])}>
          {
            [1, 2, 3, 4].map((value, index) => {
              console.log(value);
              return (<MingPianJiaItem key={index}/>);
            })
          }
        </View>
      </CustomSafeAreaView>
    );
  }
}

export default Mingpianjia;
