import React from 'react';
import Qs from 'qs'
import axios from 'axios'
import 'react-weui/build/packages/react-weui.css';
import MyHeader from './MyHeader';
import { Carousel, Card, Row, Col, Button, Tag, PageHeader, Tabs, List, Divider } from 'antd';
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
        <Col lg={4}  xs={0}></Col>
        <Col lg={11} xs={24}>
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
        <Col lg={1} xs={0}></Col>
        <Col lg={4} xs={24}>
          <Card title={this.props.ban_kuai2}
            headStyle={{
              width: '100%',
              height: 'auto',
              fontWeight:'900',
              color: '#ffffff',
              //  background: 'blue' 
            }}
            bodyStyle={{
              width: '100%',
              height: '300px',
              // background: '#4DC2F7' ,
              backgroundImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584700123669&di=ac6e0529ef63b9e51dad0bd22365a203&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F04%2F60%2F33%2F98586c9d54b5df4.jpg',
            }}
          >
            {this.state.tabs_list_data2.map((myitem) => {
              return (
                <Button  
                type ='default'
                style={{
                  color: '#43A2FC',
                  // borderBlockColor:'#43A2FC',
                  width: '100%',
                  height: 'auto',
                  fontSize: '20px',
                  fontWeight:'900',
                  background: 'none',
                  // textShadow: '2px 2px blue,-2px -2px blue,2px -2px blue,-2px 2px blue',
                }} 
                target={'_blank'} 
                href={'/my_lan_mu?ban_kuai=' + this.props.ban_kuai2 + '&lan_mu=' + myitem.table_name + '&tittle=默认'}
                >
                  {myitem.table_name}
                </Button>
              )
            })}
          </Card>
        </Col>
        <Col lg={4} xs={0}></Col>
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
          <Col lg={4}></Col>
          <Col lg={16}>
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
                            <Col lg={6}>
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
          <Col lg={4}></Col>
        </Row>
      </div>
    )
  }

}

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // width: props.width || -1,
      // height: props.height || -1,
      // 首页模块: '人大新闻',
      // 首页新闻标题: '',
      // 首页新闻内容: '',
      // ban_kuai1: '新闻中心',
      // ban_kuai2: '人大概况',
      // ban_kuai3: '会议之窗',
      // ban_kuai4: '依法履职',
      // ban_kuai5: '代表工作',
      // ban_kuai6: '一府一委两院',
      // ban_kuai7: '乡镇人大',
      // tabs_list_data: [],
    }
  }

  componentDidMount() {
    // console.log(this.props)
    // const search = this.props.location.search;
    // const params = new URLSearchParams(search);
    // console.log(params)
    // let self = this;
    // let data = {
    //   "type": this.state.首页模块
    // }
    // axios({
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   },
    //   method: 'post',
    //   url: AppGlobal.url.rd_xia_zai,
    //   data: Qs.stringify(data)
    // }).then(function (response) {
    //   console.log(response)
    //   self.setState({
    //     首页新闻标题: response.data.tittle,
    //     首页新闻内容: response.data.article
    //   });
    // })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    // let data2 = {
    //   "ban_kuai": this.state.ban_kuai1
    // }
    // axios({
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   },
    //   method: 'post',
    //   url: AppGlobal.url.rd_xia_zai_tabs_by_ban_kuai,
    //   data: Qs.stringify(data2)
    // }).then(function (response) {
    //   console.log(response)
    //   self.setState({
    //     tabs_list_data: response.data
    //   });
    // })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }

  render() {
    const { TabPane } = Tabs;
    function callback(key) {
      console.log(key);
    }
    return (
      <div  >
        <MyHeader></MyHeader>
        {/* <Row>
          <Col flex="135px">
          </Col>
          <Col flex="236px" >
            <MyImgTabs ban_kuai={'首页图片'}></MyImgTabs>
          </Col>
          <Col flex="34px" ></Col>
          <Col flex="236" >
            <MyTabsSmall ban_kuai={this.state.ban_kuai1}></MyTabsSmall>
          </Col>
          <Col flex="34px" ></Col>
        </Row> */}
         <Row>
          <Col xs={0} lg={4}>
          </Col>
          <Col xs={24} lg={7} >
            <MyImgTabs ban_kuai={'首页图片'}></MyImgTabs>
          </Col>
          <Col xs={0} lg={1}></Col>
          <Col xs={24} lg={8}>
            <MyTabsSmall ban_kuai={'走进部门'}></MyTabsSmall>
          </Col>
          <Col xs={0} lg={4}></Col>
        </Row>
        <Row>
          <Col lg={4} xs={0}></Col>
          <Col lg={16} xs={24}>
            <img src={AppGlobal.url.首页中间横幅图片1}
              style={{ width: '100%', height: 'auto' }}
            />
          </Col>
          <Col lg={4} xs={0}></Col>
        </Row>
        <MyTabs ban_kuai={'今日石台'} ban_kuai2={'本部动态'}></MyTabs>
        <MyTabs ban_kuai={'党建工作'} ban_kuai2={'干部人才'}></MyTabs>
        <Row>
          <Col lg={4}></Col>
          <Col lg={16}>
            <img src={AppGlobal.url.首页中间横幅图片2}
              style={{ width: '100%', height: 'auto' }}
            />
          </Col>
          <Col lg={4}></Col>
        </Row>
        <Row>
          <Col lg={4}></Col>
          <Col lg={16}>
            <MyTabsSmall ban_kuai={'基层动态'}></MyTabsSmall>
          </Col>
          <Col lg={4}></Col>
        </Row>
        <Row>
          <Col lg={4}></Col>
          <Col lg={16}>
            <MyTabsSmall ban_kuai={'选派选聘'}></MyTabsSmall>
          </Col>
          <Col lg={4}></Col>
        </Row>
        <Row>
          <Col lg={4}></Col>
          <Col lg={16}>
            <MyTabsSmall ban_kuai={'远教电教'}></MyTabsSmall>
          </Col>
          <Col lg={4}></Col>
        </Row>
        <Row>
          <Col lg={4}></Col>
          <Col lg={16}>
            <MyTabsSmall ban_kuai={'网上党校'}></MyTabsSmall>
          </Col>
          <Col lg={4}></Col>
        </Row>
        <MyImgMoreTabs ban_kuai={'首页滚动'}></MyImgMoreTabs>
        <MyFooter></MyFooter>
      </div>
    )
  }
}