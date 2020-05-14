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
                <Row>
                    <Col lg={4} xs={0} >
                        <div style={{ height: '150px', backgroundColor: 'red', color: 'white', fontSize: '10px' }}>
                        </div>
                    </Col>
                    <Col lg={2} xs={4} >
                        <div style={{ height: '150px', width: '100%', backgroundColor: 'red', color: 'white', fontSize: '10px' }}>
                            <div style={{ padding: '50px 5px 15px 20px' }}>
                                <img align={'center'} src={'http://www.ahrd.gov.cn/ahrdweb/images/jg.png'}></img>
                            </div>
                        </div>
                    </Col>
                    <Col lg={10} xs={20} >
                        <div style={{ height: '150px', width: '100%', backgroundColor: 'red', color: 'white', fontSize: '10px' }}>
                            <div style={{ padding: '50px 5px 15px 20px', textAlign: 'left' }} >
                                <p style={{fontSize: '16px'}}>
                                    友情链接：
                                    <a target={'_blank'} style={{ backgroundColor: 'red', color: 'white', fontSize: '16px' }} href={'http://www.npc.gov.cn/'} >全国人大</a>
                                        &nbsp;&nbsp;&nbsp;
                                    <a target={'_blank'} style={{ backgroundColor: 'red', color: 'white', fontSize: '16px' }} href={'http://www.ahrd.gov.cn/ahrdweb/'} >安徽省人大</a>
                                        &nbsp;&nbsp;&nbsp;
                                    <a target={'_blank'} style={{ backgroundColor: 'red', color: 'white', fontSize: '16px' }} href={'http://www.chzrd.gov.cn/'}>池州市人大</a>
                                        &nbsp;&nbsp;&nbsp;
                                    <a target={'_blank'} style={{ backgroundColor: 'red', color: 'white', fontSize: '16px' }} href={'http://www.ahqy.gov.cn/'} >青阳县人民政府</a>
                                        &nbsp;&nbsp;&nbsp;
                                    <a target={'_blank'} style={{ backgroundColor: 'red', color: 'white', fontSize: '16px' }} href={'http://www.ahqyrd.gov.cn/'} >原青阳人大网</a>
                                        &nbsp;&nbsp;&nbsp;
                                </p>
                                    
                                <p>
                                    主办单位：中共石台县委组织部
                                    &nbsp;&nbsp;&nbsp;
                                    地址：安徽省石台县仁里镇曙光路8号
                                    &nbsp;&nbsp;&nbsp;
                                    邮编：245100
                                    &nbsp;&nbsp;&nbsp;
                                    E-mail:stxfwtgyx@126.com
                                    &nbsp;&nbsp;&nbsp;
                                    备案号：皖ICP备20004904号
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} xs={24} >
                        <div style={{ height: '150px', width: '100%', backgroundColor: 'red', color: 'white', fontSize: '10px' }}>
                            <div style={{ padding: '70px 5px 15px 20px' }}>
                                技术支持：中国电信股份有限公司池州分公司
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} xs={0}
                     style={{ backgroundColor: 'red', color: 'white', fontSize: '10px' }}>
                        <div style={{ height: '150px', backgroundColor: 'red', color: 'white', fontSize: '10px' }}>
                        </div>
                    </Col>
                </Row>
                {/* <Divider style={{color:'black',height:'1px',backgroundColor:'black'}} />
                <Row>
                    <Col lg={4}>
                    </Col>
                    <Col lg={16}>
                        友情链接：
                        <a color="red" href={'http://www.chzrd.gov.cn/'}>池州市人大</a>
                        &nbsp;&nbsp;&nbsp;
                        <a color="red" href={'http://www.ahrd.gov.cn/ahrdweb/'} >安徽省人大</a>
                        &nbsp;&nbsp;&nbsp;
                        <a color="red" href={'http://www.npc.gov.cn/'} >全国人大</a>
                    </Col>
                    <Col lg={4}>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                    </Col>
                    <Col lg={10} aling={'right'}>

                    </Col>
                    <Col lg={6}>
                        技术支持：中国电信股份有限公司池州分公司
                    </Col>
                    <Col lg={4}>

                    </Col>
                </Row> */}
            </div>
        );
    }
}