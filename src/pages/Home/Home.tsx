/**
 * @Author JohnLi
 * @Date 2018/2/8 17:32
 */
import React, { Component } from 'react';
import Panel from '../../components/Panel/Panel';

class Home extends Component {
  list = [
    {content: 'sdgdsgsdg', title: 'sdgvsdgv'}
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
        {
          panelList
        }
      </React.Fragment>
    );
  }
}

export default Home;