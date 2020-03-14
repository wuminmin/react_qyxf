import 'braft-editor/dist/index.css';
import React from 'react';
import BraftEditor from 'braft-editor';
import axios from 'axios';
import Qs from 'qs';
import moment from 'moment';
import AppGlobal from './AppGlobal';
import { message, Upload, Select, Icon, Row, Col, Dropdown, Button, Tag, PageHeader } from 'antd';
import MyHeader from './MyHeader.js';
import MyImg from './MyImg.js';

const { Option, OptGroup } = Select;
export default class BasicDemo extends React.Component {
  state = {
    editorState: BraftEditor.createEditorState('<p>Hello <b>World!</b></p>'), // 设置编辑器初始内容
    outputHTML: '<p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>',
    myHTML: '',
    tittle: '',
    head_menu_data: [],
    subname: '',
    usertoken: new URLSearchParams(this.props.location.search).get('usertoken'),
    当前图片名称: '',
  }

  componentDidMount() {
    this.isLivinig = true
    // 3秒后更改编辑器内容
    setTimeout(this.setEditorContentAsync, 3000);

    let self = this;
    axios({
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'post',
      url: 'https://wx.wuminmin.top/qyrd/get_header_menu_list_data2',
    }).then(function (response) {
      console.log(response)
      self.setState({
        head_menu_data: response.data
      });
    })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentWillUnmount() {
    this.isLivinig = false
  }

  handleChange = (editorState) => {
    console.log(editorState.toHTML());
    this.setState({
      editorState: editorState,
      outputHTML: editorState.toHTML()
    })
  }

  setEditorContentAsync = () => {
    this.isLivinig && this.setState({
      editorState: BraftEditor.createEditorState('')
    })
  }

  handleChangeBanShiRiQi = (e) => {
    this.setState({ type: e.target.value });
  }

  handleChangeBanShiRiQi2 = (e) => {
    this.setState({ tittle: e.target.value });
  }

  render() {

    const { editorState, myHTML } = this.state;

    const props2 = {
      name: 'file',
      action: 'https://wx.wuminmin.top/qyrd/upload_img2',
      data: { usertoken: this.state.usertoken, subname: this.state.subname, tittle: this.state.tittle },
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} ${info.file.response.code}`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} ${info.file.response.code} `);
        }
      },
    };

    return (
      <div>
        <MyHeader />
        <Row>
          <Col span={2}></Col>
          <Col span={2}> <label>模块名称:</label></Col>
          <Col span={4}><Select
            defaultValue=""
            style={{ width: '100%' }}
            onChange={(value) => {
              console.log(`selected ${value}`);
              this.setState({ subname: value });
            }}
          >
            {this.state.head_menu_data.map((myitem) => {
              return (
                <OptGroup label={myitem.name} >
                  {myitem.myMenu.map((subitem) => {
                    return (
                      <Option value={subitem.subname}>{subitem.subname}</Option>
                    )
                  })}
                </OptGroup>
              )
            }
            )}
          </Select>
          </Col>
          <Col span={2}><label>新闻标题:</label></Col>
          <Col span={4}>
            <input
              style={{ width: '100%' }}
              type="txt" defaultValue=""
              onChange={this.handleChangeBanShiRiQi2}
            />
          </Col>
          <Col span={2}><label>上传图片：</label></Col>
          <Col span={4}>
            <Upload {...props2}>
              <Button>
                <Icon type="upload" /> 点击上传文件
              </Button>
            </Upload>
          </Col>
          <Col span={2}></Col>
        </Row>
        {/* <MyImg usertoken={new URLSearchParams(this.props.location.search).get('usertoken')}/> */}
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            <div className="editor-wrapper">
              <BraftEditor
                value={editorState}
                onChange={this.handleChange}
              />
            </div>
          </Col>
          <Col span={2}></Col>
        </Row>
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            <Button
              type="primary"
              onClick={e => {
                this.setState({
                  myHTML: this.state.outputHTML
                });
              }}>预览文章</Button>

          </Col>
          <Col span={2}></Col>
        </Row>
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            <div className="editor-wrapper">
              <h5>预览文章</h5>
              <div dangerouslySetInnerHTML={{ __html: myHTML }} />
            </div>
          </Col>
          <Col span={2}></Col>
        </Row>
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            <Button
              type="primary"
              onClick={e => {
                let self = this;
                let data = {
                  "usertoken": self.state.usertoken,
                  "article": self.state.outputHTML,
                  "tittle": self.state.tittle,
                  "type": self.state.subname,
                  "now": moment().format('YYYY-MM-DD HH:mm:ss')
                }
                axios({
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                  },
                  method: 'post',
                  url: 'https://wx.wuminmin.top/qyrd/rd_updata',
                  data: Qs.stringify(data)
                }).then(function (response) {
                  console.log(response)
                  self.setState({
                    myHTML: response.data.code
                  });
                })
                  .catch(function (error) {
                    console.log(error);
                  });
              }
              }>上传文章</Button>

          </Col>
        </Row>
      </div>
    )
  }
}