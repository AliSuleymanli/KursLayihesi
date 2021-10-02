import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { StudentsContainerCss } from "./StudentsContainerCss.js";
import { BootstrapCssMin } from "../../../Elements/BootstrapCss.js";
import 'jquery';
import 'bootstrap';
import { HTMLElementEventType } from "../../../Types/Types.js";
import { store } from "../../../Store/Store.js";
import '../../../Elements/Navs/Nav';
import '../../../Elements/Navs/NavLink';

@customElement("students-container")
class StudentsContainer extends LitElement {
    static styles = [BootstrapCssMin, StudentsContainerCss];

    @property() pathname: string = location.pathname;

    render() {
        return html`
        <nav class="nav nav-justified nav-pills nav-tabs">
            <a class="nav-link ${this.isActive('/students/studentlist')}" href="/students/studentlist"
                @click="${this.changeLocationPathName}">Telebeler</a>
            <a class="nav-link ${this.isActive('/students/newstudent')}" href="/students/newstudent"
                @click="${this.changeLocationPathName}">Telebe Qeydiyyat</a>
            <a class="nav-link ${this.isActive('/students/studentdept')}" href="/students/studentdept"
                @click="${this.changeLocationPathName}">Telebe Borcu</a>
        </nav>
        
        <div class="container">
            <slot></slot>
        </div>
        `;
    }

    isActive(href: string): string {
        return href == this.pathname ? "active" : "";
    }

    changeLocationPathName(e: HTMLElementEventType<HTMLAnchorElement>) {
        let target = e.currentTarget || e.target;
        let { origin, href } = target;
        this.pathname = href.substring(origin.length);
    }
}