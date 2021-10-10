import React, { Component } from 'react'
import loginImg from '../../assets/img/login.png'
import './index.css'
import { Input, Space, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

export default class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleLogin = () => {
    if (this.state.username === "") {
      alert("账号不能为空")
    } else if (this.state.password === "") {
      alert("密码不能为空")
    } else {
      this.props.history.push('/Admin');
    }
  }

  inputUsernameBlur(e) {
    this.setState({
      username: e.target.value
    })
  }

  inputPasswordBlur(e) {
    this.setState({
      password: e.target.value
    })
  }

  render() {
    return (
      <div className="title">
        <div>
          <img src={loginImg} />
        </div>
        <form>
          <div className="inputAdmin">
            <Space direction="vertical">
              <Input className="input" placeholder="账号" onBlur={(e) => this.inputUsernameBlur(e)} />
              <Input.Password className="input"
                placeholder="密码"
                onBlur={(e) => this.inputPasswordBlur(e)}
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              />
            </Space>
          </div>
          <div>
            <Button className="button" type="primary" onClick={this.handleLogin}>登录</Button>
          </div>
        </form>


      </div>
    )
  }
}
