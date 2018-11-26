import React from 'react'
import { Route, IndexRoute } from 'react-router'

import {
  App,
  Login,
  Homepage,
  HomepageDetail,
  Swa,
  User,
  NotFoundPage,
} from './containers'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login}/>
    <Route path="homepage">
      <IndexRoute component={Homepage}/>
      {/* <Route path=":id" component={HomepageDetail}/> */}
    </Route>
    <Route path="swa" component={Swa}/>
    <Route path="user" component={User}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);