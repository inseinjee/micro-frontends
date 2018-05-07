import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class Header extends HTMLElement {
    connectedCallback() {
        ReactDOM.render( <App />, this.attachShadow({mode:'open'}));
    }
}
customElements.define('microfrontends-header', Header);
