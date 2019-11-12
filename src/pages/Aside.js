import React, {Component} from 'react';
import Portrait from "../components/Portrait";
import Navigator from "../components/Navigator";

class Aside extends Component {
    render() {
        return (
            <div className="leftNavagitor" style={{display:'flex',flexDirection:'column'}}>
                {/*头像*/}
                <Portrait/>
                {/*导航组件*/}
                <Navigator/>
            </div>
        );
    }
}

export default Aside;
