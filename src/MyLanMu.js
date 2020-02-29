import { Divider, Menu, Breadcrumb, Icon, Row, Col, Dropdown, Button, Tag, PageHeader } from 'antd';
// import Carousel from 'nuka-carousel';
import React from 'react'
import Qs from 'qs'
import axios from 'axios'
import 'antd/dist/antd.css';
import './index.css';
import MyHeader from './MyHeader'
import MyFooter from './MyFooter'
import AppGlobal from './AppGlobal';
const { SubMenu } = Menu;

class MyMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            菜单列表: [],
            lan_mu_key: this.props.lan_mu_key,
            ban_kuai: this.props.ban_kuai,
            my_tittle: this.props.my_tittle,
            myHTML_tittle: '',
            myHTML_article: '',
            myHTML_time: '',
            myHTML_count:0,
        }
        console.log('lan_mu_key'.lan_mu_key)
    }

    componentDidMount() {
        let self = this;
        let data = {
            "ban_kuai": this.props.ban_kuai
        }
        axios({
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'post',
            url: AppGlobal.url.rd_xia_zai_tabs_by_ban_kuai,
            data: Qs.stringify(data)
        }).then(function (response) {
            console.log(response)
            self.setState({
                菜单列表: response.data
            });
            response.data.map((item) =>{
                console.log(item.table_key)
                console.log(self.state.lan_mu_key)
                if(item.table_key === Number(self.state.lan_mu_key)){
                    self.setState({
                        lan_mu:item.table_name
                    })
                }
            })
        })
            .catch(function (error) {
            });

        let data2 = {
            "ban_kuai": this.props.ban_kuai,
            "lan_mu": this.props.lan_mu,
            "tittle": this.props.my_tittle
        }
        axios({
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'post',
            url: 'https://wx.wuminmin.top/qyrd/rd_xia_zai_by_tittle',
            data: Qs.stringify(data2)
        }).then(function (response) {
            self.setState({
                myHTML_article: response.data
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
            url: 'https://wx.wuminmin.top/qyrd/rd_xia_zai_time_by_tittle',
            data: Qs.stringify(data2)
        }).then(function (response) {
            self.setState({
                myHTML_tittle: response.data['tittle'],
                myHTML_time: response.data['my_time'],
                myHTML_count:response.data['count'],
            });
        })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleClick = e => {
        let self = this;
        let data = {
            "ban_kuai": this.props.ban_kuai,
            "lan_mu": this.props.lan_mu,
            "tittle": e.key
        }
        axios({
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'post',
            url: 'https://wx.wuminmin.top/qyrd/rd_xia_zai_by_tittle',
            data: Qs.stringify(data)
        }).then(function (response) {
            self.setState({
                myHTML_article: response.data
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
            url: 'https://wx.wuminmin.top/qyrd/rd_xia_zai_time_by_tittle',
            data: Qs.stringify(data)
        }).then(function (response) {
            self.setState({
                myHTML_tittle: response.data['tittle'],
                myHTML_time: response.data['my_time']
            });
        })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        return (
            <div>
            <Row>
                <Col span={24}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Col>
            </Row>
            <Row>
                <Col span={24}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Col>
            </Row>
            <Row>
                <Col span={4}></Col>
                <Col span={3}>
                    <PageHeader
                        style={{
                            border: '1px solid rgb(235, 237, 240)',
                        }}
                        onBack={() => { window.location = '/' }}
                        title={this.state.ban_kuai}
                        subTitle={this.state.lan_mu}
                    />,
                    <Menu
                        onClick={this.handleClick}
                        style={{ width: '100%' }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                    >
                        {
                            // this.state.菜单列表.map((item) => {
                            //     return (
                            //         <SubMenu item={item} key={item.table_name} title={
                            //             <span>
                            //                 <Icon type="setting" />
                            //                 <span
                            //                     onClick = { (e) => {
                            //                         console.log(e.target);
                                                    
                            //                     }}
                            //                     value = {item.table_name}
                            //                 >{item.table_name}</span>
                            //             </span>
                            //         } >
                            //             {/* {
                            //                 item.list_data.map((item2) => {
                            //                     return (
                            //                         <Menu.Item key={item2.key}>{item2.key}</Menu.Item>
                            //                     )
                            //                 })
                            //             } */}
                            //         </SubMenu>
                            //     )
                            // })
                        }
                    </Menu>
                </Col>
                <Col span={1}></Col>
                <Col span={12}>
                    
                    <h1 align={'center'}>{this.state.myHTML_tittle}</h1>
                    <h4 align={'center'}>{this.state.myHTML_time}&nbsp;&nbsp;&nbsp;&nbsp;浏览次数：{this.state.myHTML_count} </h4>
                    <Divider />
                    <div style={{width:'100%'}} dangerouslySetInnerHTML={{ __html: this.state.myHTML_article }} />
                </Col>
                <Col span={4}></Col>
            </Row>
            </div>
        )
    }
}

export default class MyLanMu extends React.Component {
    state = {
        collapsed: false,
        myHTML: '',
        ban_kuai: '',
        lan_mu: '',
        my_tittle: '',
    };

    componentDidMount() {
        console.log(this.props)
        const search = this.props.location.search;
        const params = new URLSearchParams(search);
        console.log(params.get('ban_kuai'))
        console.log(params.get('lan_mu_key'))
        this.setState({
            ban_kuai: params.get('ban_kuai'),
            lan_mu_key: params.get('lan_mu_key'),
            my_tittle: params.get('tittle'),
        });
    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const search = this.props.location.search;
        const params = new URLSearchParams(search);

        return (
            <div>
                <MyHeader></MyHeader>
                {/* <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                    </Col>
                    <Col span={2}></Col>
                </Row> */}
                <MyMenu ban_kuai={params.get('ban_kuai')} lan_mu_key={params.get('lan_mu_key')} my_tittle={params.get('tittle')}></MyMenu>
                <Divider />
                <MyFooter></MyFooter>


            </div>
        );
    }
}