/**
 * @Author JohnLi
 * @Date 2018/2/7 17:06
 */
import React, { Component } from 'react';
import { List } from 'antd-mobile';

import { Link } from 'react-router-dom';

import { routing } from '../../../routing/routing';

import './AppSidebar.css';

const avatar = require('../../../assets/images/avatar.jpg');

class AppSidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-sidebar">
        <div className="user-msg-wrap">
          <a className="user-avatar">
            <img src={avatar} alt="Danbor"/>
          </a>
          <p className="user-desc">
            一只前端程序员
          </p>
        </div>
          <List className="sidebar-menu">
            {
              routing.map(route => {
                return (<List.Item key={route.path}>
                  <Link to={route.path}>
                      <span className="icon-wrap">
                          {route.icon ? <i className={`fa ${route.icon}`}/> : null}
                      </span>
                      {route.name}
                  </Link>
                </List.Item>);
              })
            }
          </List>
      </div>
    );
  }
}

export default AppSidebar;