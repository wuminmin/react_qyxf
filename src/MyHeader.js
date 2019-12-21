import { Carousel, Input, Layout, Menu, Breadcrumb, Icon, Row, Col, Dropdown, Button, Tag, PageHeader } from 'antd';
// import Carousel from 'nuka-carousel';
import React from 'react'
import moment from 'moment';
import Qs from 'qs'
import axios from 'axios'
import 'antd/dist/antd.css';
import './index.css';
import AppGlobal from './AppGlobal';
const { Search } = Input;
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
            <a target="_blank" rel="noopener noreferrer" href="/mynews?ban_kuai=人大概况&lan_mu=人大简介&tittle=默认">
                人大简介
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/mynews?ban_kuai=人大概况&lan_mu=组织机构&tittle=默认">
                组织机构
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/mynews?ban_kuai=人大概况&lan_mu=组成人员&tittle=默认">
                组成人员
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/mynews?ban_kuai=人大概况&lan_mu=委室职责&tittle=默认">
                委室职责
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
            <a target="_blank" rel="noopener noreferrer" href="/mynews?ban_kuai=新闻中心&lan_mu=工作动态&tittle=默认">
                工作动态
        </a>
        </Menu.Item>
    </Menu>
);
const menu4 = (
    <Menu>
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
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/mynews?ban_kuai=代表工作&lan_mu=法律法规&tittle=默认">
                法律法规
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
            <a target="_blank" rel="noopener noreferrer" href={AppGlobal.url.蓉城镇}>
                蓉城镇
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href={AppGlobal.url.朱备镇}>
            朱备镇
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href={AppGlobal.url.杨田镇}>
            杨田镇
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href={AppGlobal.url.陵阳镇}>
            陵阳镇
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href={AppGlobal.url.新河镇}>
                新河镇
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href={AppGlobal.url.木镇镇}>
            木镇镇
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href={AppGlobal.url.丁桥镇}>
            丁桥镇
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href={AppGlobal.url.乔木乡}>
            乔木乡
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href={AppGlobal.url.酉华镇}>
            酉华镇
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href={AppGlobal.url.庙前镇}>
            庙前镇
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href={AppGlobal.url.杜村乡}>
                杜村乡
        </a>
        </Menu.Item>
    </Menu>
);

const menu8 = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href={AppGlobal.url.人民代表大会会议}>
                人民代表大会会议
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href={AppGlobal.url.常委会会议}>
                常委会会议
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href={AppGlobal.url.主任会议}>
                主任会议
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href={AppGlobal.url.代表联系群众}>
                代表联系群众
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
        tian_qi: '',
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
    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        var background = { backgroundSize: 'cover', width: '100%' };
        var textStyle = {
            position: 'absolute',
            top: '30%',
            left: '20%',
            color: 'red',
            fontSize: '100px',
        };

        const divStyle = {
            backgroundImage: 'url(' + "https://wx.wuminmin.top/wxyl/image?id=17" + ')',
            backgroundrepeat: 'no-repeat',
            backgroundattachment: 'fixed',
            backgroundsize: 'cover',
        };

        return (
            <div>
                <Row>
                    <Carousel autoplay >
                        <img src={AppGlobal.url.首页滚动图片1} alt="青阳人大" />
                        <img src={AppGlobal.url.首页滚动图片2} alt="青阳人大" />
                        <img src={AppGlobal.url.首页滚动图片3} alt="青阳人大" />
                        <img src={AppGlobal.url.首页滚动图片4} alt="青阳人大" />
                        <img src={AppGlobal.url.首页滚动图片5} alt="青阳人大" />
                    </Carousel>
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
                    <Col span={3}>
                        <Dropdown overlay={menu} placement="bottomCenter">
                            <Button>首页</Button>
                        </Dropdown>
                    </Col>
                    <Col span={3}>
                        <Dropdown overlay={menu3} placement="bottomCenter">
                            <Button>新闻中心</Button>
                        </Dropdown>
                    </Col>
                    <Col span={3}>
                        <Dropdown overlay={menu2} placement="bottomCenter">
                            <Button>人大概况</Button>
                        </Dropdown>
                    </Col>
                    <Col span={3}>
                        <Dropdown overlay={menu8} placement="bottomCenter">
                            <Button>会议之窗</Button>
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
                            <Button>一府一委两院</Button>
                        </Dropdown>
                    </Col>
                    <Col span={3}>
                        <Dropdown overlay={menu7} placement="bottomCenter">
                            <Button>乡镇人大</Button>
                        </Dropdown>
                    </Col>
                </Row>

                <br></br>
            </div>
        );
    }
}