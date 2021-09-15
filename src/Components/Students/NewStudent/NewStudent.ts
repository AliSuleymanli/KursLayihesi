import { MobxLitElement } from "@adobe/lit-mobx";
import { LitElement, html } from "lit-element";
import { customElement, property } from "lit/decorators.js";
import { helperFunctions } from "../../../Helpers/HelperFunctions";
import { StudentRequestModel } from "../../../Models/RequestModels/StudentRequestModel";
import { store } from "../../../Store/Store";
import { HTMLElementEventType } from "../../../Types/Types";
import { NewStudentCss } from "./NewStudentCss";


@customElement("new-student")
class NewStudent extends MobxLitElement {
  static styles = [NewStudentCss];
 
  keys=helperFunctions.sameKeyValue<StudentRequestModel>(new StudentRequestModel);

  render() {
    let dis = this;
    return html`
      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
      
      <i class="fas fa-car"></i>
      
      <div class="wrapper">
        <div class="form">
          <div class="inputfield">
            <label>Kod</label>
            <input type="number" class="input" readonly />
          </div>
          <div class="inputfield">
            <label>Adiniz</label>
            <input type="text" class="input" .value="${store.newStudent.name}" autocomplete="on" minlength="2" required
              data-prop="${this.keys.name}" name="name" @input="${dis.events.oInputt}" />
          </div>
          <div class="inputfield">
            <label>SoyAdiniz</label>
            <input type="text" class="input" autocomplete="on" minlength="2" required data-prop="${this.keys.surname}"
              name="surname" @input="${dis.events.oInputt}" .value="${store.newStudent.surname}"/>
          </div>
          <div class="inputfield">
            <label>Tevellud</label>
            <input type="date" class="input" required data-prop="${this.keys.birthday}" 
              name="birthday" @input="${dis.events.oInputt}" data-prop="${this.keys.birthday}" .value="${store.newStudent.birthday}"/>
          </div>
      
          <div class="inputfield">
            <label>Telefon</label>
            <input type="number" class="input" required name="${this.keys.phoneMain}" data-prop="${this.keys.phoneMain}" 
              @input="${dis.events.oInputt}" .value="${store.newStudent.phoneMain}"/>
          </div>
      
          <div class="inputfield">
            <label>Whatsapp</label>
            <input type="password" class="input" required name="${this.keys.phoneWhatsApp}" data-prop="${this.keys.phoneWhatsApp}"
               @input="${dis.events.oInputt}" .value="${store.newStudent.phoneWhatsApp}"/>
          </div>
      
          <div class="inputfield">
            <label>Kateqoriya</label>
            <div class="custom_select">
              <select>
                <option value="">Proq Boyk</option>
                <option value="">Proq Usag</option>
                <option value="">Avtomatika</option>
                <option value="">Dizayn</option>
                <option value="">Ofis Proq</option>
                <option value="">Elektrik-Muh</option>
      
                <option value="">Dijital Marketinq</option>
                <option value="">Ingilis dili</option>
                <option value="">Rus dili</option>
                <option value="">Proses Muhendisliyi</option>
                <option value="">Verilenler bazasi</option>
                <option value="">Yay mektebi</option>
                <option value="">Sahmat</option>
                <option value="">Proq-Usag-Yeni</option>
              </select>
            </div>
          </div>
      
          <div class="inputfield">
            <label>Sektor</label>
            <div class="custom_select">
              <select .value="${store.newStudent.sector}" @change="${this.events.oInputt}" data-prop="${this.keys.sector}">
                <option value="Az">Az</option>
                <option value="Rus">Rus</option>
                <option value="Ing">Ing</option>
              </select>
            </div>
          </div>

          <div class="inputfield">
            <label>Cins</label>
            <div class="custom_select">
              <select .value="${store.newStudent.gender}" @change="${this.events.oInputt}" data-prop="${this.keys.gender}">
                <option value="male">Kisi</option>
                <option value="female">Qadin</option>
              </select>
            </div>
          </div>

          <div>${store.newStudent.address}</div>

        </div>
      </div>
      
      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
    `;
  }

  get events() {
    interface My {
      onSubmit?: any;
      oInputt?: any
    }

    let my: My = {}; let dis = this;

    my.oInputt = (e: HTMLElementEventType<HTMLInputElement | HTMLSelectElement>) => {
      let target = e.currentTarget || e.target;
      let { value, dataset } = target;

      (store.newStudent[dataset.prop as keyof StudentRequestModel] as any) = value;
    };

    return my;
  }
}




