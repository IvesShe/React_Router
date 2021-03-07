import React, { Component } from 'react'
import { Route,Switch,Redirect } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'  // 一般組件
import News from './News'
import Message from './Message'

export default class Home extends Component {
    render() {
        // console.log('Home組件收到的props是 ',this.props);
        return (
            <div>
                <h3>我是Home的内容</h3>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            {/* <a className="list-group-item" href="./home-news.html">News</a> */}
                            <MyNavLink to="/home/news">News</MyNavLink>
                        </li>
                        <li>
                            {/* <a className="list-group-item active" href="./home-message.html">Message</a> */}
                            <MyNavLink to="/home/message">Message</MyNavLink>
                        </li>
                    </ul>
                    <div>
                        {/* 註冊路由 */}
                        <Switch>
                            <Route path="/home/news" component={News} />
                            <Route path="/home/message" component={Message} />
                            <Redirect to="/home/news" />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}
