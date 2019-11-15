import React, {Component} from 'react';
import '../../static/css/Home.scss'
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Link to="/userlist/">用户列表</Link><br/>
                <Link to="/articlelist/">文章列表</Link>
            </div>
        );
    }
}

export default Home;
