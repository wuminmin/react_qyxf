import { Divider, Menu, Breadcrumb, Icon, Row, Col, Dropdown, Button, Tag, PageHeader } from 'antd';
// import Carousel from 'nuka-carousel';
import React from 'react'
import Qs from 'qs'
import axios from 'axios'
import 'antd/dist/antd.css';
import './index.css';
import MyHeader from './MyHeader'
import MyFooter from './MyFooter'
const { SubMenu } = Menu;

class MyMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            菜单列表: [],
            lan_mu: this.props.lan_mu,
            ban_kuai: this.props.ban_kuai,
            my_tittle: this.props.my_tittle,
            myHTML_tittle: '',
            myHTML_article: '',
            myHTML_time: '',
            myHTML_count:0,
        }
    }

    componentDidMount() {
        let self = this;
        // let data = {
        //     "type": this.props.lan_mu
        // }
        // axios({
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     },
        //     method: 'post',
        //     url: 'http://223.247.185.47:20001/qyrd/rd_xia_zai_by_lan_mu',
        //     data: Qs.stringify(data)
        // }).then(function (response) {
        //     console.log(response)
        //     self.setState({
        //         菜单列表: response.data
        //     });
        // })
        //     .catch(function (error) {
        //         console.log(error);
        //     });

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
            url: 'http://223.247.185.47:20001/qyrd/rd_xia_zai_by_tittle',
            data: Qs.stringify(data2)
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
            url: 'http://223.247.185.47:20001/qyrd/rd_xia_zai_time_by_tittle',
            data: Qs.stringify(data2)
        }).then(function (response) {
            console.log(response)
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
        console.log('click ', e.key);
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
            url: 'http://223.247.185.47:20001/qyrd/rd_xia_zai_by_tittle',
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
            url: 'http://223.247.185.47:20001/qyrd/rd_xia_zai_time_by_tittle',
            data: Qs.stringify(data)
        }).then(function (response) {
            console.log(response)
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
                <Col lg={24} xs={24}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Col>
            </Row>
            <Row>
                <Col lg={24} xs={24}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Col>
            </Row>
            <Row>
                <Col lg={4} xs={1}></Col>
                <Col lg={16} xs={22}>
                    <h1 align={'center'}>{this.state.myHTML_tittle}</h1>
                    <h4 align={'center'}>{this.state.myHTML_time}&nbsp;&nbsp;&nbsp;&nbsp;浏览次数：{this.state.myHTML_count} </h4>
                    <Divider />
                    <div style={{width:'100%'}} dangerouslySetInnerHTML={{ __html: this.state.myHTML_article }} />
                </Col>
                <Col lg={4} xs={1}></Col>
            </Row>
            </div>
        )
    }
}

export default class MyNews extends React.Component {
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
        console.log(params.get('lan_mu'))
        this.setState({
            ban_kuai: params.get('ban_kuai'),
            lan_mu: params.get('lan_mu'),
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
            <div   >
                <MyHeader></MyHeader>
                {/* <Row>
                    <Col lg={2}></Col>
                    <Col lg={20}>
                    </Col>
                    <Col lg={2}></Col>
                </Row> */}
                <MyMenu ban_kuai={params.get('ban_kuai')} lan_mu={params.get('lan_mu')} my_tittle={params.get('tittle')}></MyMenu>
                <Divider />
                <MyFooter></MyFooter>


            </div>
        );
    }
}