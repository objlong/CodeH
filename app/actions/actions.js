import * as types from './types'
import {AlertIOS} from 'react-native'

//获取匿名信息
let onoff = false;
export const getInformationList = (mark, callback) => {
    //fetch
    if (onoff) return false;
    onoff = true;

    return (dispatch, getState) => {

        setTimeout(function() {
            let informationList = [];
            if (!mark) {
                informationList = [
                    {
                        time: '2017-7-7',
                        content: '这是内容',
                        author: '作者',
                        id: '1',
                        img_list: [],
                        thumbs: false,
                        thumbs_count: 100,
                        reply_count: 200
                    },
                    {
                        time: '2017-7-8',
                        content: '这是内容2',
                        author: '作者2',
                        id: '2',
                        img_list: [],
                        thumbs: false,
                        thumbs_count: 200,
                        reply_count: 300
                    },
                    {
                        time: '2017-7-8',
                        content: '这是内容3',
                        author: '作者3',
                        id: '3',
                        img_list: [],
                        thumbs: false,
                        thumbs_count: 200,
                        reply_count: 300
                    },
                    {
                        time: '2017-7-8',
                        content: '这是内容4',
                        author: '作者4',
                        id: '4',
                        img_list: [],
                        thumbs: false,
                        thumbs_count: 200,
                        reply_count: 300
                    },
                    {
                        time: '2017-7-8',
                        content: '这是内容5',
                        author: '作者5',
                        id: '5',
                        img_list: [],
                        thumbs: false,
                        thumbs_count: 200,
                        reply_count: 300
                    },
                    {
                        time: '2017-7-8',
                        content: '这是内容6',
                        author: '作者6',
                        id: '6',
                        img_list: [],
                        thumbs: false,
                        thumbs_count: 200,
                        reply_count: 300
                    },
                    {
                        time: '2017-7-8',
                        content: '这是内容7',
                        author: '作者7',
                        id: '7',
                        img_list: [],
                        thumbs: false,
                        thumbs_count: 200,
                        reply_count: 300
                    },
                    {
                        time: '2017-7-8',
                        content: '这是内容8',
                        author: '作者8',
                        id: '8',
                        img_list: [],
                        thumbs: false,
                        thumbs_count: 200,
                        reply_count: 300
                    },
                    {
                        time: '2017-7-8',
                        content: '这是内容9',
                        author: '作者9',
                        id: '9',
                        img_list: [],
                        thumbs: false,
                        thumbs_count: 200,
                        reply_count: 300
                    },
                    {
                        time: '2017-7-8',
                        content: '这是内容10',
                        author: '作者10',
                        id: '10',
                        img_list: [],
                        thumbs: false,
                        thumbs_count: 200,
                        reply_count: 300
                    },

                ]
            } else {
                informationList = [
                    {
                        time: '2017-7-7',
                        content: '这是内容11',
                        author: '作者11',
                        id: '11',
                        img_list: [],
                        thumbs: false,
                        thumbs_count: 100,
                        reply_count: 200
                    },
                    {
                        time: '2017-7-8',
                        content: '这是内容12',
                        author: '作者12',
                        id: '12',
                        img_list: [],
                        thumbs: false,
                        thumbs_count: 200,
                        reply_count: 300
                    },
                    {
                        time: '2017-7-8',
                        content: '这是内容13',
                        author: '作者13',
                        id: '13',
                        img_list: [],
                        thumbs: false,
                        thumbs_count: 200,
                        reply_count: 300
                    },
                    {
                        time: '2017-7-8',
                        content: '这是内容14',
                        author: '作者14',
                        id: '14',
                        img_list: [],
                        thumbs: false,
                        thumbs_count: 200,
                        reply_count: 300
                    },
                    {
                        time: '2017-7-8',
                        content: '这是内容15',
                        author: '作者15',
                        id: '15',
                        img_list: [],
                        thumbs: false,
                        thumbs_count: 200,
                        reply_count: 300
                    },
                    {
                        time: '2017-7-8',
                        content: '这是内容16',
                        author: '作者16',
                        id: '16',
                        img_list: [],
                        thumbs: false,
                        thumbs_count: 200,
                        reply_count: 300
                    },
                    {
                        time: '2017-7-8',
                        content: '这是内容17',
                        author: '作者17',
                        id: '17',
                        img_list: [],
                        thumbs: false,
                        thumbs_count: 200,
                        reply_count: 300
                    },
                    {
                        time: '2017-7-8',
                        content: '这是内容18',
                        author: '作者18',
                        id: '18',
                        img_list: [],
                        thumbs: false,
                        thumbs_count: 200,
                        reply_count: 300
                    },
                    {
                        time: '2017-7-8',
                        content: '这是内容19',
                        author: '作者19',
                        id: '19',
                        img_list: [],
                        thumbs: false,
                        thumbs_count: 200,
                        reply_count: 300
                    },
                    {
                        time: '2017-7-8',
                        content: '这是内容20',
                        author: '作者20',
                        id: '20',
                        img_list: [],
                        thumbs: false,
                        thumbs_count: 200,
                        reply_count: 300
                    }

                ];

                informationList = getState().informationList.concat(informationList);
            }
            callback && callback();

            onoff = false;
            dispatch(pushInformationList(informationList));
        }, 2000)
    }

}
export const pushInformationList = (informationList) => {
    return {type: types.IMFORMATION_LIST, informationList: informationList}
}

//修改点赞信息
export const changeThumbs = n => {
    return {type: types.THUMBS, infoNum: n}
}