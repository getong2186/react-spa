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
    <Route path="swa" component={Swa}>
      {/* <IndexRoute />
      <Route path="swaDetail" component={SwaDetail}/> */}
    </Route>
    <Route path="swaDetail" component={SwaDetail}></Route>
    <Route path="user" component={User}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);