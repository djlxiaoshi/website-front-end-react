/**
 * @Author JohnLi
 * @Date 2018/2/8 17:32
 */
import React, { Component } from 'react';
import Panel from '../../components/Panel/Panel';
import { showHeaderAction } from '../../store/actions/index';

interface HomeStates {
}
class Home extends Component<any, HomeStates> {
  touchStartPosition = {x: 0, y: 0};
  list = [
    {content: 'sentence1', title: 'author1'},
    {content: 'sentence2', title: 'author2'},
    {content: 'sentence3', title: 'author3'},
    {content: 'sentence4', title: 'author4'},
    {content: 'sentence5', title: 'author5'}
  ];

  constructor(props) {
    super(props);
  }

  render() {
    const panelList = this.list.map(data => {
      return (<Panel data={data} key={data.content}/>);
    });
    return (
      <React.Fragment>
        <div id={'app-home-page'} onTouchStart={(e) => this.setTouchStartPosition(e)} onTouchMove={(e) => this.dispatchHeaderStatus(e)}>
          {
            panelList
          }
        </div>
      </React.Fragment>
    );
  }

  setTouchStartPosition(e) {
    const target = e.touches[0];
    this.touchStartPosition = {x: target.clientX, y: target.clientY};
  }
  dispatchHeaderStatus(e) {
    const store = window['store'];
    const target = e.touches[0];
    const touchStartPosition = this.touchStartPosition;
    store.dispatch(showHeaderAction(target.clientY > touchStartPosition.y));
  }
}

export default Home;