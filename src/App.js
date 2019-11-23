import React from 'react';
import Qs from 'qs'
import axios from 'axios'
import 'react-weui/build/packages/react-weui.css';
import MyHeader from './MyHeader';
import { Layout, Menu, Breadcrumb, Icon, Row, Col, Dropdown, Button, Tag, PageHeader, Tabs } from 'antd';
import Carousel from 'nuka-carousel';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      width: props.width || -1,
      height: props.height || -1,
      首页模块: '人大新闻',
      首页新闻标题: '',
      首页新闻内容: '',
    }
  }



  componentDidMount() {
    console.log(this.props)
    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    console.log(params)
    let self = this;
    let data = {
      "type": this.state.首页模块
    }
    axios({
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'post',
      url: 'https://wx.wuminmin.top/qyrd/rd_xia_zai',
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
  }

  render() {

    const { TabPane } = Tabs;

    function callback(key) {
      console.log(key);
    }

    return (
      <div>
        <MyHeader></MyHeader>
        <br></br>
        <Row>
          <Col span={1}></Col>
          <Col span={10}>
            <Carousel>
              <img src="https://wx.wuminmin.top/wxyl/image?id=12" />
              <img src="https://wx.wuminmin.top/wxyl/image?id=13" />
            </Carousel>
          </Col>
          <Col span={2}></Col>
          <Col span={10}>
            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="Tab 1" key="1">
                Content of Tab Pane 1
              </TabPane>
              <TabPane tab="Tab 2" key="2">
                Content of Tab Pane 2
              </TabPane>
         
            </Tabs>
          </Col>
          <Col span={1}></Col>

        </Row>
      </div>
    )
  }
}