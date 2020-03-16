import React from 'react';
import Qs from 'qs'
import axios from 'axios'
import 'react-weui/build/packages/react-weui.css';
import MyHeader from './MyHeader';
import { Carousel, Card, Row, Col,  Button, Tag, PageHeader, Tabs, List, Divider } from 'antd';
import './App.css';
import MyFooter from './MyFooter';
import AppGlobal from './AppGlobal';

class MyTabsSmall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs_list_data: [],
      ban_kuai: this.props.ban_kuai,
      lan_mu: '',
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
    // function callback(key) {
    //   console.log(key);
    // }
    return (
      <div >
        <Tabs
          tabBarExtraContent={
            <div style={{ height: '100%', width: '100%', backgroundColor: '#ffffff', color: 'white', fontSize: '10px' }}>
              <div style={{ padding: '10px 3px 3px 3px' }}>
                <a
                  target={'_blank'} style={{ color: '#2db7f5', fontSize: '14px', fontFamily: 'Microsoft Yahei', width: '100%' }}
                  href={'/my_lan_mu?ban_kuai=' + this.state.ban_kuai + '&lan_mu=' + this.state.lan_mu}>
                  {'更多>>'}
                </a>
              </div>
            </div>
          }
          tabBarGutter={0}
          size={'large'}
          // tabBarStyle={{ color:'blue',fontWeight: '900',fontSize:'90px' }} 
          defaultActiveKey={'1'}
          onChange={(key) => {
            this.state.tabs_list_data.map((item) => {
              console.log(item.table_key);
              console.log(key);
              if (item.table_key === Number(key)) {
                console.log(item.table_name);
                this.setState({
                  lan_mu: item.table_name
                })
              }
            });
          }}
        >
          {this.state.tabs_list_data.map((myitem) => {
            return (
              <TabPane
                // onMouseOver = {(e) => {
                //   console.log(e);
                // }}
                // tabBarStyle={{ color:'blue',fontWeight: '900', fontSize: '90px' }} 
                tab={myitem.table_name}
                key={myitem.table_key}
              >
                <List
                  bordered={false}
                  dataSource={myitem.list_data}
                  renderItem={item => (
                    <List.Item>
                      <a
                        target={'_blank'} style={{ color: '#000000', fontSize: '14px', fontFamily: 'Microsoft Yahei', width: '80%' }} href={item.url}>
                        {item.key}
                      </a>
                      <a target={'_blank'} style={{ color: 'grey', fontSize: '14px', fontFamily: 'Microsoft Yahei', width: '20%', textAlign: 'right' }} href={item.url}>
                        {item.key2}
                      </a>
                    </List.Item>
                  )}
                />
              </TabPane>
            )
          })}
        </Tabs>
        <Divider />

      </div>
    )
  }
}
class MyTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs_list_data: [],
      ban_kuai: this.props.ban_kuai,
      tabs_list_data2: [],
      ban_kuai2: this.props.ban_kuai2,
      lan_mu: '',
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

    let data2 = {
      "ban_kuai": this.props.ban_kuai2
    }
    axios({
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'post',
      url: AppGlobal.url.rd_xia_zai_tabs_by_ban_kuai,
      data: Qs.stringify(data2)
    }).then(function (response) {
      console.log(response)
      self.setState({
        tabs_list_data2: response.data
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
      <Row>
        <Col span={4}></Col>
        <Col span={11}>
          <Tabs
            tabBarExtraContent={
              <div style={{ height: '100%', width: '100%', backgroundColor: '#ffffff', color: 'white', fontSize: '10px' }}>
                <div style={{ padding: '10px 3px 3px 3px' }}>
                  <a
                    target={'_blank'} style={{ color: '#2db7f5', fontSize: '14px', fontFamily: 'Microsoft Yahei', width: '100%' }}
                    href={'/my_lan_mu?ban_kuai=' + this.state.ban_kuai + '&lan_mu=' + this.state.lan_mu}>
                    {'更多>>'}
                  </a>
                </div>
              </div>
            }
            onChange={(key) => {
              this.state.tabs_list_data.map((item) => {
                console.log(item.table_key);
                console.log(key);
                if (item.table_key === Number(key)) {
                  console.log(item.table_name);
                  this.setState({
                    lan_mu: item.table_name
                  })
                }
              });
            }}
            type={'line'}
            size={'large'}
            tabBarStyle={{ color: 'blue', fontWeight: '900', fontSize: '300%' }}
            defaultActiveKey="1"
          >
            {this.state.tabs_list_data.map((myitem) => {
              return (
                <TabPane tabBarStyle={{ color: 'red', fontWeight: '900', fontSize: '300%' }} tab={myitem.table_name} key={myitem.table_key}>
                  <List
                    style={{ fontSize: '20px', color: 'red' }}
                    bordered={false}
                    dataSource={myitem.list_data}
                    renderItem={item => (
                      <List.Item>
                        <a target={'_blank'} style={{ color: '#000000', fontSize: '14px', fontFamily: 'Microsoft Yahei', width: '80%' }} href={item.url}>
                          {item.key}
                        </a>
                        <a target={'_blank'} style={{ color: 'grey', fontSize: '14px', fontFamily: 'Microsoft Yahei', width: '20%', textAlign: 'right' }} href={item.url}>
                          {item.key2}
                        </a>
                      </List.Item>
                    )}
                  />
                </TabPane>
              )
            })}
          </Tabs>
          <Divider />
        </Col>
        <Col span={1}></Col>
        <Col span={4}>
          <Card title={this.props.ban_kuai2}
            headStyle={{ width: '100%', height: 'auto', color: '#ffffff', background: 'blue' }}
            bodyStyle={{ width: '100%', height: '300px', background: '#4DC2F7' }}
          >
            {this.state.tabs_list_data2.map((myitem) => {
              return (
                <Button type='normal' style={{
                  color: '#ffffff',
                  width: '100%',
                  height: 'auto',
                  fontSize: '20px',
                  background: 'none',
                  textShadow: '1px 1px #000000,-1px -1px #000000,1px -1px #000000,-1px 1px #000000',
                }} target={'_blank'} href={'/mynews?ban_kuai=' + this.props.ban_kuai2 + '&lan_mu=' + myitem.table_name + '&tittle=默认'}
                >
                  {myitem.table_name}
                </Button>
              )
            })}
          </Card>
        </Col>
        <Col span={4}></Col>
      </Row>
    )
  }
}

class MyImgTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs_list_data: [],
      ban_kuai: this.props.ban_kuai,
      lan_mu: '',
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
      console.log('MyImgTabs------------------------------', response)
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
        <Tabs
          type={'line'}
          size={'large'}
          tabBarStyle={{
            color: 'blue',
            fontWeight: '900',
            fontSize: '300%'
          }}
          tabBarExtraContent={
            <div style={{ height: '100%', width: '100%', backgroundColor: '#ffffff', color: 'white', fontSize: '10px' }}>
              <div style={{ padding: '10px 3px 3px 3px' }}>
                <a
                  target={'_blank'} style={{ color: '#2db7f5', fontSize: '14px', fontFamily: 'Microsoft Yahei', width: '100%' }}
                  href={'/my_lan_mu?ban_kuai=' + this.state.ban_kuai + '&lan_mu=' + this.state.lan_mu}>
                  {'更多>>'}
                </a>
              </div>
            </div>
          }
          defaultActiveKey="1"
          onChange={(key) => {
            this.state.tabs_list_data.map((item) => {
              console.log(item.table_key);
              console.log(key);
              if (item.table_key === Number(key)) {
                console.log(item.table_name);
                this.setState({
                  lan_mu: item.table_name
                })
              }
            });
          }}
        >
          {this.state.tabs_list_data.map((myitem) => {
            return (
              <TabPane
                tab={myitem.table_name} key={myitem.table_key}
              >
                <Carousel autoplay>
                  {myitem.list_data.map((subItem) => {
                    return (
                      <a target={'_blank'} href={subItem.url} key={subItem.key}>
                        <img
                          src={subItem.图片地址}
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </a>
                    )
                  })}
                </Carousel>
              </TabPane>
            )
          })}
        </Tabs>
      </div>
    )
  }

}

class MyImgMoreTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs_list_data: [],
      ban_kuai: this.props.ban_kuai,
      lan_mu: '',
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
      url: AppGlobal.url.rd_xia_zai_tabs_by_ban_kuai2,
      data: Qs.stringify(data)
    }).then(function (response) {
      console.log('MyImgTabs------------------------------', response)
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
    return (
      <div>
        <Row>
          <Col span={4}></Col>
          <Col span={16}>
            <Tabs
              type={'line'}
              size={'large'}
              tabBarStyle={{
                color: 'blue',
                fontWeight: '900',
                fontSize: '300%'
              }}
              tabBarExtraContent={
                <div style={{ height: '100%', width: '100%', backgroundColor: '#ffffff', color: 'white', fontSize: '10px' }}>
                  <div style={{ padding: '10px 3px 3px 3px' }}>
                    <a
                      target={'_blank'} style={{ color: '#2db7f5', fontSize: '14px', fontFamily: 'Microsoft Yahei', width: '100%' }}
                      href={'/my_lan_mu?ban_kuai=' + this.state.ban_kuai + '&lan_mu=' + this.state.lan_mu}>
                      {'更多>>'}
                    </a>
                  </div>
                </div>
              }
              defaultActiveKey="1"
              onChange={(key) => {
                this.state.tabs_list_data.map((item) => {
                  console.log(item.table_key);
                  console.log(key);
                  if (item.table_key === Number(key)) {
                    console.log(item.table_name);
                    this.setState({
                      lan_mu: item.table_name
                    })
                  }
                });
              }}
            >
              {this.state.tabs_list_data.map((myitem) => {
                return (
                  <TabPane
                    tab={myitem.table_name} key={myitem.table_key}
                  >
                    {
                      myitem.list_data.map((subItem) => {
                        return (
                          <div>
                            <Col span={6}>
                              <Carousel autoplay>
                                {
                                  subItem.sub_list_data.map(thidItem => {
                                    return (
                                      <a target={'_blank'} href={thidItem.url} key={thidItem.key}>
                                        <img
                                          src={thidItem.图片地址}
                                          style={{ width: '100%', height: 'auto' }}
                                        />
                                      </a>
                                    )
                                  })
                                }
                              </Carousel>
                            </Col>
                          </div>
                        )
                      })}
                  </TabPane>
                )
              })}
            </Tabs>
          </Col>
          <Col span={4}></Col>
        </Row>
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
      ban_kuai1: '新闻中心',
      ban_kuai2: '人大概况',
      ban_kuai3: '会议之窗',
      ban_kuai4: '依法履职',
      ban_kuai5: '代表工作',
      ban_kuai6: '一府一委两院',
      ban_kuai7: '乡镇人大',
      tabs_list_data: [],
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

    let data2 = {
      "ban_kuai": this.state.ban_kuai1
    }
    axios({
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'post',
      url: AppGlobal.url.rd_xia_zai_tabs_by_ban_kuai,
      data: Qs.stringify(data2)
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
      <div >
        <MyHeader></MyHeader>
        <Row>
          <Col span={4}>
          </Col>
          <Col span={7} >
            <MyImgTabs ban_kuai={'首页图片'}></MyImgTabs>
          </Col>
          <Col span={1} ></Col>
          <Col span={8} >
            <MyTabsSmall ban_kuai={this.state.ban_kuai1}></MyTabsSmall>
          </Col>
          <Col span={4}></Col>
        </Row>
        <Row>
          <Col span={4}></Col>
          <Col span={16}>
            <img src={AppGlobal.url.首页中间横幅图片1}
              style={{ width: '100%', height: 'auto' }}
            />
          </Col>
          <Col span={4}></Col>
        </Row>
        <MyTabs ban_kuai={this.state.ban_kuai4} ban_kuai2={this.state.ban_kuai2}></MyTabs>
        <br></br>
        <MyTabs ban_kuai={this.state.ban_kuai5} ban_kuai2={this.state.ban_kuai3}></MyTabs>
        <Row>
          <Col span={4}></Col>
          <Col span={16}>
            <img src={AppGlobal.url.首页中间横幅图片2}
              style={{ width: '100%', height: 'auto' }}
            />
          </Col>
          <Col span={4}></Col>
        </Row>
        <Row>
          <Col span={4}></Col>
          <Col span={16}>
            <MyTabsSmall ban_kuai={this.state.ban_kuai6}></MyTabsSmall>
          </Col>
          <Col span={4}></Col>
        </Row>
        <Row>
          <Col span={4}></Col>
          <Col span={16}>
            <MyTabsSmall ban_kuai={this.state.ban_kuai7}></MyTabsSmall>
          </Col>
          <Col span={4}></Col>
        </Row>
        <MyImgMoreTabs ban_kuai={'首页滚动'}></MyImgMoreTabs>
        <MyFooter></MyFooter>
      </div>
    )
  }
}