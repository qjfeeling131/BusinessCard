"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author 何晏波
 * @QQ 1054539528
 * @date 2019/12/8
 * @function: 我的照片
 */
const taro_1 = require("@tarojs/taro");
const components_1 = require("@tarojs/components");
const datatool_1 = require("../../../utils/datatool");
const style_1 = require("../../../utils/style");
class MyPhoto extends taro_1.PureComponent {
    render() {
        return (<components_1.View style={datatool_1.styleAssign([style_1.wRatio(100)])}>
        <components_1.View style={datatool_1.styleAssign([style_1.default.uac, style_1.default.udr, style_1.ml(20), style_1.mt(32)])}>
          <components_1.View style={datatool_1.styleAssign([style_1.w(3), style_1.h(22), style_1.bgColor('#E2BB7B')])}/>
          <components_1.Text style={datatool_1.styleAssign([style_1.fSize(16), style_1.color(style_1.commonStyles.colorTheme), style_1.ml(8)])}>我的照片</components_1.Text>
        </components_1.View>
        <components_1.View style={datatool_1.styleAssign([{ width: '95%' }, { marginLeft: '2.5%' }, style_1.mt(16), style_1.h(720), style_1.bgColor(style_1.commonStyles.whiteColor)])}>
          <components_1.View style={datatool_1.styleAssign([style_1.default.uf1, style_1.default.uac, style_1.default.ujc])}>
            <components_1.Image style={datatool_1.styleAssign([style_1.radiusA(4), style_1.wRatio(95), style_1.hRatio(90), style_1.bgColor(style_1.commonStyles.whiteColor)])} src={require('../../../assets/ico_default.jpeg')}/>
          </components_1.View>
          <components_1.View style={datatool_1.styleAssign([style_1.default.uf1, style_1.default.uac, style_1.default.ujc])}>
            <components_1.Image style={datatool_1.styleAssign([style_1.radiusA(4), style_1.wRatio(95), style_1.hRatio(90), style_1.bgColor(style_1.commonStyles.whiteColor)])} src={require('../../../assets/ico_default.jpeg')}/>
          </components_1.View>
          <components_1.View style={datatool_1.styleAssign([style_1.default.uf1, style_1.default.uac, style_1.default.ujc])}>
            <components_1.Image style={datatool_1.styleAssign([style_1.radiusA(4), style_1.wRatio(95), style_1.hRatio(90), style_1.bgColor(style_1.commonStyles.whiteColor)])} src={require('../../../assets/ico_default.jpeg')}/>
          </components_1.View>
        </components_1.View>
      </components_1.View>);
    }
}
exports.default = MyPhoto;
//# sourceMappingURL=index.jsx.map