import React, { Component } from 'react';
import { Modal } from 'antd'
import '../static/css/Portrait.scss'

class Portrait extends Component {
    state = {
        visible: false,
        visible2: false
    };

    render() {
        return (
            <div className="portrait">
                <img
                    className="portrait-img"
                    src={require('../static/img/person.png')}
                    alt="132"
                    onClick={this.showModal} />
                <span className="portrait-name" onClick={this.showModal2}>君哥哥2</span>

                {/* 头像 */}
                <Modal
                    title="头像"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}>

                </Modal>
                {/* 昵称 */}

                <Modal
                    title="昵称"
                    visible={this.state.visible2}
                    onOk={this.handleOk2}
                    onCancel={this.handleCancel2}>
                </Modal>
            </div>
        );
    }

    // 头像弹出框
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

    // 昵称弹出框
    showModal2 = () => {
        this.setState({
            visible2: true,
        });
    };

    handleOk2 = () => {
        this.setState({
            visible2: false,
        });
    };

    handleCancel2 = () => {
        this.setState({
            visible2: false,
        });
    };
}

export default Portrait;
