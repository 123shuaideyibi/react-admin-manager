import { CHANGE_LEFT } from './actionTypes'

// 默认的数据
const defaultState = {
    isLeftShow: true,
}
export default (state = defaultState, action) => {

    if (action.type === CHANGE_LEFT) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.isLeftShow = !newState.isLeftShow;
        return newState;
    }

    return state;
}
