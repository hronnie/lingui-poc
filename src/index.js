import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { I18nProvider } from '@lingui/react';
import catalogCs from './locales/de/messages.js'
const catalogs = { de: catalogCs };

const AppI18n = () => (
    <I18nProvider language="de" catalogs={catalogs}>
        <App />
    </I18nProvider>
)

ReactDOM.render(<AppI18n />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
