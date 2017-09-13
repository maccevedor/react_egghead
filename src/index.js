import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <App
                    cat={5}
                    txt="esto es un texto"
                    proppapa="lkdghihdeg"
                /> , document.getElementById('root'));
registerServiceWorker();
