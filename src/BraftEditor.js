import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'
import axios from 'axios';
import {
  Button
} from 'react-weui';

export default class BasicDemo extends React.Component {

  state = {
    editorState: BraftEditor.createEditorState('<p>Hello <b>World!</b></p>'), // 设置编辑器初始内容
    outputHTML: '<p></p>',
    myHTML:'',
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

  render() {

    const { editorState, outputHTML ,myHTML} = this.state

    return (
      <div>
        <div className="editor-wrapper">
          <BraftEditor
            value={editorState}
            onChange={this.handleChange}
          />
        </div>
        <h5>输出内容</h5>
        <div className="output-content">{outputHTML}</div>
        <Button
          onClick={e => {
            let self = this
            axios.post('https://wx.wuminmin.top/qyrd/rd_updata', {
              firstName: self.state.outputHTML,
              lastName: 'Flintstone'
            })
              .then(function (response) {
                console.log(response);
                self.setState({
                  myHTML: response.data.firstName
              });

              })
              .catch(function (error) {
                console.log(error);
              });
          }
          }>
          OK
                        </Button>
                        <div dangerouslySetInnerHTML = {{ __html: myHTML }} />
      </div>
    )

  }

}