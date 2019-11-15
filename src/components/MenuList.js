import React, { Component } from 'react';
import { Menu, Dropdown, Badge } from 'antd'
import 'antd/dist/antd.css'
// 引入路由
import { Link } from 'react-router-dom'

const settings = (
    <Menu>
        <Menu.Item>控制台1</Menu.Item>
        <Menu.Item>控制台2</Menu.Item>
        <Menu.Item>控制台3</Menu.Item>
    </Menu>
);

class MenuList extends Component {
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ margin: '0 10px', cursor: 'pointer' }}>
                    <span>
                        <i className="iconfont iconuser" />
                        <span><Link to="/personal/" style={{color:'black'}}>个人中心</Link></span>
                    </span>
                </div>
                <div style={{ margin: '0 10px', cursor: 'pointer' }}>
                    <Dropdown overlay={settings}>
                        <span>
                            <i className="iconfont iconconsole" />
                            <span>控制台</span>
                        </span>
                    </Dropdown>
                </div>
                <div style={{ margin: '0 10px', cursor: 'pointer' }} title="消息">
                    <Badge dot>
                        <i className="iconfont iconnotice" />
                    </Badge>
                </div>
                <div style={{ margin: '0 10px', cursor: 'pointer' }} title="退出">
                    <span>
                        <i className="iconfont iconexit" />
                        <span>退出</span>
                    </span>
                </div>
            </div>
        );
    }
}

export default MenuList;
