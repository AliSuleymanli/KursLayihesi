import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { MenuCss } from "./MenuCss";
import "jquery";
import { FontAwesome } from "../../Elements/lit-fontawesome/fontawesome.js";

@customElement("app-menu")
class Menu extends LitElement {
  static styles = [MenuCss,FontAwesome];

  @property({ attribute: false })
  sidenav: string = "200px";

  render() {
    return html`
      <link rel="stylesheet" href="../../src/lib/fontawesome-free-5.15.4-web/css/all.css">

      <div id="mySidenav" class="sidenav ${this.narrowedNav}" style="width:${this.sidenav}">
        <a href="${this.locationPath}" >
            ${this.OpenCloseIcon}
        </a>
        <a href="/students" title="${this.getTitle("Telebeler")}">
            <span><i class="fas fa-user-graduate"></i></span>
            <span>Telebeler</span>
        </a>
        <a href="/teachers" title="${this.getTitle("Muellimler")}">
            <span><i class="fas fa-user-tie"></i></span>
            <span>Muellimler</span>
        </a>
        <a href="/parents" title="${this.getTitle("Valideynler")}">
            <span><i class="fas fa-hat-cowboy"></i></span>
            <span>Valideynler</span>
        </a>
        <a href="/courses" title="${this.getTitle("Dersler")}">
            <span><i class="fas fa-book"></i></span>
            <span>Dersler</span>
        </a>
        <a href="#">
            
        </a>
      </div>

      <!-- Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page -->
      <div id="main" style="margin-left:${this.sidenav}">
        <slot></slot>
    </div>
    `;
  }

  openNav() {
    this.sidenav = "200px";
  }

  closeNav() {
    this.sidenav = "50px";
  }

  get narrowedNav(){
      return this.isSideNavWide?"":"mini";
  }

  get isSideNavWide():boolean{
      return this.sidenav=="200px";
  }

  getTitle(title:string):string{
     return this.isSideNavWide?"":title;
  }

  get OpenCloseIcon(){
    return this.isSideNavWide
    ?html`<span @click="${this.closeNav}"><i class="fas fa-times"></i></span>`
    :html`<span @click="${this.openNav}"><i class="fas fa-bars"></i></span>`;
  }

  get locationPath():string{
    return location.pathname;
  }
}
