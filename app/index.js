import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducer/reducers'
import NavIndex from './containers/NavIndex';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

export default class index extends Component{
    render() {
        return (
            <Provider store={store}>
                <NavIndex></NavIndex>
            </Provider>
        )
    }
}