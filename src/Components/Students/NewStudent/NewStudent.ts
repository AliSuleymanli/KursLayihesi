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

          <div class="inputfield">
            <label>Status</label>
            <div class="custom_select">
              <select>
                <option value="male">Yeni</option>
                <option value="male">Yoxlanildi</option>
                <option value="male">Qebul Olundu</option>
                <option value="male">Odenissiz</option>
                <option value="male">Odenisli</option>
                <option value="male">Dondurdu</option>
                <option value="male">Kursu Bitirdi</option>
                <option value="male">Passiv</option>
              </select>
            </div>
          </div>

          <div class="inputfield">
            <label>Qeydiyyat</label>
            <input type="date" class="input" minlength="5" required />
          </div>

          <div class="inputfield">
            <label>Zeng Tarixi</label>
            <input type="date" class="input" />
          </div>

          <div class="inputfield">
            <label>Bolge</label>
            <div class="custom_select">
              <select>
                <option value="male">28 may</option>
                <option value="male">Masazir.r</option>
                <option value="male">9-cu mkr</option>
                <option value="male">Abseron.r Xirdalan seh</option>
                <option value="male">Abseron ray.</option>
                <option value="male">Bayi.qes</option>
                <option value="male">Bileceri.qes</option>
                <option value="male">Bine</option>
                <option value="male">Bineqedi</option>
                <option value="male">Bulbule.qes</option>
                <option value="male">Haciqabul.ray</option>
                <option value="male">Ieri Seher</option>
                <option value="male">Nizami.r</option>
                <option value="male">Nerimanov r.</option>
                <option value="male">Nesimi.r</option>
                <option value="male">Qaradag r.Musfiqabad.qes</option>
                <option value="male">Sabuncu.r</option>
                <option value="male">Sumqayit/seh</option>
                <option value="male">Suraxani.ray</option>
                <option value="male">Sebail</option>
                <option value="male">Xalqlar Dostlugu</option>
                <option value="male">Xirdalan.seh</option>
                <option value="male">Xirdalan.seh</option>
                <option value="male">Xetai.r</option>
                <option value="male">Xezer.ray</option>
                <option value="male">Xezer.ray</option>
                <option value="male">Yasamal r.</option>
                <option value="male">Yeni Yasamal</option>
                <option value="male">Zabrat qes</option>
                <option value="male">Ehmedli</option>
              </select>
            </div>
          </div>

          <div class="inputfield">
            <label>Menbe</label>
            <div class="custom_select">
              <select>
                <option value="male">Mesaj Yazib</option>
                <option value="male">Nomre Qoyub</option>
                <option value="male">Tovsiyye</option>
                <option value="male">ZE(Buklet)</option>
                <option value="male">ZE(Instagram)</option>
                <option value="male">ZE(Facebook)</option>
                <option value="male">ZE(Mekteb)</option>
                <option value="male">ZE(Ozu)</option>
                <option value="male">ZE(Radio)</option>
              </select>
            </div>
          </div>

          <div class="inputfield">
            <label>Qeyd</label>
            <input type="text" class="input" minlength="2" required />
          </div>

          <div class="inputfield">
            <label>Fikirleri</label>
            <input type="text" class="input" minlength="2" required />
          </div>

          <div class="inputfield">
            <label>Movzular </label>
            <textarea type="textarea" class="input" required></textarea>
          </div>

          <div class="inputfield">
            <label>Daxil Olan Movzular </label>
            <textarea type="textarea" class="input"></textarea>
          </div>

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

    return my;
  }
}
