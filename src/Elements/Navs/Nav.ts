import { MobxLitElement } from "@adobe/lit-mobx";
import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { StudentsContainerCss } from "../../Components/Students/StudentsContainer/StudentsContainerCss";
import { BootstrapCssMin } from "../BootstrapCss";


@customElement("nav-bar")
class NavBar extends MobxLitElement {
    static styles = [BootstrapCssMin, StudentsContainerCss, css`
    nav{
        flex:1;
    }

    `];


    @property({ reflect: true }) class = "nav nav-justified nav-pills nav-tabs";

    render() {
        return html`
    <nav class="${this.class}">
        <slot></slot>
    </nav>
        `;
    }

}

