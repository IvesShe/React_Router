import React, { Component } from 'react'
import { Link,Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {

    state = {
        messageArr:[
            {id:'01',title:'消息1'},
            {id:'02',title:'消息2'},
            {id:'03',title:'消息3'},
        ]
    }

    replaceShow = (id,title) =>{
        // replace跳轉+攜帶params參數
        //this.props.history.replace(`/home/message/detail/${id}/${title}`);

        // replace跳轉+攜帶search參數
        this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`);

        // replace跳轉+攜帶state參數
        this.props.history.replace(`/home/message/detail`,{id,title});
    }

    pushShow = (id,title) =>{
        // replace跳轉+攜帶params參數
        //this.props.history.push(`/home/message/detail/${id}/${title}`);

        // replace跳轉+攜帶search參數
        //this.props.history.push(`/home/message/detail?id=${id}&title=${title}`);

        // replace跳轉+攜帶state參數
        this.props.history.push(`/home/message/detail`,{id,title});
    }

    render() {
        const {messageArr} = this.state;
        return (
            <div>
                <ul>
                    {
                        messageArr.map((msgObj) => {
                            return (
                                <li key={msgObj.id}>
                                    
                                    {/* 向路由組件傳遞params參數 */}
                                    {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}
                                    
                                    {/* 向路由組件傳遞search參數 */}
                                    {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}

                                    {/* 向路由組件傳遞state參數 */}
                                    <Link to={{pathname:'/home/message/detail',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>

                                    &nbsp;<button onClick={()=>{this.pushShow(msgObj.id,msgObj.title)}}>push查看</button>
                                    &nbsp;<button onClick={()=>{this.replaceShow(msgObj.id,msgObj.title)}}>replace查看</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>                
                {/* 聲明接收params參數 */}
                {/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}

                {/* search參數無需聲明接收，正常註冊路由即可 */}
                {/* <Route path="/home/message/detail" component={Detail}/> */}

                {/* state參數無需聲明接收，正常註冊路由即可 */}
                <Route path="/home/message/detail" component={Detail}/>
            </div>
        )
    }
}
 