import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image,
    AlertIOS,
    TouchableOpacity
} from 'react-native';

export default class Information extends Component {
    static propTypes = {
      information: React.PropTypes.object,
      onThumbs: React.PropTypes.func,
      onToDetail: React.PropTypes.func
    }
    static defaultProps = {
        information: {
            time: '2017-7-7',
            content: '这是内容',
            author: '作者',
            id: '1',
            img_list: [],
            thumbs: false,
            thumbs_count: 0,
            reply_count: 0
        },
        onThumbs: () => {},
        onToDetail: () => {}
    }
    render() {
        let information = this.props.information;
        return (
            <View style={style.container}>
                <View style={style.content}>
                    <Text style={style.author}>{information.author}</Text>
                    <Text style={style.time}>{information.time}</Text>
                    <Text style={style.info}>{information.content}</Text>
                    {information.img_list.map((img) => {
                        return (
                            <Image source={img.url} />
                        )
                    })}
                </View>
                <View style={style.buttonContainer}>
                    <TouchableOpacity onPress={this.props.onThumbs} activeOpacity={0.8}>
                        <View style={style.iconBox}>
                            <Text style={style.count}>{information.thumbs_count}</Text>
                            <Image 
                                source={require('./zan.png')} 
                                style={information.thumbs ? style.imgSelected : style.img} 
                                onClick={this.props.onThumbs} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.onToDetail} activeOpacity={0.8}>
                        <View style={style.iconBox}>
                            <Text style={style.count}>{information.reply_count}</Text>
                            <Image source={require('./reply.png')} style={style.img} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const style = StyleSheet.create({
    container: {
        backgroundColor: '#fcfcfc',
        borderBottomWidth: 0.5, 
        borderBottomColor: '#ddd'
    },
    content: {
        padding: 30,
        position: 'relative'
    },
    info: {
        color: '#222',
        textAlign: 'center'

    },
    author: {
        position: 'absolute',
        left: 30,
        top: 8,
        fontSize: 12,
        color: '#999',
        lineHeight: 14
    },
    time: {
        position: 'absolute',
        right: 30,
        top: 8,
        fontSize: 12,
        color: '#999',
        lineHeight: 14
    },
    buttonContainer: {
        paddingBottom: 10,
        justifyContent: 'center',
        flexWrap: "wrap",
        flexDirection: "row",
    },
    img: {
        width: 25,
        height: 25,
        marginLeft: 5,
        marginRight: 5
    },
    imgSelected: {
        width: 25,
        height: 25,
        marginLeft: 5,
        marginRight: 5,
        tintColor: '#63B8FF'
    },
    iconBox: {
        position: 'relative'
    },
    count: {
        position: 'absolute',
        top: 0,
        right: 0,
        fontSize: 6,
        zIndex: 1,
        color: '#63B8FF'
    }

})