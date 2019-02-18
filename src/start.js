import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ar from 'react-intl/locale-data/ar';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxPromise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from "./reducers";
import { changeLang } from "./actions";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(reduxPromise)));

addLocaleData(en);
addLocaleData(ar);

if (localStorage.faradisLang) {
    console.log("localStorage exissts in the start",localStorage.faradisLang);
    store.dispatch(changeLang(localStorage.faradisLang));
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.querySelector('main')
);
