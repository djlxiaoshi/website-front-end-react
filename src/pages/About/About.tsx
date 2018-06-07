/**
 * @Author JohnLi
 * @Date 2018/2/8 17:32
 */
import React, { Component } from 'react';
import { ImagePicker } from 'antd-mobile';
import './About.css';

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
        <div id="app-about-me">
          <ul className={'user-msg'}>
            <li className={'user-avatar'}>
              <ImagePicker
                files={this.state.files}
                onChange={(files) => { this.onChange(files); }}
                multiple={false}
              />
            </li>
            <li><p className="username">DJLXS</p></li>
            <li><p className="email">1281233206@qq.com</p></li>
            <li><p className="desc">my name is johnli</p></li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default About;