import React, { Component } from 'react';
// redux和router
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import routes from './router'
// 引入样式
import './static/css/App.scss'
// 一级路由页面
import Aside from "./pages/Aside";
import Header from "./pages/Header";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="app">
                        <div className="leftArea">
                            {/*侧边区域*/}
                            <Aside />
                        </div>
                        <div className="rightArea">
                            {/*头部*/}
                            <Header />
                            {/*内容区域*/}
                            {
                                routes.map((route, key) => {
                                    if (route.exact) {
                                        return (<Route
                                            key={key}
                                            exact
                                            path={route.path}
                                            render={props => (
                                                <route.component {...props} />
                                            )} />)
                                    } else {
                                        return (<Route
                                            key={key}
                                            path={route.path}
                                            render={props => (
                                                <route.component {...props} />
                                            )} />)
                                    }
                                })
                            }
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
