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
        head_menu_data: [],
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
                        <p style={{
                            color: '#ffffff',
                            position: 'absolute',
                            height: 'auto',
                            width: '20%',
                            top: '1%',
                            textShadow:'1px 1px #000000,-1px -1px #000000,1px -1px #000000,-1px 1px #000000',
                            left: '1%'
                        }}>
                            {moment().format('YYYY年MM月DD日 hh时mm分钟ss秒')}
                        </p>
                        <p style={{ 
                            color: '#ffffff' ,
                            position: 'absolute',
                            height: 'auto',
                            width: '30%',
                            top: '1%',
                            textShadow:'1px 1px #000000,-1px -1px #000000,1px -1px #000000,-1px 1px #000000',
                            left: '30%'
                        }}>{this.state.tian_qi} </p>
                        <Search style={{ 
                            color: '#ffffff' ,
                            position: 'absolute',
                            height: 'auto',
                            width: '29%',
                            top: '1%',
                            textShadow:'#000000',
                            left: '70%'
                        }}
                        placeholder="热门文章" onSearch={value => console.log(value)} enterButton />
                        <img style={{
                            position: 'absolute',
                            height: 'auto',
                            width: '12%',
                            top: '21%',
                            left: '14%',
                        }} src={img_guohui_png} />
                        {/* <h1 style={{
                            position: 'absolute',
                            top: '28%',
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
                            top: '43%',
                            left: '26%',
                            color: 'red',
                            fontSize: '40px',
                            fontFamily: 'SimHei',
                            // textShadow:'1px 1px #ffffff,-1px -1px #ffffff,1px -1px #ffffff,-1px 1px #ffffff',
                            textShadow: '0 0 0.3em #fff, 0 0 0.3em #fff, 0 0 0.3em #fff',
                        }}>rd.qyxgov.cn</h4> */}
                    </div>
                </Row>
                {/* <div>
                {this.state.head_menu_data.map((myitem) => {
                        return (
                            <div style={{
                                float:'left',
                                width:'120px',
                                height:'60px',
                                fontWeight: '900',
                                color: '#ffffff',
                                backgroundColor: 'blue',
                            }}
                            >
                                <Dropdown overlay={(
                                    <Menu style={{
                                        height:'60px',
                                            fontSize:'20px',
                                        fontWeight: '900',
                                        color: '#ffffff',
                                        backgroundColor: 'blue',
                                    }}
                                    >
                                        {myitem.myMenu.map((subitem) => {
                                            return (
                                                <Menu.Item>
                                                    <a style={{
                                                          height:'60px',
                                                          fontSize:'20px',
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
                                            height:'60px',
                                            fontSize:'20px',
                                            fontWeight: '900',
                                            color: '#ffffff',
                                            backgroundColor: 'blue',
                                            borderColor: 'blue',
                                            textAlign: 'center',
                                        }}
                                    >{myitem.name}</Button>
                                </Dropdown>
                            </div>
                        )
                    })}
                </div> */}
                <Row>
                    <Col span={4} 
                    style={{
                        height:'60px',
                        fontWeight: '900',
                        color: '#ffffff',
                        backgroundColor: 'blue',
                    }}
                    ></Col>
                    {this.state.head_menu_data.map((myitem) => {
                        return (
                            <Col span={2} style={{
                                height:'60px',
                                fontWeight: '900',
                                color: '#ffffff',
                                backgroundColor: 'blue',
                            }}
                            >
                                <Dropdown overlay={(
                                    <Menu style={{
                                        height:'60px',
                                        fontSize:'20px',
                                        fontWeight: '900',
                                        color: '#ffffff',
                                        backgroundColor: 'blue',
                                    }}
                                    >
                                        {myitem.myMenu.map((subitem) => {
                                            return (
                                                <Menu.Item>
                                                    <a style={{
                                                          height:'60px',
                                                          fontSize:'20px',
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
                                            height:'60px',
                                            fontSize:'20px',
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
                    <Col span={4} 
                    style={{
                        height:'60px',
                        fontWeight: '900',
                        color: '#ffffff',
                        backgroundColor: 'blue',
                    }}
                    ></Col>
                </Row>
                <br></br>
            </div>
        );
    }
}