import { Layout, Menu, Breadcrumb, Icon, Row, Col, Dropdown, Button } from 'antd';
import Carousel from 'nuka-carousel';
import React from 'react'
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



export default class MyNews extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    handleClick = e => {
        console.log('click ', e);
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
                <div>
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
                                <Button>一府两院</Button>
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
                            <Menu
                                onClick={this.handleClick}
                                style={{ width: 256 }}
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                mode="inline"
                            >
                                <SubMenu
                                    key="sub4"
                                    title={
                                        <span>
                                            <Icon type="setting" />
                                            <span>2019年11月</span>
                                        </span>
                                    }
                                >
                                    <Menu.Item key="9">Option 9</Menu.Item>
                                    <Menu.Item key="10">Option 10</Menu.Item>
                                    <Menu.Item key="11">Option 11</Menu.Item>
                                    <Menu.Item key="12">Option 12</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Col>
                        <Col span={20}>
                            <div></div>
                        </Col>

                    </Row>
        
                </div>
              
            </div>
        );
    }
}