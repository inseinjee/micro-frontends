import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class Cart extends HTMLElement {
    connectedCallback() {
        console.log("##### connectedCallback()")
        // DOM 이후, 렌더링 등의 처리
        ReactDOM.render( <App />, this.attachShadow({mode: 'open'}))
    }
}
customElements.define('microfrontends-cart', Cart);