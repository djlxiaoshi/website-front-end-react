/**
 * @Author JohnLi
 * @Date 2018/3/8 11:43
 */
import React, { Component } from 'react';

import { InputItem } from 'antd-mobile';

import './Login.css';

const classNames = require('classnames');

import XPanel from '../../components/X-Panel/X-Panel';

interface LoginState {
  isLogin: boolean;
}

class Login extends Component<any, LoginState> {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true
    };
  }

  toggle(event) {
    const targetClassName = event.target.className;
    if (!!~targetClassName.indexOf('login-btn')) {
      this.setState({
        isLogin: true
      });
    } else if (!!~targetClassName.indexOf('register-btn')) {
      this.setState({
        isLogin: false
      });
    }
  }

  render() {
    const loginBtnClass = classNames({
      'login-btn': true,
      'active': this.state.isLogin
    });
    const registerBtnClass = classNames({
      'register-btn': true,
      'active': !this.state.isLogin
    });
    return (
      <div className="app-login-wrap">
        <XPanel>
          <XPanel.Header>
            <p onClick={(event) => {this.toggle(event); }}>
              <span className={loginBtnClass}>登录</span> | <span className={registerBtnClass}>注册</span>
            </p>
          </XPanel.Header>
          <XPanel.Body>
            {
              this.state.isLogin ?
              <div>
                <InputItem placeholder="请输入邮箱" type="text" className="-placeholder"/>
                <InputItem placeholder="请输入密码" type="password" className="-placeholder"/>
              </div>
                :
              <div>
                <InputItem placeholder="请输入邮箱" type="text" className="-placeholder"/>
                <InputItem placeholder="请输入密码" type="password" className="-placeholder"/>
              </div>
            }

          </XPanel.Body>
          <XPanel.Footer>
            <p className="login-panel-footer">
              <span className="forget-password">忘记密码</span>
              <span className="register">还没有账号，点击注册吧</span>
            </p>
          </XPanel.Footer>
        </XPanel>
      </div>
    );
  }
}

export default Login;