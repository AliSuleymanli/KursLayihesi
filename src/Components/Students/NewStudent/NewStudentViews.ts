import {html} from 'lit';
import { NewStudent } from './NewStudent';

function newStudentViews(dis: NewStudent){
    let my={render:()=>html``};

    my.render= ()=>{
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
          ${dis.elements.input("Adınız", dis.keys.name)}
          ${dis.elements.input("Soyadınız", dis.keys.surname)}
          ${dis.elements.input("Tevellud", dis.keys.birthday, "date")}
          ${dis.elements.input("Telefon", dis.keys.phoneMain, "number")}
          ${dis.elements.input("Whatsapp", dis.keys.phoneWhatsApp, "number")}
          ${dis.elements.select( "Kateqoriya", dis.dataConverter.subject_keyvalue())}
          ${dis.elements.select("Sektor", dis.dataConverter.langs())}
          ${dis.elements.select("Cins", dis.dataConverter.genders())}
          ${dis.elements.input("Email", dis.keys.email)}
          ${dis.elements.textarea("Unvan",dis.keys.address)}   
          ${dis.elements.select("Milliyeti", dis.dataConverter.nationality())}
          ${dis.elements.select("Status", dis.dataConverter.nationality())}
          ${dis.elements.input("Qeydiyyat", dis.keys.register, "date")}
          ${dis.elements.input("Zeng Tarixi", dis.keys.callDate, "date")}
          ${dis.elements.select("Bolge", dis.dataConverter.regions())}
          ${dis.elements.select("Menbe", dis.dataConverter.sources())}
          ${dis.elements.textarea("Qeyd",dis.keys.notes)}

          <div class="inputfield terms">
            <label class="check">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <p>Butun Sertlerle Raziyam</p>
          </div>

          <div style="text-align:end">
            <button class="btn btn-secondary">Qeyd Et</button>
          </div>
          
        </div>
      </div>

      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
    `;
    }
}