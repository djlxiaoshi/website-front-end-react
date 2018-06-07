/**
 * @Author JohnLi
 * @Date 2018/3/8 11:53
 */
import React, { Component } from 'react';

import './AppPanel.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-panel-header">
        {this.props.children}
      </div>
    );
  }
}

class Body extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-panel-body">
        {this.props.children}
      </div>
    );
  }
}

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-panel-footer">
        {this.props.children}
      </div>
    );
  }
}

class XPanel extends Component {
  static Header;
  static Body;
  static Footer;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-panel">
        {this.props.children}
      </div>
    );
  }
}

XPanel.Header = Header;
XPanel.Body = Body;
XPanel.Footer = Footer;

export default XPanel;

export {
  Header,
  Body
};
