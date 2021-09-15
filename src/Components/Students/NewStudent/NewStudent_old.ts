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
          <div class="inputfield">
            <label>Email </label>
            <input .value="${store.newStudent.email}" type="text" class="input" required name="${this.keys.email}" data-prop="${this.keys.email}"  @input="${dis.events.oInputt}"  />
          </div>
      
          <div class="inputfield">
            <label>Unvan </label>
            <textarea  class="input" minlength="2" >${store.newStudent.address}</textarea>
          </div>
          <div class="inputfield">
            <label>Qrup</label>
            <div class="custom_select">
              <select>
                <option value="male">Melum deyil</option>
              </select>
            </div>
          </div>
      
          <div class="inputfield">
            <label>Milliyeti</label>
            <div class="custom_select">
              <select data-prop="${this.keys.nationality}" @input="${dis.events.oInputt}" .value="${store.newStudent.nationality}">
                <option value="male">Azerbaycanli</option>
                <option value="male">Ingilis</option>
                <option value="male">Alman</option>
                <option value="male">Rus</option>
                <option value="male">Turk</option>
              </select>
            </div>
          </div>
      
          <div class="inputfield">
            <label>Kimlik-seriya</label>
            <input type="text" class="input" required />
          </div>
      
          <div class="inputfield">
            <label>Kimlk pin</label>
            <input type="text" class="input" required />
          </div>
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
            <input type="text" class="input" minlength="2" required data-prop="" />
          </div>
      
          <div class="inputfield">
            <label>Movzular </label>
            <textarea type="textarea" class="input" required>${store.newStudent.interestSubjects}</textarea>
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
            <p style="text-align: center; color: black; font-size: 17px; font-weight: 500; margin-left: 160px;">
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




