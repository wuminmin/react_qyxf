import { Input, Menu, Row, Col, Dropdown, Button } from 'antd';
import React from 'react'
import moment from 'moment';
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
            <div>
                <Row>
                    <Col xs={24} lg={0}>
                    <img
                            style={{ backgroundSize: 'cover', width: '100%', height: 'auto' }} responsive
                            src={index_header_jpg}>
                        </img>
                    </Col>
                    <Col xs={0} lg={24}>
                    <div style={{ width: '100%' }}>
                        <img
                            style={{ backgroundSize: 'cover', width: '100%', height: 'auto' }} responsive
                            src={index_header_jpg}>
                        </img>
                        <p 
                        xs='24'
                        style={{
                            color: '#ffffff',
                            position: 'absolute',
                            height: 'auto',
                            width: '20%',
                            top: '1%',
                            textShadow: '1px 1px #000000,-1px -1px #000000,1px -1px #000000,-1px 1px #000000',
                            left: '1%'
                        }}>
                            {moment().format('YYYY年MM月DD日 hh时mm分钟ss秒')}
                        </p>
                        <p 
                        xs={24}
                        style={{
                            color: '#ffffff',
                            position: 'absolute',
                            height: 'auto',
                            width: '30%',
                            top: '1%',
                            textShadow: '1px 1px #000000,-1px -1px #000000,1px -1px #000000,-1px 1px #000000',
                            left: '30%'
                        }}>{this.state.tian_qi} </p>
                        <Search
                            style={{
                                color: '#ffffff',
                                position: 'absolute',
                                height: 'auto',
                                width: '29%',
                                top: '1%',
                                textShadow: '#000000',
                                left: '70%'
                            }}
                            placeholder="热门文章"
                            onSearch={value => {
                                console.log(value);
                                window.location.assign('/my_search?tittle='+value);
                            }}
                            enterButton
                        />
                        {/* <img style={{
                            position: 'absolute',
                            height: 'auto',
                            width: '12%',
                            top: '21%',
                            left: '14%',
                        }} src={img_guohui_png} /> */}
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} xs={0}
                        style={{
                            height: '60px',
                            fontWeight: '900',
                            color: '#ffffff',
                            backgroundColor: 'red',
                        }}
                    ></Col>
                    {this.state.head_menu_data.map((myitem) => {
                        return (
                            <Col
                                key={myitem.name}
                                lg={2} 
                                xs={6}
                                style={{
                                    height: '60px',
                                    fontWeight: '900',
                                    color: '#ffffff',
                                    backgroundColor: 'red',
                                }}
                            >
                                <Dropdown overlay={(
                                    <Menu style={{
                                        height: '60px',
                                        fontSize: '20px',
                                        fontWeight: '900',
                                        color: '#ffffff',
                                        backgroundColor: 'red',
                                    }}
                                    >
                                        {myitem.myMenu.map((subitem) => {
                                            return (
                                                <Menu.Item
                                                    key={subitem.subname}>
                                                    <a
                                                        style={{
                                                            height: '60px',
                                                            fontSize: '20px',
                                                            fontWeight: '900',
                                                            color: '#ffffff',
                                                            backgroundColor: 'red',
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
                                            height: '60px',
                                            fontSize: '20px',
                                            fontWeight: '900',
                                            color: '#ffffff',
                                            backgroundColor: 'red',
                                            borderColor: 'blue',
                                            textAlign: 'center',
                                        }}
                                    >{myitem.name}</Button>
                                </Dropdown>
                            </Col>
                        )
                    })}
                    <Col lg={4}
                    xs={0}
                        style={{
                            height: '60px',
                            fontWeight: '900',
                            color: '#ffffff',
                            backgroundColor: 'red',
                        }}
                    ></Col>
                </Row>
                <br></br>
            </div>
        );
    }
}