import React, { Component } from 'react';
import '../../static/css/Personal.scss'

class Personal extends Component {
    render() {
        return (
            <div className="personal">
                <div>
                    <label>aaa</label>
                    <input placeholder="用户名"/>
                </div>

                <hr/>

                <h2>安全设置</h2>
                <span>用户名<input/></span>
                <span>旧密码<input/></span>
                <span>新密码<input/></span>
                <span>确认密码<input/></span>
            </div>
        );
    }
}

export default Personal;
