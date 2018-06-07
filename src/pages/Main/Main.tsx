/**
 * @Author JohnLi
 * @Date 2018/2/7 16:13
 */
import React, { Component } from 'react';
import './Main.css';

import AppSidebar from './AppSidebar/AppSidebar';
import AppHeader from './AppHeader/AppHeader';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { routing } from '../../routing/routing';
import { Drawer } from 'antd-mobile';

import { createStore } from 'redux';
import reducer from '../../store/reducers/index';

interface MainState {
    open: boolean;
}

class Main extends Component<any, MainState> {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
      this.setState({
          open: false
      });
      window['store'] = createStore(reducer);
    }

    toggleDrower(status) {
        this.setState({
            open: status
        });
    }

    onOpenChange(status) {
        this.setState({
            open: status
        });
    }

    render() {
        return (
            <React.Fragment>
                <Router>
                    <Drawer
                        className="my-drawer"
                        style={{minHeight: document.documentElement.clientHeight}}
                        contentStyle={{color: '#A6A6A6', textAlign: 'center'}}
                        sidebar={<AppSidebar/>}
                        open={this.state.open}
                        position={'left'}
                        onOpenChange={(status) => { this.onOpenChange(status); }}
                    >
                        <AppHeader toggleDrawer={(status) => { this.toggleDrower(status); }}/>
                        <div className={'app-body'}>
                          <Switch>
                            {routing.map(route => {
                              return route.redirect ?
                                <Redirect path={route.path} to={route.to} key={route.path}/> :
                                <Route path={route.path} component={route.component} key={route.path}/>;
                            })}
                          </Switch>
                        </div>
                    </Drawer>
                </Router>
            </React.Fragment>
        );
    }
}

export default Main;