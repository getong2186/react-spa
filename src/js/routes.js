import React from 'react'
import { Route, IndexRoute } from 'react-router'

import {
  App,
  Login,
  Homepage,
  HomepageDetail,
  Swa,
  SwaDetail,
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
    <Route path="swa">
      <IndexRoute component={Swa}/>
      <Route path=":id" component={SwaDetail}/>
    </Route>
    <Route path="user" component={User}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);