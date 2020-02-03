import { Divider, Menu, Breadcrumb, Icon, Row, Col, Dropdown, Button, Tag, PageHeader } from 'antd';
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
                    <Col span={4} >
                        <div style={{ height: '150px', backgroundColor: '#43A2FC', color: 'white', fontSize: '10px' }}>
                        </div>
                    </Col>
                    <Col span={2} >
                    <div style={{ height: '150px', width: '100%', backgroundColor: '#43A2FC', color: 'white', fontSize: '10px' }}>
                            <div style={{ padding: '50px 5px 15px 20px' }}>
                                <img align={'center'} src={'http://www.ahrd.gov.cn/ahrdweb/images/jg.png'}></img>
                            </div>
                        </div>
                    </Col>
                    <Col span={10} >
                        <div style={{ height: '150px', width: '100%', backgroundColor: '#43A2FC', color: 'white', fontSize: '10px' }}>
                            <div style={{ padding: '70px 5px 15px 20px',textAlign:'left' }} >
                                友情链接：
                            <a style={{ backgroundColor: '#43A2FC', color: 'white', fontSize: '10px' }} href={'http://www.chzrd.gov.cn/'}>池州市人大</a>
                                <a style={{ backgroundColor: '#43A2FC', color: 'white', fontSize: '10px' }} href={'http://www.ahrd.gov.cn/ahrdweb/'} >安徽省人大</a>
                                &nbsp;&nbsp;&nbsp;
                            <a style={{ backgroundColor: '#43A2FC', color: 'white', fontSize: '10px' }} href={'http://www.npc.gov.cn/'} >全国人大</a>
                                &nbsp;&nbsp;&nbsp;
                                主办单位：青阳县人大常委会&nbsp;&nbsp;&nbsp;
                                地址：青阳县九华西路248号&nbsp;&nbsp;&nbsp;邮编：242800&nbsp;&nbsp;&nbsp;联系电话：0566-5021225
                            </div>
                        </div>
                    </Col>
                    <Col span={4} >
                        <div style={{ height: '150px', width: '100%', backgroundColor: '#43A2FC', color: 'white', fontSize: '10px' }}>
                            <div style={{ padding: '70px 5px 15px 20px' }}>
                                技术支持：中国电信股份有限公司池州分公司
                            </div>
                        </div>
                    </Col>
                    <Col span={4} style={{ backgroundColor: '#43A2FC', color: 'white', fontSize: '10px' }}>
                        <div style={{ height: '150px', backgroundColor: '#43A2FC', color: 'white', fontSize: '10px' }}>
                        </div>
                    </Col>
                </Row>
                {/* <Divider style={{color:'black',height:'1px',backgroundColor:'black'}} />
                <Row>
                    <Col span={4}>
                    </Col>
                    <Col span={16}>
                        友情链接：
                        <a color="red" href={'http://www.chzrd.gov.cn/'}>池州市人大</a>
                        &nbsp;&nbsp;&nbsp;
                        <a color="red" href={'http://www.ahrd.gov.cn/ahrdweb/'} >安徽省人大</a>
                        &nbsp;&nbsp;&nbsp;
                        <a color="red" href={'http://www.npc.gov.cn/'} >全国人大</a>
                    </Col>
                    <Col span={4}>
                    </Col>
                </Row>
                <Row>
                    <Col span={4}>
                    </Col>
                    <Col span={10} aling={'right'}>

                    </Col>
                    <Col span={6}>
                        技术支持：中国电信股份有限公司池州分公司
                    </Col>
                    <Col span={4}>

                    </Col>
                </Row> */}
            </div>
        );
    }
}