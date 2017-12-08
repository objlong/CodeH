import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
    WebView
} from 'react-native';
import TabNavigator from "react-native-tab-navigator";
import InformationList from '../InformationList/InformationList.js'

export default class HomePage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'ss'
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <TabNavigator style={styles.container}>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'info'}
                        title='测试1'
                        selectedTitleStyle={{color:'#63B8FF'}}
                        renderIcon={() => <Image
                            style={styles.icon}
                            source={require('./info.png')} 
                        />}
                        renderSelectedIcon={() => <Image
                            style={[styles.icon, {tintColor: '#63B8FF'}]}
                            source={require('./info.png')} 
                        />}
                        onPress={() => this.setState({selectedTab: 'info'})}
                    >
                        <WebView source={{uri: 'https://www.baidu.com'}}></WebView> 
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'ss'}
                        title='测试2'
                        selectedTitleStyle={{color:'#63B8FF'}}
                        renderIcon={() => <Image
                            style={styles.icon}
                            source={require('./circle.png')} 
                        />}
                        renderSelectedIcon={() => <Image
                            style={[styles.icon, {tintColor: '#63B8FF'}]}
                            source={require('./circle.png')} 
                        />}
                        onPress={() => this.setState({selectedTab: 'ss'})}
                    >
                        <InformationList />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'aaa'}
                        title='测试3'
                        selectedTitleStyle={{color:'#63B8FF'}}
                        renderIcon={() => <Image
                            style={styles.icon}
                            source={require('./me.png')} 
                        />}
                        renderSelectedIcon={() => <Image
                            style={[styles.icon, {tintColor: '#63B8FF'}]}
                            source={require('./me.png')} 
                        />}
                        onPress={() => this.setState({selectedTab: 'aaa'})}
                    >
                        <View style={{backgroundColor:'#eee',flex:1}}></View> 
                    </TabNavigator.Item>
                </TabNavigator> 
            </View>
        )
    }
    componentWillUnmount(){  
        this.listener.remove();  
    }  
}

const styles=StyleSheet.create({  
    container:{  
        flex:1
    },  
    icon:{  
        width:26,  
        height:26  
    }  
}); 