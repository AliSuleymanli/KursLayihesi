import { LitElement, html, css, property, TemplateResult } from 'lit-element';
import { openWcLogo } from './open-wc-logo.js';
import  './Components/Login/Login.js';
import './Components/Menu/Menu.js';
import { User } from './Models/Entities/User.js';
import { RequestForUserValidate } from './Services/Http/UserHttp.js';
import { getUserFromStorage } from './Services/LocalStorage.js';
import { UserToUserValidateRqsModelAdapter } from './Adapters/UserAdapters.js';
import { MobxLitElement } from '@adobe/lit-mobx';
import { store} from './Store/Store';

$.ajaxSetup({
  headers: {
      'Authorization': 'Basic ' + btoa('allgrant:gtg')
  },
  crossDomain: true,
  //beforeSend: function (xhr) {
  //    xhr.setRequestHeader('allgrant', 'd913m')
  //}
  //beforeSend: function (xhr) {
  //    xhr.setRequestHeader("Authorization", "Basic " + btoa('dea' + ":" + 'd913m'));
  //},
});


export class KursApp extends MobxLitElement {


  @property({ type: String }) title = 'My app';

  static styles =[ css`
    :host {
      min-height: 100vh;
    }

    main {
      flex-grow: 1;
    }

    .logo > svg {
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `];

    constructor(){
      super();
    }

  public render(): TemplateResult {
    let dis=this;
    
    return html`
    ${store.userValidate.validated==true
    ?html`    
      <app-menu>
        <slot></slot>
      </app-menu>
      
    `
    :html`
      <log-in></log-in>
    `}
      
    `;
  }



  get actions(){
    interface MY{

    }

    let my :MY ={init:Function}; let dis=this;

    return my;
  }
}
