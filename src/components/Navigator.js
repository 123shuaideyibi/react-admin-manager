import React, { Component } from 'react';
import { Menu, Icon } from 'antd'
import 'antd/dist/antd.css'
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

class Navigator extends Component {
    render() {
        return (
            <div className="navigator">
                {/*导航栏*/}
                <Menu
                    theme="light"
                    mode="inline">
                    <Menu.Item
                        key="home">
                        <Link to="/">
                            <Icon type="home" />
                            <span>首页</span>
                        </Link>
                    </Menu.Item>

                    <SubMenu
                        key="users"
                        title={
                            <span>
                                <Icon type="user" />
                                <span>用户管理</span>
                            </span>
                        }>
                        <Menu.Item><Link to="/userlist/">用户列表</Link></Menu.Item>
                        <Menu.Item><Link to="/articlelist/">文章列表</Link></Menu.Item>
                    </SubMenu>
                    <Menu.Item
                        key="settings">
                        <Icon type="setting" />
                        <span>设置中心</span>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default Navigator;
