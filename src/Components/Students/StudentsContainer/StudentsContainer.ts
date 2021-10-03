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

    render() {
        return html`
        <nav-bar>
            <nav-link pathname="/students/studentlist">Telebeler</nav-link>
            <nav-link pathname="/students/newstudent">Yeni Telebe</nav-link>
            <nav-link pathname="/students/studentdept">Telebe Borcu</nav-link>
        </nav-bar>
        
        <div class="container">
            <slot></slot>
        </div>
        `;
    }
}