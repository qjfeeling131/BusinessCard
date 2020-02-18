/**
 * @filename index.tsx
 * @author 何晏波
 * @QQ 1054539528
 * @date 2019/12/8
 * @Description: 界面头部组件
 */
import Taro, {Component} from "@tarojs/taro";
import {Image, Text, View} from "@tarojs/components";
import {styleAssign} from "../../utils/datatool";
import styles, {bgColor, color, commonStyles, fSize, h, ml, mr, w, wRatio} from "../../utils/style";
import Navigation from "../navigation";

interface Props {
  title: string;
  textColor?: string;
  backgroundColor?: string;
  customCallback?: any;
  style?: any;
}

interface State {

}

export default class TopHeader extends Component<Props, State> {

  constructor(props) {
    super(props);

  }

  render() {

    let {title, textColor, backgroundColor, customCallback,style} = this.props;

    return (
      <Navigation style={style}>
        <View
          style={styleAssign([wRatio(100), styles.ujb, styles.udr, styles.uac, bgColor(backgroundColor ? backgroundColor : commonStyles.whiteColor)])}>
          <Image style={styleAssign([w(22), h(22), ml(20)])}
                 src={textColor ? require('../../assets/ico_back_white.png') : require('../../assets/ico_back.png')}
                 onClick={() => {
                   if (customCallback) {
                     customCallback();
                   } else {
                     Taro.navigateBack();
                   }
                 }}/>
          <Text style={styleAssign([fSize(19), color(textColor ? textColor : commonStyles.colorTheme)])}>{title}</Text>
          <View style={styleAssign([w(22), h(22), bgColor(commonStyles.transparent), mr(20)])}/>
        </View>
      </Navigation>
    );
  }

}
