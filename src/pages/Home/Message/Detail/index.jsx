import React, { Component } from 'react'
// import qs from 'querystring'

const DetailData = [
    { id: '01', content: '您好，Vue!!!' },
    { id: '02', content: '您好，React!!!' },
    { id: '03', content: '您好，Node!!!' },
]
export default class Detail extends Component {
    render() {
        console.log(this.props);

        // 接收params參數
        //const {id,title} = this.props.match.params;

        // 接收search參數
        // const {search} = this.props.location;
        // const {id,title} = qs.parse(search.slice(1));

        // 接收state參數
        const {id,title} = this.props.location.state || {};

        const findResult = DetailData.find((detailObj)=>{
            return detailObj.id === id
        }) || {}

        return (
            <div>
                <li>ID: {id}</li>
                <li>TITLE: {title}</li>
                <li>CONTENT: {findResult.content}</li>
            </div>
        )
    }
}
