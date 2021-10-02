import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { HTMLElementEventType } from "../../Types/Types";
import { BootstrapCssMin } from "../BootstrapCss";


@customElement("nav-bar")
class NavBar extends LitElement {
    static styles = [BootstrapCssMin, css`
  
    `];

    @property() pathname: string = location.pathname;


    render() {
        return html`
    <nav class="nav nav-justified nav-pills nav-tabs">
        <slot></slot>
    </nav>
        `;
    }


}

