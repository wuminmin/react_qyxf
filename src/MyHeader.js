import { Carousel,Layout, Menu, Breadcrumb, Icon, Row, Col, Dropdown, Button, Tag, PageHeader } from 'antd';
// import Carousel from 'nuka-carousel';
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
            <a target="_blank" rel="noopener noreferrer" href="/mynews?ban_kuai=人大概括&lan_mu=人大概括&tittle=默认">
                人大概括
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/mynews?ban_kuai=人大概括&lan_mu=机构设置&tittle=默认">
                机构设置
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/mynews?ban_kuai=人大概括&lan_mu=制度建设&tittle=默认">
                制度建设
        </a>
        </Menu.Item>
    </Menu>
);
const menu3 = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/mynews?ban_kuai=新闻中心&lan_mu=人大要闻&tittle=默认">
                人大要闻
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/mynews?ban_kuai=新闻中心&lan_mu=通知公告&tittle=默认">
                通知公告
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/mynews?ban_kuai=新闻中心&lan_mu=领导讲话&tittle=默认">
                领导讲话
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/mynews?ban_kuai=新闻中心&lan_mu=工作动态&tittle=默认">
                工作动态
        </a>
        </Menu.Item>
    </Menu>
);
const menu4 = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/mynews?ban_kuai=依法履职&lan_mu=立法工作&tittle=默认">
                立法工作
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/mynews?ban_kuai=依法履职&lan_mu=决定决议&tittle=默认">
                决定决议
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/mynews?ban_kuai=依法履职&lan_mu=任职任免&tittle=默认">
                任职任免
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/mynews?ban_kuai=依法履职&lan_mu=监督工作&tittle=默认">
                监督工作
        </a>
        </Menu.Item>
    </Menu>
);
const menu5 = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/mynews?ban_kuai=代表工作&lan_mu=代表信息&tittle=默认">
                代表信息
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/mynews?ban_kuai=代表工作&lan_mu=代表风采&tittle=默认">
                代表风采
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/mynews?ban_kuai=代表工作&lan_mu=代表信箱&tittle=默认">
                代表信箱
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/mynews?ban_kuai=代表工作&lan_mu=议案建议&tittle=默认">
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


export default class MyHeader extends React.Component {
    state = {
        collapsed: false,
        myHTML: '',
        ban_kuai: '',
        lan_mu: '',
    };

    componentDidMount() {
    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        return (
            <div>
                <Row>
                <Carousel autoplay >
                    <img src="https://wx.wuminmin.top/wxyl/image?id=17" alt="" />
                    <img src="https://wx.wuminmin.top/wxyl/image?id=18" />
                    <img src="https://wx.wuminmin.top/wxyl/image?id=19" />
                    <img src="https://wx.wuminmin.top/wxyl/image?id=20" />
                    <img src="https://wx.wuminmin.top/wxyl/image?id=21" />
                    <img src="https://wx.wuminmin.top/wxyl/image?id=22" />
                    <img src="https://wx.wuminmin.top/wxyl/image?id=23" />
                    <img src="https://wx.wuminmin.top/wxyl/image?id=24" />
                </Carousel>
                </Row>
                <br></br>
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

            </div>
        );
    }
}