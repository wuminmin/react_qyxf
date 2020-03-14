import { Divider, Menu, Table, Icon, Row, Col, Dropdown, Button, Tag, PageHeader } from 'antd';
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
            myHTML_count: 0,
            table_columns: [
                {
                    title: '新闻标题',
                    dataIndex: 'name',
                    key: 'name',
                    render: text => <a target={'_blank'} href={text.地址}>{text.标题}</a>,
                },
                {
                    title: '发布时间',
                    dataIndex: 'age',
                    key: 'age',
                },
                {
                    title: '浏览次数',
                    dataIndex: 'address',
                    key: 'address',
                },
            ],
            tablei_data: [
                {
                    key: '1',
                    name: { 标题: '杨晓兵到新河镇杨梅桥村调研扶贫工作', 地址: 'mynews?ban_kuai=新闻中心&lan_mu=人大要闻&tittle=杨晓兵到新河镇杨梅桥村调研扶贫工作' },
                    age: '2020-03-12 10:59:52',
                    address: '22',
                    tags: ['nice', 'developer'],
                },
                {
                    key: '2',
                    name: { 标题: '杨晓兵到新河镇杨梅桥村调研扶贫工作', 地址: 'mynews?ban_kuai=新闻中心&lan_mu=人大要闻&tittle=杨晓兵到新河镇杨梅桥村调研扶贫工作' },
                    age: '2020-03-12 10:59:52',
                    address: '22',
                    tags: ['nice', 'developer'],
                },
                {
                    key: '3',
                    name: { 标题: '杨晓兵到新河镇杨梅桥村调研扶贫工作', 地址: 'mynews?ban_kuai=新闻中心&lan_mu=人大要闻&tittle=杨晓兵到新河镇杨梅桥村调研扶贫工作' },
                    age: '2020-03-12 10:59:52',
                    address: '22',
                    tags: ['nice', 'developer'],
                },
                {
                    key: '4',
                    name: { 标题: '杨晓兵到新河镇杨梅桥村调研扶贫工作', 地址: 'mynews?ban_kuai=新闻中心&lan_mu=人大要闻&tittle=杨晓兵到新河镇杨梅桥村调研扶贫工作' },
                    age: '2020-03-12 10:59:52',
                    address: '22',
                    tags: ['nice', 'developer'],
                },
                {
                    key: '5',
                    name: { 标题: '杨晓兵到新河镇杨梅桥村调研扶贫工作', 地址: 'mynews?ban_kuai=新闻中心&lan_mu=人大要闻&tittle=杨晓兵到新河镇杨梅桥村调研扶贫工作' },
                    age: '2020-03-12 10:59:52',
                    address: '22',
                    tags: ['nice', 'developer'],
                },
                {
                    key: '1',
                    name: { 标题: '杨晓兵到新河镇杨梅桥村调研扶贫工作', 地址: 'mynews?ban_kuai=新闻中心&lan_mu=人大要闻&tittle=杨晓兵到新河镇杨梅桥村调研扶贫工作' },
                    age: '2020-03-12 10:59:52',
                    address: '22',
                    tags: ['nice', 'developer'],
                },
                {
                    key: '6',
                    name: { 标题: '杨晓兵到新河镇杨梅桥村调研扶贫工作', 地址: 'mynews?ban_kuai=新闻中心&lan_mu=人大要闻&tittle=杨晓兵到新河镇杨梅桥村调研扶贫工作' },
                    age: '2020-03-12 10:59:52',
                    address: '22',
                    tags: ['nice', 'developer'],
                },
                {
                    key: '1',
                    name: { 标题: '杨晓兵到新河镇杨梅桥村调研扶贫工作', 地址: 'mynews?ban_kuai=新闻中心&lan_mu=人大要闻&tittle=杨晓兵到新河镇杨梅桥村调研扶贫工作' },
                    age: '2020-03-12 10:59:52',
                    address: '22',
                    tags: ['nice', 'developer'],
                },
                {
                    key: '7',
                    name: { 标题: '杨晓兵到新河镇杨梅桥村调研扶贫工作', 地址: 'mynews?ban_kuai=新闻中心&lan_mu=人大要闻&tittle=杨晓兵到新河镇杨梅桥村调研扶贫工作' },
                    age: '2020-03-12 10:59:52',
                    address: '22',
                    tags: ['nice', 'developer'],
                },
                {
                    key: '8',
                    name: { 标题: '杨晓兵到新河镇杨梅桥村调研扶贫工作', 地址: 'mynews?ban_kuai=新闻中心&lan_mu=人大要闻&tittle=杨晓兵到新河镇杨梅桥村调研扶贫工作' },
                    age: '2020-03-12 10:59:52',
                    address: '22',
                    tags: ['nice', 'developer'],
                },
                {
                    key: '9',
                    name: { 标题: '杨晓兵到新河镇杨梅桥村调研扶贫工作', 地址: 'mynews?ban_kuai=新闻中心&lan_mu=人大要闻&tittle=杨晓兵到新河镇杨梅桥村调研扶贫工作' },
                    age: '2020-03-12 10:59:52',
                    address: '22',
                    tags: ['nice', 'developer'],
                },
            ],
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
            response.data.map((item) => {
                console.log(item.table_key)
                console.log(self.state.lan_mu_key)
                if (item.table_key === Number(self.state.lan_mu_key)) {
                    self.setState({
                        lan_mu: item.table_name
                    })
                }
            })

        }).catch(function (error) {
        });

        let data2 = {
            "ban_kuai": this.props.ban_kuai,
            "lan_mu_key": this.props.lan_mu_key,
        }
        axios({
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'post',
            url: 'https://wx.wuminmin.top/qyrd/get_tablei_data_by_lan_mu_key',
            data: Qs.stringify(data2)
        }).then(function (response) {
            console.log('get_tablei_data_by_lanmu---------------',response);
            self.setState({
                tablei_data: response.data.res_list
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
                            onClick={ e => {
                                console.log(e.item.props.children);
                                let self = this;
                                let data2 = {
                                    "ban_kuai": self.props.ban_kuai,
                                    "lan_mu": e.item.props.children,
                                };
                                axios({
                                    headers: {
                                        'Content-Type': 'application/x-www-form-urlencoded'
                                    },
                                    method: 'post',
                                    url: 'https://wx.wuminmin.top/qyrd/get_tablei_data_by_lanmu',
                                    data: Qs.stringify(data2)
                                }).then(function (response) {
                                    console.log('get_tablei_data_by_lanmu---------------',response);
                                    self.setState({
                                        tablei_data: response.data.res_list
                                    });
                                })
                                    .catch(function (error) {
                                        console.log(error);
                                    });
                            }}
                            style={{ width: '100%' }}
                            defaultSelectedKeys={[this.state.lan_mu_key]}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                        >
                            {
                                this.state.菜单列表.map((item) => {
                                    return (
                                        <Menu.Item
                                            key={item.table_key}
                                        >
                                            {item.table_name}
                                        </Menu.Item>
                                    )
                                })
                            }
                        </Menu>
                    </Col>
                    <Col span={1}></Col>
                    <Col span={12}>
                        <Table columns={this.state.table_columns} dataSource={this.state.tablei_data} />
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