"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @filename add_task.tsx
 * @author 何晏波
 * @QQ 1054539528
 * @date 2019/12/18
 * @Description: 新建任务
 */
const taro_1 = require("@tarojs/taro");
//@ts-ignore
const index_1 = require("../../compoments/safe-area-view/index");
//@ts-ignore
const datatool_1 = require("../../utils/datatool");
const style_1 = require("../../utils/style");
const redux_1 = require("@tarojs/redux");
const actions = require("../../actions/task_center");
const index_2 = require("../../compoments/top-header/index");
const index_3 = require("../../compoments/bottom-buton/index");
const components_1 = require("@tarojs/components");
const index_4 = require("../../compoments/touchable-button/index");
const httpurl_1 = require("../../api/httpurl");
const guanlian_customer_1 = require("../sub_pagecomponent/guanlian-customer");
let AddTask = class AddTask extends taro_1.Component {
    constructor(props) {
        super(props);
        /**
         * 指定config的类型声明为: Taro.Config
         *
         * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
         * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
         * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
         */
        this.config = {
            disableScroll: true
        };
        /**
         * @author 何晏波
         * @QQ 1054539528
         * @date 2020/1/4
         * @function: 添加任务
         */
        this.addTask = () => {
            let { theme, date, remark, chooseCustomer } = this.state;
            if (theme.length === 0) {
                datatool_1.toast('主题不能为空');
                return;
            }
            if (date.length === 0) {
                datatool_1.toast('日期不能为空');
                return;
            }
            let paramas = {
                theme,
                date,
                userIds: JSON.stringify([1]),
                remark
            };
            if (chooseCustomer.length !== 0) {
                let userIds = [];
                for (let i = 0; i < chooseCustomer.length; i++) {
                    userIds.push(chooseCustomer[i].id);
                }
                Object.assign(paramas, { userIds: JSON.stringify(userIds) });
            }
            this.viewRef && this.viewRef.showLoading();
            this.props.addTask(paramas).then((res) => {
                console.log(res);
                this.viewRef && this.viewRef.hideLoading();
                if (res !== httpurl_1.NetworkState.FAIL) {
                    taro_1.default.eventCenter.trigger('refreshTaskList');
                    datatool_1.toast('任务添加成功');
                    datatool_1.debounce(1000, () => {
                        taro_1.default.navigateBack();
                    });
                }
            }).catch(e => {
                this.viewRef && this.viewRef.hideLoading();
                console.log('报错啦', e);
            });
        };
        console.log(this.viewRef);
        this.state = {
            theme: '',
            date: '',
            remark: '',
            chooseCustomer: []
        };
    }
    componentDidShow() {
        taro_1.default.eventCenter.on('chooseCustomer', (chooseCustomer) => {
            this.setState({ chooseCustomer });
        });
    }
    componentWillUnmount() {
        taro_1.default.eventCenter.off('chooseCustomer');
    }
    render() {
        let { theme, date, remark, chooseCustomer } = this.state;
        return (<index_1.default ref={(ref) => {
            this.viewRef = ref;
        }} customStyle={datatool_1.styleAssign([style_1.bgColor(style_1.commonStyles.whiteColor)])}>
        <index_2.default title={'新建任务'}/>
        <components_1.ScrollView style={datatool_1.styleAssign([style_1.default.uf1, style_1.default.uac, style_1.bgColor(style_1.commonStyles.whiteColor)])} scrollY>
          <components_1.View style={datatool_1.styleAssign([style_1.wRatio(100), style_1.h(10), style_1.bgColor(style_1.commonStyles.pageDefaultBackgroundColor)])}/>
          <components_1.View style={datatool_1.styleAssign([style_1.wRatio(100), style_1.default.udr, style_1.default.uac, style_1.default.ujb, style_1.bgColor(style_1.commonStyles.whiteColor), style_1.h(40), style_1.pl(20), style_1.pr(20)])}>
            <components_1.Text style={datatool_1.styleAssign([style_1.fSize(14), style_1.color('#727272')])}>主题</components_1.Text>
            <components_1.View style={datatool_1.styleAssign([style_1.default.udr, style_1.default.uac])}>
              <components_1.Text style={datatool_1.styleAssign([style_1.fSize(14), style_1.color('#727272')])}>{theme.length}</components_1.Text>
              <components_1.Text style={datatool_1.styleAssign([style_1.fSize(14), style_1.color('#979797')])}>/50</components_1.Text>
            </components_1.View>
          </components_1.View>
          <components_1.Textarea style={datatool_1.styleAssign([style_1.wRatio(90), style_1.h(128), style_1.pl(20), style_1.pr(20), style_1.bgColor(style_1.commonStyles.whiteColor),])} value={theme} placeholder={'例如：电话回访客户'} onInput={(e) => {
            this.setState({ theme: e.detail.value });
        }} maxlength={50}/>
          <components_1.View style={datatool_1.styleAssign([style_1.wRatio(100), style_1.h(1), style_1.bgColor(style_1.commonStyles.pageDefaultBackgroundColor)])}/>
          <components_1.Picker mode='date' onChange={(e) => {
            this.setState({ date: e.detail.value });
        }} value={date} style={datatool_1.styleAssign([style_1.wRatio(100)])}>
            <index_4.default customStyle={datatool_1.styleAssign([style_1.wRatio(100), style_1.default.udr, style_1.default.uac, style_1.default.ujb, style_1.h(51), style_1.pl(20), style_1.pr(20), style_1.bgColor(style_1.commonStyles.whiteColor)])} onClick={() => {
        }}>
              <components_1.Text style={datatool_1.styleAssign([style_1.fSize(14), style_1.color('#787878')])}>日期及时间</components_1.Text>
              <components_1.View style={datatool_1.styleAssign([style_1.default.uac, style_1.default.udr])}>
                <components_1.Text style={datatool_1.styleAssign([style_1.fSize(14), style_1.color('#787878')])}>{date ? date : '选择'}</components_1.Text>
                <components_1.Image style={datatool_1.styleAssign([style_1.w(7), style_1.h(13), style_1.ml(5)])} src={`${httpurl_1.cloudBaseUrl}ico_next.png`}/>
              </components_1.View>
            </index_4.default>
          </components_1.Picker>
          <components_1.View style={datatool_1.styleAssign([style_1.wRatio(100), style_1.bgColor(style_1.commonStyles.whiteColor)])}>
            <components_1.Text style={datatool_1.styleAssign([style_1.color('#787878'), style_1.fSize(14), style_1.ml(20), style_1.mt(15)])}>关联客户</components_1.Text>
            {chooseCustomer.length === 0 &&
            <components_1.Image style={datatool_1.styleAssign([style_1.w(68), style_1.h(68), style_1.ml(20), style_1.mt(14)])} src={`${httpurl_1.cloudBaseUrl}ico_add_task.png`} onClick={() => {
                taro_1.default.navigateTo({
                    url: `/pages/mine/choose_customer`
                });
            }}/>}
            {chooseCustomer.map((value, index) => {
            return <guanlian_customer_1.default key={index} customer={value}/>;
        })}
            <components_1.View style={datatool_1.styleAssign([style_1.wRatio(100), style_1.h(1), style_1.bgColor(style_1.commonStyles.pageDefaultBackgroundColor), style_1.mt(10)])}/>
          </components_1.View>
          <components_1.View style={datatool_1.styleAssign([style_1.wRatio(100), style_1.default.uas, style_1.default.udr, style_1.default.ujb, style_1.bgColor(style_1.commonStyles.whiteColor)])}>
            <components_1.Textarea style={datatool_1.styleAssign([style_1.wRatio(70), style_1.h(128), style_1.pa(20), style_1.bgColor(style_1.commonStyles.whiteColor)])} value={remark} placeholder={'备注'} onInput={(e) => {
            this.setState({ remark: e.detail.value });
        }} maxlength={200}/>
            <components_1.View style={datatool_1.styleAssign([style_1.default.udr, style_1.default.uac, style_1.mr(20), style_1.mt(18), style_1.bgColor(style_1.commonStyles.whiteColor)])}>
              <components_1.Text style={datatool_1.styleAssign([style_1.fSize(14), style_1.color('#727272')])}>{remark.length}</components_1.Text>
              <components_1.Text style={datatool_1.styleAssign([style_1.fSize(14), style_1.color('#979797')])}>/200</components_1.Text>
            </components_1.View>
          </components_1.View>
        </components_1.ScrollView>
        
        <index_3.default title={'保存'} onClick={() => {
            this.addTask();
        }}/>
      </index_1.default>);
    }
};
AddTask = __decorate([
    redux_1.connect(state => state.login, Object.assign({}, actions))
], AddTask);
exports.default = AddTask;
//# sourceMappingURL=add_task.jsx.map