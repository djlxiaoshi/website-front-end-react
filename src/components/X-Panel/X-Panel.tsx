/**
 * @Author JohnLi
 * @Date 2018/3/8 11:53
 */
import React, { Component } from 'react';

import './X-Panel.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="x-panel-header">
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
      <div className="x-panel-body">
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
      <div className="x-panel-footer">
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
      <div className="x-panel">
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
