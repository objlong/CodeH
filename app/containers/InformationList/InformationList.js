import React, { Component } from 'react';
import {connect} from 'react-redux';
import Information from '../../components/Information/Information';
import LoadMore from '../../components/LoadMore/LoadMore';
import AllLoading from '../../components/AllLoading/AllLoading';
import CommentList from '../CommentList/CommentList';
import {getInformationList, changeThumbs} from '../../actions/actions'

import {
    StyleSheet,
    View,
    Text,
    AlertIOS,
    ListView,
    RefreshControl
} from 'react-native';

let mark = 0, onoff = false;

class InformationList extends Component {
    static propTypes = {
      informationList: React.PropTypes.array,
      getInformationList: React.PropTypes.func,
      changeThumbs: React.PropTypes.func,
    }
    constructor(props) {
        super(props);

        this.state = {
            headLoading: false,
            headLoadingText: '加载中',
            footerLoadingText: '上拉加载更多'
        }
    }
    componentDidMount() {
        this.props.getInformationList(mark);
    }
    _getData() {
        console.log(this.state.headLoading)
        let _this = this;

        if (!this.state.headLoading) {
            this.setState({
                headLoading: true,
                headLoadingText: '加载中'
            });
            mark = 0;
            this.props.getInformationList(mark, () => {
                _this.setState({
                    headLoading: false,
                    headLoadingText: '加载完成'
                });
            });
        } else {
            return false;
        }
    }
    _loadMore(e) {

        let offsetY = e.nativeEvent.contentOffset.y,
            outerH = e.nativeEvent.layoutMeasurement.height,
            boxH = e.nativeEvent.contentSize.height;

        if (offsetY + outerH >= boxH) {
            if (onoff) return false;

            onoff = true;
            this.setState({
                footerLoadingText: '加载中'
            });

            mark++;
            this.props.getInformationList(mark, () => {
                this.setState({
                    footerLoadingText: '上拉加载更多'
                });
                onoff = false;
            });
        }
    }
    handleThumbs(id) {
        this.props.changeThumbs(id);
    }
    handleToDetail(id) {

    }
    renderList() {
        let informationList = this.props.informationList;
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let dataSource = ds.cloneWithRows(informationList);

        if (informationList.join('')) {
            return (
                <ListView
                    refreshControl={
                        <RefreshControl
                            onRefresh={() => {this._getData()}}
                            refreshing={this.state.headLoading}
                            title={this.state.headLoadingText}
                            tintColor='#63B8FF'
                             />
                    }
                    dataSource={dataSource}
                    enableEmptySections={true}
                    renderRow={(rowData, sectionID, rowID) => {
                        return (<Information 
                            information={rowData} 
                            onThumbs={this.handleThumbs.bind(this, rowID)}
                            onToDetail={this.handleToDetail.bind(this, rowID)}
                        />)
                    }}
                    renderFooter={() => {
                        return (<LoadMore footerLoadingText={this.state.footerLoadingText} />)
                    }}
                    onScroll={(e) => this._loadMore(e)}>
                </ListView>
            )
        } else {
            return (
                <AllLoading/>
            )
        }
    }
    render() {

        return (
            <View>
                {this.renderList()}
            </View>
        )
    }
}
const mapStateToProps = state => {
    return {
        informationList: state.informationList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getInformationList: (mark, callback) => {
            dispatch(getInformationList(mark, callback))
        },
        changeThumbs: (id) => {
            dispatch(changeThumbs(id))
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InformationList)