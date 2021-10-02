import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { StudentsContainerCss } from "../../Components/Students/StudentsContainer/StudentsContainerCss";
import { HTMLElementEventType } from "../../Types/Types";
import { BootstrapCssMin } from "../BootstrapCss";


@customElement("nav-link")
class Navlink extends LitElement {
    static styles = [BootstrapCssMin, css`
        a{
            color:white!important;
            text-decoration:none;
        }
    `];

    @property() pathname: string = location.pathname;
    @property({ reflect: true }) class = 'nav-link';

    render() {
        return html`
        <a class="${this.isActive(this.pathname)}" href="${this.pathname}" @click="${this.changeLocationPathName}">
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

