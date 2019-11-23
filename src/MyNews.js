import { Layout, Menu, Breadcrumb, Icon, Row, Col, Dropdown, Button } from 'antd';
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
            <a target="_blank" rel="noopener noreferrer" href="/">
                人大概括
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/">
                机构设置
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/">
                制度建设
        </a>
        </Menu.Item>
    </Menu>
);
const menu3 = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/">
                人大要闻
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/">
                通知公告
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/">
                领导讲话
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/">
                工作动态
        </a>
        </Menu.Item>
    </Menu>
);
const menu4 = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/">
                立法工作
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/">
                决定决议
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/">
                任职任免
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/">
                监督工作
        </a>
        </Menu.Item>
    </Menu>
);
const menu5 = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/">
                代表信息
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/">
                代表风采
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/">
                代表信箱
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/">
                议案建议
        </a>
        </Menu.Item>
    </Menu>
);
const menu6 = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/">
                人民政府
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/">
                监察委员会
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/">
                人民法院
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/">
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
            菜单列表: [
                {
                    '月份': '2019年12月',
                    '新闻标题列表': [{ '标题': '测试' }, { '标题': '测试2' }, { '标题': '测试3' }]
                },
                {
                    '月份': '2019年11月',
                    '新闻标题列表': [{ '标题': 'aaaaaa' }, { '标题': 'bbbbbbb' }, { '标题': 'ccccccc' }]
                },
                {
                    '月份': '2019年10月',
                    '新闻标题列表': [{ '标题': '4444444' }, { '标题': '55555555' }, { '标题': '66666666' }]
                }
            ],
            栏目名称: '人大要闻',
        }
    }
    handleClick = e => {
        console.log('click ', e.key);
        let self = this;
        let data = {
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
            console.log(response)
            self.setState({
                首页新闻标题: response.data.tittle,
                首页新闻内容: response.data.article
            });
        })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        return (
            <div>
                <label>{this.state.栏目名称}</label>
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
            </div>
        )
    }
}

export default class MyNews extends React.Component {
    state = {
        collapsed: false,
        myHTML: '',
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
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
                <Row>
                    <Col span={4}>
                        <MyMenu></MyMenu>
                    </Col>
                    <Col span={20}>
                        <div dangerouslySetInnerHTML={{ __html: this.state.myHTML }} />
                    </Col>

                </Row>


            </div>
        );
    }
}