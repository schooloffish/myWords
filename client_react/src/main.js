import ReactDOM from 'react-dom';
// React is not used here, but it would throw "React is undefined" error if remove this line
import React from 'react';
import { App } from './app';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
import { SentenceStore } from './sentenceStore';
import { WordListStore } from './wordListStore';
import { PhraseStore } from './phraseStore';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = { sentenceStore: new SentenceStore(), wordListStore: new WordListStore(), phraseStore: new PhraseStore() };

ReactDOM.render(
    <Provider {...store}>
        <BrowserRouter>
            <App>
            </App>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app'));