/**
 * @Author JohnLi
 * @Date 2018/2/8 18:13
 */
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Axios from '../pages/Axios/Axios';
import Charts from '../pages/Charts/Charts';
import Login from '../pages/Login/Login';
import AppUpload from '../components/AppUpload/AppUpload';

interface Route {
  path: string;
  component?: Object;
  name?: string;
  icon?: string;
  redirect?: boolean;
  to?: string;
}
export const routing: Route[] = [
  {path: '/home', name: '主页', component: Home, icon: 'fa-home'},
  {path: '/about', name: '关于我', component: About, icon: 'fa-user'},
  {path: '/chart' , name: '图', component: Charts, icon: 'fa-chart-pie'},
  {path: '/axios' , name: '请求', component: Axios},
  {path: '/login' , name: '登录', component: Login},
  {path: '/test' , name: '测试', component: AppUpload},
  {path: '/', redirect: true, to: 'home'}
];
