/**
 * @Author JohnLi
 * @Date 2018/4/11 19:42
 */
import React, { Component } from 'react';
import './Panel.css';

interface PanelItem {
  content: string;
  title: string;
}
interface PanelProps {
  data: PanelItem;
}
class Panel extends Component<PanelProps, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="panel-wrap">
          <header className="panel-header">
            <a className="avatar"><img src="" alt=""/></a>
          </header>
          <div className="panel-body">
            <p className="content">
              {this.props.data.content}
            </p>
            <p className="title">
              {this.props.data.title}
            </p>
          </div>
          <footer className="panel-footer">
            <p className="icon-wrap">
              <a className="icon"><i className="fa fa-heart"/></a>
              <a className="icon"><i className="fa fa-comment"/></a>
            </p>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

export default Panel;