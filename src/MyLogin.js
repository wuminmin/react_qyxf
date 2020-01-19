import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
import img_guohui_png from './img_guohui.png';
import axios from 'axios';
import AppGlobal from './AppGlobal';
import Qs from 'qs';

class NormalLoginForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                let self = this;
                // let data = {
                //     "ban_kuai": values
                // }
                axios({
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    method: 'post',
                    url: AppGlobal.url.login,
                    data: Qs.stringify(values)
                }).then(function (response) {
                    console.log(response)
                    if(response.data.code == '200'){
                        window.location.href = '/houtai?usertoken='+response.data.usertoken
                    }else{
                        alert('登陆失败');
                    }

                })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {/* {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>Remember me</Checkbox>)} */}

                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登陆
                    </Button>

                </Form.Item>
            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);


export default class MyLogin extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={8}></Col>
                    <Col span={2}>
                        <img style={{ width: '100%', height: 'auto' }} src={img_guohui_png}></img>
                    </Col>
                    <Col span={6}>
                        <h1>青阳人大</h1>
                    </Col>
                    <Col span={8}></Col>
                </Row>
                <Row>
                    <Col span={8}></Col>
                    <Col span={8}>
                        <WrappedNormalLoginForm />
                    </Col>
                    <Col span={8}></Col>
                </Row>
            </div>
        )
    }

}
