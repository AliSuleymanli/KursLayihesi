import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { StudentsContainerCss } from "../../Components/Students/StudentsContainer/StudentsContainerCss";
import { HTMLElementEventType } from "../../Types/Types";
import { BootstrapCssMin } from "../BootstrapCss";


@customElement("nav-link")
class Navlink extends LitElement {
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
        }

        a.active{
            background:black!important;
        }
    `];

    @property() pathname: string = location.pathname;
    @property({ reflect: true }) class = '';

    render() {
        return html`
        <a class="${this.class} nav-link" href="${this.pathname}" @click="${this.changeLocationPathName}">
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
        let pathname = href.substring(origin.length);

        const event = new CustomEvent('link-clicked', {
            detail: pathname,
            bubbles: true
        });
        this.dispatchEvent(event);
    }

    updated(props: any) {
        console.log({ props })
    }


}

export { Navlink }

