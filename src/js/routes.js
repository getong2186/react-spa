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
      
      {/* 404 */}
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Router>
  
);