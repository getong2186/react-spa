import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import {
  App,
  Login,
  LoginServer,
  Homepage,
  HomepageSearch,
  Swa,
  SwaDetail,
  User,
  UserPersonalCenter,
  UserChangePassword,
  UserDevice,
  NotFoundPage,
} from './containers'

export default (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Login}/>

      {/* 服务器地址 */}
      <Route path="server" component={LoginServer}></Route>

      {/* 首页 */}
      <Route path="homepage" component={Homepage}></Route>
      {/* 首页搜索 */}
      <Route path="homepageSearch" component={HomepageSearch}/>
      
      {/* 密码管家 */}
      <Route path="swa" component={Swa}/>
      {/* 密码管家详情 */}
      <Route path="swaDetail" component={SwaDetail}/>
      
      {/* 我的 */}
      <Route path="user" component={User}/>
      {/* 个人中心 */}
      <Route path="userPersonalCenter" component={UserPersonalCenter}/>
      {/* 修改密码 */}
      <Route path="userChangePassword" component={UserChangePassword}/>
      {/* 设备管理 */}
      <Route path="userDevice" component={UserDevice}/>
      
      {/* 404 */}
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Router>
  
);