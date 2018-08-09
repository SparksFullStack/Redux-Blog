import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import { BrowserRouter, Route } from 'react-router-dom';
import promise from 'redux-promise';

// component imports
import PostsIndex from "./components/PostsIndex";

const createStoreWithMiddleware = createStore(rootReducer, applyMiddleware(promise));

ReactDOM.render(
<Provider store={createStoreWithMiddleware}>
    <BrowserRouter>
        <div>
            <Route path='/' exact component={PostsIndex} />
        </div>
    </BrowserRouter>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
