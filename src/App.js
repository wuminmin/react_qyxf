import React from 'react';
import Qs from 'qs'
import axios from 'axios'
import 'react-weui/build/packages/react-weui.css';
import MyHeader from './MyHeader';
import {
  ButtonArea, CellsTitle, CellsTips, CellBody, CellFooter, Form, FormCell, Radio,
  Tab, NavBarItem, Article, ActionSheet, Cells, Cell, Preview, PreviewHeader, PreviewFooter, PreviewBody, PreviewItem, PreviewButton
} from 'react-weui';
import { Layout, Menu, Breadcrumb, Icon, Row, Col, Dropdown, Button, Tag, PageHeader } from 'antd';

class MyCell extends React.Component {
  render() {
    return (
      <Cell href="javascript:;" access>
        <CellBody>
          <a href={'mynews'} >{this.props.item.tittle}</a>
          
        </CellBody>
        <CellFooter>
          <a href={'mynews'} >{this.props.item.time}</a>
         
        </CellFooter>
      </Cell>
    )

  }
}

class MyCells extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      新闻列表: [],
    }
  }

  componentDidMount() {
    let self = this;
    let data = {
      "type": this.props.my_type
    }
    axios({
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'post',
      url: 'https://wx.wuminmin.top/qyrd/rd_xia_zai_list',
      data: Qs.stringify(data)
    }).then(function (response) {
      console.log(response)
      self.setState({
        新闻列表: response.data
      });
    })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <Cells>
        {
          this.state.新闻列表.map((item, index) => {
            return (
              <MyCell item={item} key={index}  ></MyCell>
            )
          })
        }
      </Cells>
    )
  }
}

class ShouYe extends React.Component {

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

    return (
      <div>
               <MyHeader></MyHeader>

            </div>
    )
  }
}
export default ShouYe