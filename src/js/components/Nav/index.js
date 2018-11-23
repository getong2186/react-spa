import React, { Component } from 'react'
import NavLink from './NavLink'
import styles from './index.scss'

export default class Nav extends Component {
  render() {
    return (
      <div>
        <div style={{height:'1.2rem'}}></div>
        <div className={styles.root}>
          <NavLink
            pathUrl="/"
            active={styles.navIndex}
            linkName="首页"
            onlyActiveOnIndex
          />
          {/* <NavLink
            pathUrl="/coupon"
            active={styles.navThree}
            linkName="通讯录"
          /> */}
          <NavLink
            pathUrl="/tour"
            active={styles.navSwa}
            linkName="密码管家"
          />
          <NavLink
            pathUrl="/user"
            active={styles.navMine}
            linkName="我的"
          />
        </div>
      </div>
    )
  }
}

