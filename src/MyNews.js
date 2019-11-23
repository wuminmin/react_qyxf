import { Layout, Menu, Breadcrumb, Icon, Row, Col, Dropdown, Button, Tag, PageHeader } from 'antd';
import Carousel from 'nuka-carousel';
import React from 'react'
import Qs from 'qs'
import axios from 'axios'
import 'antd/dist/antd.css';
import './index.css';
const { SubMenu } = Menu;
const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/">
                首页
        </a>
        </Menu.Item>
    </Menu>
);
const menu2 = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/mynews?ban_kuai=人大概括&lan_mu=人大概括">
                人大概括
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/mynews?ban_kuai=人大概括&lan_mu=机构设置">
                机构设置
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/mynews?ban_kuai=人大概括&lan_mu=制度建设">
                制度建设
        </a>
        </Menu.Item>
    </Menu>
);
const menu3 = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/mynews?ban_kuai=新闻中心&lan_mu=人大要闻">
                人大要闻
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/mynews?ban_kuai=新闻中心&lan_mu=通知公告">
                通知公告
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/mynews?ban_kuai=新闻中心&lan_mu=领导讲话">
                领导讲话
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/mynews?ban_kuai=新闻中心&lan_mu=工作动态">
                工作动态
        </a>
        </Menu.Item>
    </Menu>
);
const menu4 = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/mynews?ban_kuai=依法履职&lan_mu=立法工作">
                立法工作
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/mynews?ban_kuai=依法履职&lan_mu=决定决议">
                决定决议
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/mynews?ban_kuai=依法履职&lan_mu=任职任免">
                任职任免
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/mynews?ban_kuai=依法履职&lan_mu=监督工作">
                监督工作
        </a>
        </Menu.Item>
    </Menu>
);
const menu5 = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/mynews?ban_kuai=代表工作&lan_mu=代表信息">
                代表信息
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/mynews?ban_kuai=代表工作&lan_mu=代表风采">
                代表风采
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/mynews?ban_kuai=代表工作&lan_mu=代表信箱">
                代表信箱
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/mynews?ban_kuai=代表工作&lan_mu=议案建议">
                议案建议
        </a>
        </Menu.Item>
    </Menu>
);
const menu6 = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.ahqy.gov.cn/">
                人民政府
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.jjw.gov.cn/">
                监察委员会
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://czqyfy.chinacourt.gov.cn/index.shtml">
                人民法院
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.ahqingyang.jcy.gov.cn/">
                人民检察院
        </a>
        </Menu.Item>
    </Menu>
);
const menu7 = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/">
                蓉城镇
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/">
                庙前镇
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/">
                杜村乡
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/">
                新河镇
        </a>
        </Menu.Item>
    </Menu>
);

class MyMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            菜单列表: [],
            lan_mu: this.props.lan_mu,
            ban_kuai: this.props.ban_kuai,
            myHTML_tittle: '',
            myHTML_article: '',
            myHTML_time: '',
        }
    }

    componentDidMount() {
        let self = this;
        let data = {
            "type": this.props.lan_mu
        }
        axios({
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'post',
            url: 'https://wx.wuminmin.top/qyrd/rd_xia_zai_by_lan_mu',
            data: Qs.stringify(data)
        }).then(function (response) {
            console.log(response)
            self.setState({
                菜单列表: response.data
            });
        })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleClick = e => {
        console.log('click ', e.key);
        let self = this;
        let data = {
            "tittle": e.key
        }
        self.setState({
            myHTML_tittle: e.key
        });
        axios({
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'post',
            url: 'https://wx.wuminmin.top/qyrd/rd_xia_zai_by_tittle',
            data: Qs.stringify(data)
        }).then(function (response) {
            console.log(response)
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
            console.log(response)
            self.setState({
                myHTML_time: response.data
            });
        })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        return (
            <Row>
                <Col span={4}>
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
                        style={{ width: 256 }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                    >
                        {
                            this.state.菜单列表.map((item) => {
                                return (
                                    <SubMenu item={item} key={item.月份} title={
                                        <span>
                                            <Icon type="setting" />
                                            <span>{item.月份}</span>
                                        </span>
                                    } >
                                        {
                                            item.新闻标题列表.map((item2) => {
                                                return (
                                                    <Menu.Item key={item2.标题}>{item2.标题}</Menu.Item>
                                                )
                                            })
                                        }
                                    </SubMenu>
                                )
                            })
                        }
                    </Menu>
                </Col>
                <Col span={2}></Col>
                <Col span={18}>
                    <h1 align={'center'}>{this.state.myHTML_tittle}</h1>
                    <h4 align={'center'}>{this.state.myHTML_time}</h4>
                    <div dangerouslySetInnerHTML={{ __html: this.state.myHTML_article }} />
                </Col>
            </Row>

        )
    }
}

export default class MyNews extends React.Component {
    state = {
        collapsed: false,
        myHTML: '',
        ban_kuai: '',
        lan_mu: '',
    };

    componentDidMount() {
        console.log(this.props)
        const search = this.props.location.search;
        const params = new URLSearchParams(search);
        console.log(params.get('ban_kuai'))
        console.log(params.get('lan_mu'))
        this.setState({
            ban_kuai: params.get('ban_kuai'),
            lan_mu: params.get('lan_mu'),
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
                <Carousel>
                    <img src="https://wx.wuminmin.top/wxyl/image?id=17" alt="" />
                    <img src="https://wx.wuminmin.top/wxyl/image?id=18" />
                    <img src="https://wx.wuminmin.top/wxyl/image?id=19" />
                    <img src="https://wx.wuminmin.top/wxyl/image?id=20" />
                    <img src="https://wx.wuminmin.top/wxyl/image?id=21" />
                    <img src="https://wx.wuminmin.top/wxyl/image?id=22" />
                    <img src="https://wx.wuminmin.top/wxyl/image?id=23" />
                    <img src="https://wx.wuminmin.top/wxyl/image?id=24" />
                </Carousel>
                <Row>
                    <Col span={3}>
                    </Col>
                    <Col span={3}>
                        <Dropdown overlay={menu} placement="bottomCenter">
                            <Button>首页</Button>
                        </Dropdown>
                    </Col>
                    <Col span={3}>
                        <Dropdown overlay={menu2} placement="bottomCenter">
                            <Button>人大概括</Button>
                        </Dropdown>
                    </Col>
                    <Col span={3}>
                        <Dropdown overlay={menu3} placement="bottomCenter">
                            <Button>新闻中心</Button>
                        </Dropdown>
                    </Col>
                    <Col span={3}>
                        <Dropdown overlay={menu4} placement="bottomCenter">
                            <Button>依法履职</Button>
                        </Dropdown>
                    </Col>
                    <Col span={3}>
                        <Dropdown overlay={menu5} placement="bottomCenter">
                            <Button>代表工作</Button>
                        </Dropdown>
                    </Col>
                    <Col span={3}>
                        <Dropdown overlay={menu6} placement="bottomCenter">
                            <Button>府委两院</Button>
                        </Dropdown>
                    </Col>
                    <Col span={3}>
                        <Dropdown overlay={menu7} placement="bottomCenter">
                            <Button>乡镇人大</Button>
                        </Dropdown>
                    </Col>
                </Row>
                <MyMenu ban_kuai={params.get('ban_kuai')} lan_mu={params.get('lan_mu')}></MyMenu>

            </div>
        );
    }
}