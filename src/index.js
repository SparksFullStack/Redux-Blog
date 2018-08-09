import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

// component imports
import PostsIndex from "./containers/PostsIndex";
import PostsNew from "./containers/PostsNew";

const createStoreWithMiddleware = createStore(rootReducer, applyMiddleware(promise));

ReactDOM.render(
<Provider store={createStoreWithMiddleware}>
    <BrowserRouter>
        <div>
            <Switch>
                <Route path='/posts/new' component={PostsNew} />
                <Route path='/' component={PostsIndex} />
            </Switch>
        </div>
    </BrowserRouter>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
