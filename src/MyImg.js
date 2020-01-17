import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'
import axios from 'axios'
import Qs from 'qs'
import moment from 'moment'
import { Menu, Table, Divider, Upload, message, Select, Icon, Row, Col, Dropdown, Button, Tag, PageHeader } from 'antd';
import MyHeader from './MyHeader'
import AppGlobal from './AppGlobal'
const { SubMenu } = Menu;

export default class MyImg extends React.Component {
    state = {
        图片名称列表: [
            // '首页滚动图片1', '首页滚动图片2', '首页滚动图片3', '首页滚动图片4', '首页滚动图片5',
            '新闻图片1', '新闻图片2', '新闻图片3', '新闻图片4', '新闻图片5',
            '首页中间横幅图片1', '首页中间横幅图片2', '首页中间横幅图片3',
            '产品中心滚动图片1', '产品中心滚动图片2', '产品中心滚动图片3', '产品中心滚动图片4', '产品中心滚动图片5',
            '产品中心滚动图片6', '产品中心滚动图片7', '产品中心滚动图片8', '产品中心滚动图片9', '产品中心滚动图片10',
            '产品中心滚动图片11', '产品中心滚动图片12', '产品中心滚动图片13', '产品中心滚动图片14', '产品中心滚动图片15',
        ],
        活动详单: [],
        菜单列表: [],
        lan_mu: '',
        ban_kuai: '',
        my_tittle: '',
        usertoken: new URLSearchParams(this.props.location.search).get('usertoken'),
        // ban_kuai: new URLSearchParams(this.props.location.search).get('ban_kuai'),
        // my_tittle: new URLSearchParams(this.props.location.search).get('my_tittle'),
        tittle: '',
        type: '已发布',
        usertoken: '123456',
        username: '',
        userphone: '',
        userrole: '',
        mainid: '',
        type1: '',
        type2: '',
        type3: '',
        ban_kuai1: '营销活动',
        ban_kuai2: '新闻中心',
        ban_kuai3: '依法履职',
        ban_kuai4: '营销活动',
    }

    componentDidMount() {
        this.isLivinig = true
        let self = this;
        // try {
        //     const search = this.props.location.search;
        //     const params = new URLSearchParams(search);
        //     console.log(params)
        //     let data = {
        //         "usertoken": params.get('usertoken')
        //     }
        //     axios({
        //         headers: {
        //             'Content-Type': 'application/x-www-form-urlencoded'
        //         },
        //         method: 'post',
        //         url: AppGlobal.url.getUserInfo,
        //         data: Qs.stringify(data)
        //     }).then(function (response) {
        //         console.log(response)
        //         if (response.data.username === '') {
        //             // window.location.href = AppGlobal.url.login
        //         } else {
        //             self.setState({
        //                 username: response.data.username,
        //                 userphone: response.data.userphone,
        //                 userrole: response.data.userrole,
        //                 mainid: response.data.mainid,
        //                 type1: response.data.type1,
        //                 type2: response.data.type2,
        //                 type3: response.data.type3,
        //             })
        //         }
        //     })
        //         .catch(function (error) {
        //             console.log(error);
        //         });

        //     let data2 = {
        //         "type": self.state.type
        //     }
        //     axios({
        //         headers: {
        //             'Content-Type': 'application/x-www-form-urlencoded'
        //         },
        //         method: 'post',
        //         url: AppGlobal.url.rd_xia_zai_by_lan_mu,
        //         data: Qs.stringify(data2)
        //     }).then(function (response) {
        //         console.log(response)
        //         self.setState({
        //             菜单列表: response.data
        //         });
        //     })
        //         .catch(function (error) {
        //             console.log(error);
        //         });

        // } catch (e) {
        //     console.log(e)
        //     // window.location.href = AppGlobal.url.login
        // }
    }

    handleChange = (value) => {
        console.log(`selected ${value}`);
        this.setState({
            tittle: value
        })
    }

    render() {
        const props = {
            name: 'file',
            action: AppGlobal.url.uploadimg,
            data: { usertoken: new URLSearchParams(this.props.location.search).get('usertoken'), tittle: this.state.tittle },
            headers: {
                authorization: 'authorization-text',
            },
            onChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    message.success(`${info.file.name} ${info.file.response.code}`);
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} ${info.file.response.code} `);
                }
            },
        };

        const { Option } = Select;

        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={2}><label>图片位置:</label> </Col>
                    <Col span={5}>  <Select defaultValue="" style={{ width:'100%' }} onChange={this.handleChange}>
                        {this.state.图片名称列表.map((item) => {
                            return (
                                <Option value={item}>{item}</Option>
                            )
                        })}
                    </Select>
                    </Col>
                    <Col span={3}></Col>
                    <Col span={2}> <label>上传图片:</label>
                    </Col>
                    <Col span={8}>  <Upload {...props}>
                        <Button>
                            <Icon type="upload" /> 点击上传文件
                        </Button>
                    </Upload>
                    </Col>
                    <Col span={2}>
                    </Col>
                </Row>

            </div>
        )
    }
}