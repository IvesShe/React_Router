import React, { Component } from 'react'
import { Route,Switch,Redirect } from 'react-router-dom'
import Home from './pages/Home'  // 路由組件
import About from './pages/About' // 路由組件
import Header from './components/Header'  // 一般組件
import MyNavLink from './components/MyNavLink'  // 一般組件

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header a={1}/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生html中，靠<a>跳轉不同的頁面 */}
              {/* <a className="list-group-item" href="./about.html">About</a>
                <a className="list-group-item active" href="./home.html">Home</a> */}

              {/* 在React中靠路由鏈接實現切換組件--編寫路由鏈結 */}
              {/* <NavLink activeClassName="ivesTest" className="list-group-item" to="/about">About</NavLink>
              <NavLink activeClassName="ivesTest" className="list-group-item" to="/home">Home</NavLink> */}
              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 註冊路由 */}
                <Switch>
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                  <Redirect to="/about"/>
                </Switch>                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
