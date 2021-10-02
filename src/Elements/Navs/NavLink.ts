import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { HTMLElementEventType } from "../../Types/Types";
import { BootstrapCssMin } from "../BootstrapCss";


@customElement("nav-link")
class Navlink extends LitElement {
    static styles = [BootstrapCssMin, css`
  
    `];

    @property() pathname: string = location.pathname;


    render() {
        return html`
        <a class="nav-link ${this.isActive(this.pathname)}" href="${this.pathname}" @click="${this.changeLocationPathName}">
            <slot></slot>
        </a>
        `;
    }

    isActive(href: string): string {
        return href == this.pathname ? "active" : "";
    }

    changeLocationPathName(e: HTMLElementEventType<HTMLAnchorElement>) {
        let target = e.currentTarget || e.target;
        let { origin, href } = target;
        this.pathname = href.substring(origin.length);


        const event = new CustomEvent('link-clicked', {
            detail: {
                message: this.pathname
            }
        });
        this.dispatchEvent(event);
    }


}

