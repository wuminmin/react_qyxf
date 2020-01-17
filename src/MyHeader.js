import { Carousel, Input, Layout, Menu, Breadcrumb, Icon, Row, Col, Dropdown, Button, Tag, PageHeader } from 'antd';
// import Carousel from 'nuka-carousel';
import React from 'react'
import moment from 'moment';
import Qs from 'qs'
import axios from 'axios'
import 'antd/dist/antd.css';
import './index.css';
import AppGlobal from './AppGlobal';
import index_header_jpg from './index_header.jpg';
import img_guohui_png from './img_guohui.png';

const { Search } = Input;
export default class MyHeader extends React.Component {
    state = {
        collapsed: false,
        myHTML: '',
        ban_kuai: '',
        lan_mu: '',
        tian_qi: '',
        // head_menu_data: [
        //     {
        //         name: '首页', myMenu: [
        //             { subname: '首页', subUrl: '/' }
        //         ]
        //     },
        //     {
        //         name: '新闻中心', myMenu: [
        //             { subname: '人大要闻', subUrl: '/mynews?ban_kuai=新闻中心&lan_mu=人大要闻&tittle=默认' },
        //             { subname: '通知公告', subUrl: '/mynews?ban_kuai=新闻中心&lan_mu=通知公告&tittle=默认' },
        //             { subname: '工作动态', subUrl: '/mynews?ban_kuai=新闻中心&lan_mu=工作动态&tittle=默认' }
        //         ]
        //     },
        //     {
        //         name: '人大概况', myMenu: [
        //             { subname: '首页', subUrl: '' }
        //         ]
        //     },
        //     { name: '依法履职', myMenu: [{ subname: '决定决议', subUrl: '' }, { subname: '任职任免', subUrl: '' }, { subname: '监督工作', subUrl: '' }, { subname: '法律法规', subUrl: '' }] },
        //     { name: '代表工作', myMenu: [{ subname: '人大简介', subUrl: '' }, { subname: '组织机构', subUrl: '' }, { subname: '组成人员', subUrl: '' }, { subname: '委室内职责', subUrl: '' }] },
        //     { name: '会议之窗', myMenu: [{ subname: '人民代表大会会议', subUrl: '' }, { subname: '常委会会议', subUrl: '' }, { subname: '主任会议', subUrl: '' }, { subname: '代表联系群众', subUrl: '' }, { subname: '代表邮箱', subUrl: '' }] },
        //     { name: '一府一委两院', myMenu: [{ subname: '人民政府', subUrl: '' }, { subname: '监察委员会', subUrl: '' }, { subname: '人民法院', subUrl: '' }, { subname: '人民检察院', subUrl: '' }] },
        //     { name: '乡镇人大', myMenu: [{ subname: '蓉城镇', subUrl: '' }, { subname: '朱备镇', subUrl: '' }, { subname: '杨田镇', subUrl: '' }, { subname: '陵阳镇', subUrl: '' }, { subname: '新河镇' }, { subname: '木镇镇', subUrl: '' }] },
        // ],
        head_menu_data:[],
    };

    componentDidMount() {
        let self = this;

        axios({
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'post',
            url: AppGlobal.url.tian_qi_xia_zai,
        }).then(function (response) {
            console.log(response)
            self.setState({
                tian_qi: response.data.cityInfo.city + '；湿度：' + response.data.data.shidu + '；空气质量：' + response.data.data.quality + '；平均温度：' + response.data.data.wendu
            });
        })
            .catch(function (error) {
                console.log(error);
            });

        axios({
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'post',
            url: AppGlobal.url.get_header_menu_list_data,
        }).then(function (response) {
            console.log(response)
            self.setState({
                head_menu_data: response.data
            });
        })
            .catch(function (error) {
                console.log(error);
            });
    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        return (
            <div style={{ fontWeight: '900' }}>
                <Row>
                    <div style={{ width: 'auto' }}>
                        <img
                            style={{ backgroundSize: 'cover', width: '100%', height: 'auto' }} responsive
                            src={index_header_jpg}>
                        </img>
                        <img style={{
                            position: 'absolute',
                            height: 'auto',
                            width: '15%',
                            top: '30%',
                            left: '10%',
                        }} src={img_guohui_png} />
                        <h1 style={{
                            position: 'absolute',
                            top: '30%',
                            left: '25%',
                            color: 'red',
                            fontSize: '70px',
                            fontWeight: '900',
                            fontFamily: 'STSong',
                            // textShadow:'1px 1px #ffffff,-1px -1px #ffffff,1px -1px #ffffff,-1px 1px #ffffff',
                            textShadow: '0 0 0.3em #fff, 0 0 0.3em #fff, 0 0 0.3em #fff',
                        }}>青阳人大</h1>
                        <h4 style={{
                            position: 'absolute',
                            top: '50%',
                            left: '26%',
                            color: 'red',
                            fontSize: '40px',
                            fontFamily: 'SimHei',
                            // textShadow:'1px 1px #ffffff,-1px -1px #ffffff,1px -1px #ffffff,-1px 1px #ffffff',
                            textShadow: '0 0 0.3em #fff, 0 0 0.3em #fff, 0 0 0.3em #fff',
                        }}>rd.qyxgov.cn</h4>
                    </div>
                </Row>
                <br></br>
                <Row>
                    <Col span={8}>
                        <p style={{ color: 'blue' }}>{moment().format('YYYY年MM月DD日 hh时mm分钟ss秒')} </p>
                    </Col>
                    <Col span={8}>
                        <p style={{ color: 'blue' }}>{this.state.tian_qi} </p>
                    </Col>
                    <Col span={8}>
                        <Search placeholder="热门文章" onSearch={value => console.log(value)} enterButton />
                    </Col>
                </Row>
                <Row>
                    {this.state.head_menu_data.map((myitem) => {
                        return (
                            <Col span={3} style={{
                                fontWeight: '900',
                                color: '#ffffff',
                                backgroundColor: 'blue',
                            }}
                            >
                                <Dropdown overlay={(
                                    <Menu style={{
                                        fontWeight: '900',
                                        color: '#ffffff',
                                        backgroundColor: 'blue',
                                    }}
                                    >
                                        {myitem.myMenu.map((subitem) => {
                                            return (
                                                <Menu.Item>
                                                    <a style={{
                                                        fontWeight: '900',
                                                        color: '#ffffff',
                                                        backgroundColor: 'blue',
                                                        borderColor: 'blue',
                                                    }}
                                                        target="_blank" rel="noopener noreferrer" href={subitem.subUrl}>
                                                        {subitem.subname}
                                                    </a>
                                                </Menu.Item>
                                            )
                                        })}
                                    </Menu>
                                )} placement="bottomCenter">
                                    <Button
                                        style={{
                                            fontWeight: '900',
                                            color: '#ffffff',
                                            backgroundColor: 'blue',
                                            borderColor: 'blue',
                                            textAlign: 'center',
                                        }}
                                    >{myitem.name}</Button>
                                </Dropdown>
                            </Col>
                        )
                    })}
                </Row>
                <br></br>
            </div>
        );
    }
}