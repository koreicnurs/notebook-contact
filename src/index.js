import React from 'react';
import App from './App';
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import contactsReducer from "./store/reducers/contactsReducer";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import contactInfoReducer from "./store/reducers/contactInfoReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    contactsCombine: contactsReducer,
    contactInfo: contactInfoReducer,
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);
