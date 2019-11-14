import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'
import axios from 'axios';
import {
  ButtonArea,
  Button,
  CellsTitle,
  CellsTips,
  Cell,
  CellHeader,
  CellBody,
  CellFooter,
  Form,
  FormCell,
  Icon,
  Input,
  Label,
  TextArea,
  Switch,
  Radio,
  Checkbox,
  Select,
  VCode,
  Agreement,
  Toptips
} from 'react-weui';

export default class BasicDemo extends React.Component {

  state = {
    editorState: BraftEditor.createEditorState('<p>Hello <b>World!</b></p>'), // 设置编辑器初始内容
    outputHTML: '<p></p>',
    myHTML: '',
    tittle: '',
    type:'',
  }

  componentDidMount() {
    this.isLivinig = true
    // 3秒后更改编辑器内容
    setTimeout(this.setEditorContentAsync, 3000)
  }

  componentWillUnmount() {
    this.isLivinig = false
  }

  handleChange = (editorState) => {
    this.setState({
      editorState: editorState,
      outputHTML: editorState.toHTML()
    })
  }

  setEditorContentAsync = () => {
    this.isLivinig && this.setState({
      editorState: BraftEditor.createEditorState('<p>你好，<b>世界!</b><p>')
    })
  }

  handleChangeBanShiRiQi = (e) => {
    this.setState({ type: e.target.value });
  }

  handleChangeBanShiRiQi2 = (e) => {
    this.setState({ tittle: e.target.value });
  }

  render() {

    const { editorState, outputHTML, myHTML } = this.state

    return (
      <div>
         <label>模块名称:</label>
        <input type="txt" defaultValue="" onChange={this.handleChangeBanShiRiQi} />
        <label>新闻标题:</label>
        <input type="txt" defaultValue="" onChange={this.handleChangeBanShiRiQi2} />
        <div className="editor-wrapper">
          <BraftEditor
            value={editorState}
            onChange={this.handleChange}
          />
        </div>
        <h5>预览文章</h5>
        <div dangerouslySetInnerHTML={{ __html: myHTML }} />
        <Button
          onClick={e => {
            let self = this
            axios.post('https://wx.wuminmin.top/qyrd/rd_updata',
              {
                article: self.state.outputHTML,
                tittle: self.state.tittle,
                type: self.state.type,
              })
              .then(function (response) {
                console.log(response);
                self.setState({
                  myHTML: response.data.article
                });

              })
              .catch(function (error) {
                console.log(error);
              });
          }
          }>上传文章</Button>
      </div>
    )

  }

}