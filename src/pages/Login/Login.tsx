/**
 * @Author JohnLi
 * @Date 2018/3/8 11:43
 */
import React, { Component } from 'react';

import { InputItem, Button } from 'antd-mobile';

import { withRouter } from 'react-router-dom';

import './Login.css';

const classNames = require('classnames');

import AppPanel from '../../components/AppPanel/AppPanel';

import fetchService from '../../core/services/fetch.service';
import iziToastService from '../../core/services/izi-toast.service';

interface LoginState {
  isLogin: boolean;
  username?: string;
  password?: string;
  secondPsw?: string;
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

  operate() {
    if (this.state.isLogin) {
      this.login();
    } else {
      this.register();
    }
  }

  login() {
    fetchService.get('/v1/users', {username: this.state.username, password: this.state.password}, true).subscribe(result => {
      iziToastService.success('欢迎回来!');
      this.props.history.push('/home');
    });
  }

  register() {
    fetchService.post('/v1/users', {
      username: this.state.username,
      password: this.state.password,
      secondPsw: this.state.secondPsw
    }, true).subscribe(result => {
      iziToastService.success('注册成功!');
      this.setState({
        isLogin: true
      });
    });
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
        <div className={'app-logo'}/>
        <AppPanel>
          <AppPanel.Header>
            <p onClick={(event) => {this.toggle(event); }}>
              <span className={loginBtnClass}>登录</span> | <span className={registerBtnClass}>注册</span>
            </p>
          </AppPanel.Header>
          <AppPanel.Body>
            {
              this.state.isLogin ?
              <div>
                <InputItem placeholder="请输入邮箱" type="text" className="-placeholder" onChange={(value) => { this.setState({username: value}); }}/>
                <InputItem placeholder="请输入密码" type="password" className="-placeholder" onChange={(value) => { this.setState({password: value}); }}/>
              </div>
                :
              <div>
                <InputItem placeholder="请输入邮箱" type="text" className="-placeholder" onChange={(value) => { this.setState({username: value}); }}/>
                <InputItem placeholder="请输入密码" type="password" className="-placeholder" onChange={(value) => { this.setState({password: value}); }}/>
                <InputItem placeholder="确认密码" type="password" className="-placeholder" onChange={(value) => { this.setState({secondPsw: value}); }}/>
              </div>
            }

            <Button type="primary" onClick={() => { this.operate(); }}>{this.state.isLogin ? '登录' : '注册'}</Button>

          </AppPanel.Body>
          <AppPanel.Footer>
            {
              this.state.isLogin ?
                <p className="login-panel-footer">
                  <span className="forget-password">忘记密码</span>
                  <span className="register">还没有账号，点击注册吧</span>
                </p> :
                <p className="login-panel-footer">
                  <span>已有账号直接<span>登录</span></span>
                </p>
            }
          </AppPanel.Footer>
        </AppPanel>
      </div>
    );
  }
}

export default withRouter(Login);