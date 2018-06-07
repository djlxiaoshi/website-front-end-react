/**
 * @Author JohnLi
 * @Date 2018/3/7 19:55
 */
import React, { Component } from 'react';
import './AppHeader.css';

interface HeaderProps {
  toggleDrawer?: any;
}

interface HeaderStates {
  showHeader?: boolean;
}

class AppHeader extends Component<HeaderProps, HeaderStates> {
  constructor(props) {
    super(props);
    this.state = {
      showHeader: true
    };
  }

  render() {
      return (
          <React.Fragment>
            {this.state.showHeader ?
              <div className="app-header-wrap">
                <a className="bars-btn" onClick={(event) => this.props.toggleDrawer(true)}>
                  <i className="fa fa-bars"/>
                </a>
                <h2 className="page-title">页面标题</h2>
              </div>
              : null
            }
          </React.Fragment>
      );
  }
  componentDidMount () {
    const store = window['store'];
    const state = store.getState();
    store.subscribe(() => {
      this.setState({
        showHeader: state!.showHeader
      });
    });
  }
}

export default AppHeader;