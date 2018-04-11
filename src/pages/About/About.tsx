/**
 * @Author JohnLi
 * @Date 2018/2/8 17:32
 */
import React, { Component } from 'react';

import { ImagePicker, WingBlank } from 'antd-mobile';

interface AboutState {
  files?: Object[];
}
class About extends Component<any, AboutState> {
  constructor(props) {
    super(props);
    this.state = {
      files: [
        {url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg'}
      ]
    };
  }

  componentDidMount() {
    // 获取用户信息
  }

  onChange(files) {
    this.setState({
      files: [files.pop()]
    });
  }

  render() {
    return (
      <React.Fragment>
        <WingBlank>
          <div className="avatar-wrap">
            <ImagePicker
              files={this.state.files}
              onChange={(files) => { this.onChange(files); }}
              multiple={false}
            />
          </div>
          <div className="user-msg">
            <p className="username">DJLXS</p>
            <p className="desc">sdfgsdfg</p>
          </div>
        </WingBlank>
      </React.Fragment>
    );
  }
}

export default About;