import React from 'react';
import ReactDOM from 'react-dom';
import { addLocaleData } from 'react-intl';
import dutchLocaleData from 'react-intl/locale-data/nl';

import { IntlProvider } from 'react-intl';
import AppContainer from './container/app';

import './index.css';

addLocaleData(dutchLocaleData);

ReactDOM.render((
    <IntlProvider locale="nl">
        <AppContainer />
    </IntlProvider>
), document.getElementById('root'));
