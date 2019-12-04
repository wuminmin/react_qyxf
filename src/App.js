import React from 'react';
import Qs from 'qs'
import axios from 'axios'
import 'react-weui/build/packages/react-weui.css';
import MyHeader from './MyHeader';
import { Carousel, Layout, Menu, Breadcrumb, Icon, Row, Col, Dropdown, Button, Tag, PageHeader, Tabs, List } from 'antd';
// import Carousel from 'nuka-carousel';
import MyFooter from './MyFooter';
import AppGlobal from './AppGlobal';

class MyTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs_list_data: [],
      ban_kuai: this.props.ban_kuai,
    }
  }

  handleClick = e => {
    console.log(e)
  }

  componentDidMount() {
    let self = this;
    let data = {
      "ban_kuai": this.props.ban_kuai
    }
    axios({
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'post',
      url: AppGlobal.url.rd_xia_zai_tabs_by_ban_kuai,
      data: Qs.stringify(data)
    }).then(function (response) {
      console.log(response)
      self.setState({
        tabs_list_data: response.data
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
        <Tag color="#2db7f5">{this.props.ban_kuai}</Tag>
        <Tabs defaultActiveKey="1" onChange={callback}>
          {this.state.tabs_list_data.map((myitem) => {
            return (
              <TabPane tab={myitem.table_name} key={myitem.table_key}>
                <List
                  bordered
                  dataSource={myitem.list_data}
                  renderItem={item => (
                    <List.Item  >
                      <a href={item.url} align={'right'}> {item.key} --- {item.key2}</a>
                    </List.Item>
                  )}
                />
              </TabPane>
            )
          })}

        </Tabs>
      </div>
    )
  }
}

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      width: props.width || -1,
      height: props.height || -1,
      首页模块: '人大新闻',
      首页新闻标题: '',
      首页新闻内容: '',
      ban_kuai1: '人大概况',
      ban_kuai2: '新闻中心',
      ban_kuai3: '依法履职',
      ban_kuai4: '代表工作',
      ban_kuai5:'会议之窗',
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
      url: AppGlobal.url.rd_xia_zai,
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
    return (
      <div>
        <MyHeader></MyHeader>
        <Row>
          <Col span={2}></Col>
          <Col span={9}>
            <Carousel autoplay>
              <img src= {AppGlobal.url.首页工程案例1} />
              <img src= {AppGlobal.url.首页工程案例2} />
              <img src= {AppGlobal.url.首页工程案例3} />
              <img src= {AppGlobal.url.首页工程案例4} />
              <img src= {AppGlobal.url.首页工程案例5} />
            </Carousel>
          </Col>
          <Col span={2}></Col>
          <Col span={9}>
            <MyTabs ban_kuai={this.state.ban_kuai2}></MyTabs>
          </Col>
          <Col span={2}></Col>

        </Row>
        <br></br>
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            <img src= {AppGlobal.url.首页中间横幅图片1}
              style={{ width: '100%', height: 'auto' }}
            />
          </Col>
          <Col span={2}></Col>
        </Row>
        <br></br>
        <Row>
          <Col span={2}></Col>
          <Col span={9}>
            <MyTabs ban_kuai={this.state.ban_kuai1}></MyTabs>
          </Col>
          <Col span={2}></Col>
          <Col span={9}>
            <MyTabs ban_kuai={this.state.ban_kuai3}></MyTabs>
          </Col>
          <Col span={2}></Col>
        </Row>
        <br></br>
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            <img src= {AppGlobal.url.首页中间横幅图片2}
              style={{ width: '100%', height: 'auto' }}
            />
          </Col>
          <Col span={2}></Col>
        </Row>
        <br></br>
        <Row>
          <Col span={2}></Col>
          <Col span={9}>
            <MyTabs ban_kuai={this.state.ban_kuai4}></MyTabs>
          </Col>
          <Col span={2}></Col>
          <Col span={9}>
            <MyTabs ban_kuai={this.state.ban_kuai5}></MyTabs>
          </Col>
          <Col span={2}></Col>
        </Row>
        <br></br>
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            <img src= {AppGlobal.url.首页中间横幅图片3}
              style={{ width: '100%', height: 'auto' }}
            />
          </Col>
          <Col span={2}></Col>
        </Row>
        <br></br>
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            <Tag color="#2db7f5">{'图片新闻'}</Tag>
          </Col>
          <Col span={2}></Col>
        </Row>
        <Row>
          <Col span={2}></Col>
          <Col span={4}>
            <Carousel autoplay>
              <img src="https://wx.wuminmin.top/wxyl/image?id=12" />
              <img src="https://wx.wuminmin.top/wxyl/image?id=13" />
            </Carousel>
          </Col>
          <Col span={4}>
            <Carousel autoplay>
              <img src="https://wx.wuminmin.top/wxyl/image?id=12" />
              <img src="https://wx.wuminmin.top/wxyl/image?id=13" />
            </Carousel>
          </Col>
          <Col span={4}>
            <Carousel autoplay>
              <img src="https://wx.wuminmin.top/wxyl/image?id=12" />
              <img src="https://wx.wuminmin.top/wxyl/image?id=13" />
            </Carousel>
          </Col>
          <Col span={4}>
            <Carousel autoplay>
              <img src="https://wx.wuminmin.top/wxyl/image?id=12" />
              <img src="https://wx.wuminmin.top/wxyl/image?id=13" />
            </Carousel>
          </Col>
          <Col span={4}>
            <Carousel autoplay>
              <img src="https://wx.wuminmin.top/wxyl/image?id=12" />
              <img src="https://wx.wuminmin.top/wxyl/image?id=13" />
            </Carousel>
          </Col>
          <Col span={2}></Col>
        </Row>
        <br></br>
        <MyFooter></MyFooter>
      </div>
    )
  }
}