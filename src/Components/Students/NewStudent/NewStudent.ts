import { MobxLitElement } from "@adobe/lit-mobx";
import { LitElement, html, TemplateResult } from "lit-element";
import { customElement, property } from "lit/decorators.js";
import { helperFunctions } from "../../../Helpers/HelperFunctions";
import { StudentRequestModel } from "../../../Models/RequestModels/StudentRequestModel";
import { store } from "../../../Store/Store";
import { HTMLElementEventType } from "../../../Types/Types";
import { NewStudentCss } from "./NewStudentCss";

@customElement("new-student")
class NewStudent extends MobxLitElement {
  static styles = [NewStudentCss];

  keys = helperFunctions.sameKeyValue<StudentRequestModel>(
    new StudentRequestModel()
  );

  render() {
    let dis = this;
    //test
    return html`
      <i class="fa fa-shopping-cart" aria-hidden="true"></i>

      <i class="fas fa-car"></i>

      <div class="wrapper">
        <div class="title">Form</div>
        <div class="form">
          <div class="inputfield">
            <label>Kod</label>
            <input type="number" class="input" readonly />
          </div>
          ${this.elements.input("Adınız", this.keys.name)}
          ${this.elements.input("Soyadınız", this.keys.surname)}
          ${this.elements.input("Tevellud", this.keys.birthday, "date")}
          ${this.elements.input("Telefon", this.keys.phoneMain, "number")}
          ${this.elements.input("Whatsapp", this.keys.phoneWhatsApp, "number")}
          ${this.elements.select( "Kateqoriya", this.dataConverter.subject_keyvalue())}
          ${this.elements.select("Sektor", this.dataConverter.langs())}
          ${this.elements.select("Cins", this.dataConverter.genders())}
          ${this.elements.input("Email", this.keys.email)}
          ${this.elements.textarea("Unvan",this.keys.address)}   
          ${this.elements.select("Milliyeti", this.dataConverter.nationality())}
          ${this.elements.select("Status", this.dataConverter.nationality())}
          ${this.elements.input("Qeydiyyat", this.keys.register, "date")}
          ${this.elements.input("Zeng Tarixi", this.keys.callDate, "date")}
          ${this.elements.select("Bolge", this.dataConverter.regions())}
          ${this.elements.select("Menbe", this.dataConverter.sources())}
          ${this.elements.textarea("Qeyd",this.keys.notes)}

          <div class="inputfield terms">
            <label class="check">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <p>Butun Sertlerle Raziyam</p>
          </div>
          <div class="inputfield">
            <input type="submit" value="Gonder" class="btn" />
          </div>
          <div class="inputfield">
            <input type="submit" value="Yadda Saxla" class="btn" />
          </div>
          <div class="inputfield">
            <input type="submit" value="Bagla" class="btn" />
          </div>
          <div class="inputfield">
            <p
              style="text-align: center; color: black; font-size: 17px; font-weight: 500; margin-left: 160px;"
            >
              <button class="btn" (click)="onOpenParentPage()">
                Yeni Valideyin
              </button>
            </p>
          </div>
        </div>
      </div>

      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
    `;
  }

  get elements() {
    interface My {
      textarea: (...n: any) => TemplateResult;
      input: (...n: any) => TemplateResult;
      select: (...n: any) => TemplateResult;
    }

    let my: My = {
      input: () => html``,
      select: () => html``,
      textarea: () => html``,
    };
    let dis = this;

    my.input = (title, prop, type = "text") => html`
      <div class="inputfield">
        <label>${title}</label>
        <input
          type="${type}"
          class="input"
          autocomplete="on"
          minlength="3"
          required
          data-prop="${prop}"
          @input="${this.events.oInputt}"
        />
      </div>
    `;

    my.select = (title, options: Array<{ key: string; value: string }>) => {
      return html`
        <div class="inputfield">
          <label>${title}</label>
          <div class="custom_select">
            <select>
              ${options.map(
                (option) =>
                  html`<option value="${option.key}">${option.value}</option>`
              )}
            </select>
          </div>
        </div>
      `;
    };

    my.textarea = (title, prop) => html`
      <div class="inputfield">
        <label>${title} </label>
        <textarea type="textarea" class="input" minlength="2" data-prop="${prop}" @input="${this.events.oInputt}"></textarea>
      </div>
    `;

    return my;
  }

  get events() {
    interface My {
      onSubmit?: any;
      oInputt?: any;
    }

    let my: My = {};
    let dis = this;

    my.oInputt = (
      e: HTMLElementEventType<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      let target = e.currentTarget || e.target;
      let { value, dataset } = target;

      (store.studentStore.newStudent[dataset.prop as keyof StudentRequestModel] as any) =
        value;
    };

    return my;
  }

  get dataConverter() {
    interface My {
      sources: () => { key: string; value: string; }[];
      regions: () => { key: string; value: string; }[];
      statuses: () => { key: string; value: string; }[];
      nationality: any;
      genders: () => { key: string; value: string }[];
      langs: () => Array<{ key: string; value: string }>;
      subject_keyvalue: () => Array<{ key: string; value: string }>;
    }

    let my: My = {
      subject_keyvalue: () => [],
      langs: () => [],
      genders: () => [],
      nationality: () => [],
      statuses: () => [],
      regions: () => [],
      sources: () => [],
    };
    let dis = this;

    my.subject_keyvalue = () => {
      let result = store.Subjects.map((obj) => {
        return {
          key: obj.id.toString(),
          value: obj.name,
        };
      });

      return result;
    };

    my.langs = () => store.Languages;

    my.genders = () => store.Genders;

    my.nationality = () => store.Nationalities;

    my.statuses=()=>store.Statuses;

    my.regions= ()=>{
      let result = store.RegionStore.Regions.map((obj) => {
        return {
          key: obj.id.toString(),
          value: obj.name,
        };
      });

      return result;
    }

    my.sources=()=>store.StudentSources;

    return my;
  }
}
