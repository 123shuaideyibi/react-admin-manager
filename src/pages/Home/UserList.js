import React, {Component} from 'react';
import {Button, Modal, Table, Input} from 'antd';
import Column from 'antd/lib/table/Column';
//引入样式
import '../../static/css/UserList.scss'

const {confirm} = Modal;

const dataSource = [];
for (let i = 0; i < 100; i++) {
    dataSource.push({
        id: i,
        username: '胡彦斌',
        password: 32,
        phone: 123456789,
        email: '142365478@qq.com',
        createtime: '2019-1-1',
    })
}


class UserList extends Component {
    state = {visible: false};

    render() {
        return (
            <div className="userlist">
                <Button type="primary" onClick={this.showModal}>添加用户</Button>
                <br/>

                <Table
                    bordered
                    dataSource={dataSource}
                    scroll={{x: 'max-content', y: 400}}>
                    <Column title="ID" dataIndex="id" key="id"/>
                    <Column title="用户名" dataIndex="username" key="username"/>
                    <Column title="密码" dataIndex="password" key="password"/>
                    <Column title="手机号" dataIndex="phone" key="phone"/>
                    <Column title="邮箱" dataIndex="email" key="email"/>
                    <Column title="创建时间" dataIndex="createtime" key="createtime"/>
                    <Column
                        title="行为"
                        dataIndex="action"
                        key="action"
                        render={(text, record) => (
                            <span>
                                <Button type="primary"
                                        onClick={this.editUser.bind(this, record.id)}>编辑</Button>&nbsp;&nbsp;
                                <Button type="danger" onClick={this.deleteUse.bind(this, record.id)}>删除</Button>
                            </span>
                        )}/>
                </Table>

                {/*新增用户的对话框*/}
                <Modal
                    title="增加用户"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}>
                    <div className="addtabel" style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <table cellPadding="5">
                            <tr>
                                <td style={{textAlign: 'right'}}><label>ID：</label></td>
                                <td><Input placeholder="ID" style={{width: 200}}/></td>
                                <td><i className="iconfont iconcheck" title="重新生成"/></td>
                            </tr>
                            <tr>
                                <td style={{textAlign: 'right'}}><label>用户名：</label></td>
                                <td><Input placeholder="用户名" style={{width: 200}}/></td>
                                <td/>
                            </tr>
                            <tr>
                                <td style={{textAlign: 'right'}}><label>密码：</label></td>
                                <td><Input placeholder="密码" style={{width: 200}}/></td>
                                <td/>
                            </tr>
                            <tr>
                                <td style={{textAlign: 'right'}}><label>手机号：</label></td>
                                <td><Input placeholder="手机号" style={{width: 200}}/></td>
                                <td/>
                            </tr>
                            <tr>
                                <td style={{textAlign: 'right'}}><label>邮箱：</label></td>
                                <td><Input placeholder="邮箱" style={{width: 200}}/></td>
                                <td/>
                            </tr>
                        </table>
                    </div>
                </Modal>

                {/*删除列表某一项的对话框*/}
                <Modal/>
            </div>
        );
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({
            visible: false,
        });
    };

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };

    // 编辑用户
    editUser = (id) => {
        console.log('编辑id为' + id + '的用户');
    };

    // 删除用户
    deleteUse = (id) => {
        console.log('删除id为' + id + '的用户');
        confirm({
            title: `是否删除id为${id}的用户？`,
            okText: '是',
            cancelText: '否',
            okType: 'danger',
            onOk() {
                for (let i in dataSource) {
                    if (dataSource[i] === id) {
                        dataSource.splice(i, 1);//删除下标为i的元素
                    }
                }
            },
            onCancel() {
            },
        });
    }
}

export default UserList;
