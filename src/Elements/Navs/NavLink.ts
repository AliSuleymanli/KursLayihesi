import { MobxLitElement } from "@adobe/lit-mobx";
import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { HTMLElementEventType } from "../../Types/Types";
import { BootstrapCssMin } from "../BootstrapCss";
import { navUiStore } from "./NavUIStore";


@customElement("nav-link")
class Navlink extends MobxLitElement {
    static styles = [BootstrapCssMin, css`
        a{
            color:white!important;
            text-decoration:none;
            flex:1;
        }

        :host{
            display:flex;
            flex:1;
            text-align:center;
            border-left:1px solid white;
        }

        a.active{
            background: rgb(17, 17, 17)!important;
        }
    `];

    @property() pathname: string = location.pathname;
    @property({ reflect: true }) class = '';

    render() {
        let dis = this;
        return html`
        <a class="${this.isActive(dis.pathname)} nav-link" href="${this.pathname}" @click="${this.changeLocationPathName}">
            <slot></slot>
        </a>
        `;
    }

    isActive(href: string): string {
        return href == navUiStore.pathname ? "active" : "";
    }

    changeLocationPathName(e: HTMLElementEventType<HTMLAnchorElement>) {
        let target = e.currentTarget || e.target;
        let { origin, href } = target;

        navUiStore.pathname = href.substring(origin.length);;

    }
}

export { Navlink }

