import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { StudentsContainerCss } from "../../Components/Students/StudentsContainer/StudentsContainerCss";
import { HTMLElementEventType } from "../../Types/Types";
import { BootstrapCssMin } from "../BootstrapCss";
import { Navlink } from './NavLink';


@customElement("nav-bar")
class NavBar extends LitElement {
    static styles = [BootstrapCssMin, StudentsContainerCss, css`
    nav{
        flex:1;
    }

    `];

    @property() pathname: string = location.pathname;
    @property({ reflect: true }) class = "nav nav-justified nav-pills nav-tabs"

    constructor() {
        super();
        let dis = this;

        this.addEventListener('link-clicked', function (e: any) {

            for (let i = 0; i < dis.children.length; i++) {
                const element = dis.children[i];
                if ((element as Navlink).pathname == e.detail) {
                    console.log({ element });
                    element.classList.add('active')
                } else {
                    element.classList.remove('active');
                }

            }
            console.log({ dis });
        });
    }

    render() {
        return html`
    <nav class="${this.class}">
        <slot></slot>
    </nav>
        `;
    }


    updated(propsParent: any) {
        console.log({ propsParent });
    }


}

