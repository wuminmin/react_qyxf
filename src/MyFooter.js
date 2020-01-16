import { Layout, Menu, Breadcrumb, Icon, Row, Col, Dropdown, Button, Tag, PageHeader } from 'antd';
import Carousel from 'nuka-carousel';
import React from 'react'
import Qs from 'qs'
import axios from 'axios'
import 'antd/dist/antd.css';
import './index.css';


export default class MyFooter extends React.Component {
    state = {
    };

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <br></br>
                <Row>

                    <Col span={2}>

                    </Col>
                    <Col span={20}>
                        友情链接：
                    <Tag color="red" href={'http://www.chzrd.gov.cn/'}>池州市人大</Tag>
                        <Tag color="red" href={'http://www.ahrd.gov.cn/ahrdweb/'} >安徽省人大</Tag>
                    </Col>
                    <Col span={2}>

                    </Col>
                </Row>
                <Row>
                    <Col span={8}>

                    </Col>
                    <Col span={8} aling={'right'}>
                        青阳县人大常委会
                        {/* </Col>
                    <Col span={2}> */}
                        <img align={'center'} src={'http://www.ahrd.gov.cn/ahrdweb/images/jg.png'}></img>
                    </Col>
                    <Col span={8}>

                    </Col>
                </Row>

            </div>
        );
    }
}