import '@babel/polyfill';
import * as React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import * as styles from './styles';
import Alert from './components/common/Alert.jsx';

import store from './redux/configStore.js';

import Park from './components/Park.jsx';

ReactDom.render(
  <Park render={loc => <Alert alert={loc} />} />,
  document.getElementById('mountNode')
);
