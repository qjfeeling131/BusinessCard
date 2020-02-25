/**
 * @filename index.tsx
 * @author 何晏波
 * @QQ 1054539528
 * @date 2020/2/25
 * @Description: 关联客户
 */
import Taro, {Component} from '@tarojs/taro'
import {Image, Text, View} from "@tarojs/components";
import {bgColor, color, commonStyles, default as styles, fSize, h, ml, mt, w, wRatio} from "../../../utils/style";
import {styleAssign} from "../../../utils/datatool";
import {cloudBaseUrl} from "../../../api/httpurl";

interface Props {

}

export default class GuanLianCustomer extends Component<Props> {

  render() {


    return (
      <View style={styleAssign([wRatio(100), h(96), bgColor(commonStyles.whiteColor), styles.udr, styles.uac])}>
        <Image style={styleAssign([w(64), h(64), ml(20)])} src={`${cloudBaseUrl}ico_default.png`}/>
        <View style={styleAssign([ml(18)])}>
          <View style={styleAssign([styles.udr, styles.uac])}>
            <Text style={styleAssign([color('#343434'), fSize(18)])}>刘思雨</Text>
            <Text style={styleAssign([color('#A9A9A9'), fSize(14), ml(8)])}>项目经理</Text>
          </View>
          <Text style={styleAssign([color('#A9A9A9'), fSize(12), mt(8)])}>美克美家家居集团股份有限公司</Text>
        </View>
      </View>
    )
  }
}