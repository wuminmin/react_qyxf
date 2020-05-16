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
        usertoken: this.props.usertoken,
        // ban_kuai: new URLSearchParams(this.props.location.search).get('ban_kuai'),
        // my_tittle: new URLSearchParams(this.props.location.search).get('my_tittle'),
        tittle: '',
        type: '已发布',
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
        当前模块:'',
        模块列表:[],
        当前图片名称:'',
        

    }

    componentDidMount() {
        this.isLivinig = true
        let self = this;
      
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
            data: { usertoken: this.props.usertoken, tittle: this.state.tittle },
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

        const props2 = {
            name: 'file',
            action: AppGlobal.url.uploadimg2,
            data: { usertoken: this.state.usertoken, 当前模块: this.state.当前模块,当前图片名称:this.state.当前图片名称 },
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
                <Row>
                    <Col span={24}>
                        <label>选择模块:</label>
                        <Select defaultValue="" style={{ width: 240 }} onChange={(value) => {
                             this.setState({
                                当前模块: value
                            })
                        }}>
                            {this.state.模块列表.map((item) => {
                                return (
                                    <Option key={item} value={item}>{item}</Option>
                                )
                            })}
                        </Select>
                        <label>图片名称:</label>
                        <input type="txt" defaultValue="" onChange={(e) => {
                            console.log(e.target.value);
                            this.setState({当前图片名称:e.target.value});
                        }} />
                        <label>上传图片:</label>
                        <Upload {...props2}>
                            <Button>
                                <Icon type="upload" /> 点击上传文件
                            </Button>
                        </Upload>
                        <Button 
                            onClick={(e)=>{
                                let self = this;
                                let data = {
                                    "usertoken": self.state.usertoken,
                                    "lan_mu":self.state.当前模块,
                                    "tittle":self.state.当前图片名称
                                }
                                axios({
                                    headers: {
                                        'Content-Type': 'application/x-www-form-urlencoded'
                                    },
                                    method: 'post',
                                    url:'http://223.247.193.223:18005/wxyl/delete_img',
                                    data: Qs.stringify(data)
                                }).then(function (response) {
                                    console.log(response);
                                    message.success(response.data);
                                })
                                    .catch(function (error) {
                                        console.log(error);
                                    });

                            }}
                        >删除图片</Button>
                    </Col>
                </Row>

            </div>
        )
    }
}