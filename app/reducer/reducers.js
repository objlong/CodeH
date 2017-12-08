import * as types from '../actions/types'
import {
    StyleSheet,
    View,
    Text,
    AlertIOS
} from 'react-native';

const initialState = {
    informationList: []
}

let newState;
export default function (state = initialState, action = {}) {
    switch (action.type) {
        //获取匿名信息列表
        case types.IMFORMATION_LIST:
            return {
                ...state,
                informationList: action.informationList
            }
        case types.THUMBS:
            newState = JSON.parse(JSON.stringify(state));
            let n = action.infoNum;
            let bool = !newState.informationList[n].thumbs;
            newState.informationList[n].thumbs = bool;
            bool ? newState.informationList[n].thumbs_count++ : newState.informationList[n].thumbs_count--;

            return newState;
        default:
            return state
    }
}