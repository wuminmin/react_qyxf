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
            tittle: this.props.tittle,
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
            ],
        }
    }

    componentDidMount() {
        let self = this;
        let data2 = {
            "tittle": this.props.tittle,
        }
        axios({
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'post',
            url: 'http://223.247.193.223:18005/qyrd/get_tablei_data_by_search',
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
                    <Col span={16}>
                        <Table columns={this.state.table_columns} dataSource={this.state.tablei_data} />
                    </Col>
                    <Col span={4}></Col>
                </Row>
            </div>
        )
    }
}

export default class MySearch extends React.Component {
    state = {
        collapsed: false,
        myHTML: '',
        tittle: '',
    };

    componentDidMount() {
        console.log(this.props)
        const search = this.props.location.search;
        const params = new URLSearchParams(search);
        this.setState({
            tittle: params.get('tittle'),
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
                <MyMenu tittle={params.get('tittle')}></MyMenu>
                <Divider />
                <MyFooter></MyFooter>
            </div>
        );
    }
}