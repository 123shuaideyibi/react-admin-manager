import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuList from "../components/MenuList";
import { changeLeftAction } from '../store/actionCreators';

class Header extends Component {

    render() {
        console.log(`state中的值${this.props.isLeftShow}`);
        return (
            <div className="topMenu" style={{
                width: '100%',
                height: '50px',
                background: '#DAEDD8',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '5px 20px'
            }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    {/*控制左侧区域的显隐*/}
                    <i className="iconfont iconmenu" onClick={this.changeLeft.bind(this)} />
                    {/*标题*/}
                    <span style={{ fontSize: '18px', fontWeight: 'bold', marginLeft: '20px' }}>用户管理系统</span>
                </div>
                {/*菜单列表*/}
                <MenuList />
            </div>
        );
    }

    控制左侧区域的显隐
    changeLeft = () => {
        this.props.changeLeftAction();
    }
}

// 获取状态
const mapStateProps = (state) => {
    return {
        isLeftShow: state.isLeftShow
    }
}

// 派发行为
const mapDispatchProps = (dispatch) => {
    return {
        changeLeftAction() {
            const action = changeLeftAction();
            dispatch(action);
        }
    }
}

export default connect(mapStateProps, mapDispatchProps)(Header);