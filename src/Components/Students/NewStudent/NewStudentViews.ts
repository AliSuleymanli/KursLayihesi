import {html, TemplateResult} from 'lit';
import { StudentRequestModel } from '../../../Models/RequestModels/StudentRequestModel';
import { store } from '../../../Store/Store';
import { NewStudent } from './NewStudent';
import { newstudentiustore } from './NewStudentUIStore';

function newStudentViews(dis: NewStudent){
    let my={render:()=>html``};

    my.render = ()=>{
        return html`
      <i class="fa fa-shopping-cart" aria-hidden="true"></i>

      <i class="fas fa-car"></i>

      <div class="wrapper">
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
          ${dis.elements.select( "Kateqoriya",dis.keys.subjectName, dis.dataConverter.subject_keyvalue())}
          ${dis.elements.select("Sektor", dis.keys.sector,dis.dataConverter.langs())}
          ${dis.elements.select("Cins",dis.keys.gender, dis.dataConverter.genders())}
          ${dis.elements.input("Email", dis.keys.email)}
          ${dis.elements.textarea("Unvan",dis.keys.address)}   
          ${dis.elements.select("Milliyeti",dis.keys.nationality, dis.dataConverter.nationality())}
          ${dis.elements.select("Status",dis.keys.status, dis.dataConverter.statuses())}
          ${dis.elements.input("Qeydiyyat", dis.keys.register, "date")}
          ${dis.elements.input("Zeng Tarixi", dis.keys.callDate, "date")}
          ${dis.elements.select("Bolge",dis.keys.regionName, dis.dataConverter.regions())}
          ${dis.elements.select("Menbe",dis.keys.studentSource, dis.dataConverter.sources())}
          ${dis.elements.textarea("Qeyd",dis.keys.notes)}

          <div class="inputfield terms">
            <label class="check">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <p>Butun Sertlerle Raziyam</p>
          </div>

          <div style="text-align:end">
            <button ?disabled="${newstudentiustore.saveButtondisabled}" class="btn btn-secondary" @click="${dis.events.onQedyEt}">Qeyd Et</button>
          </div>
          
        </div>
      </div>

      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
    `;
    }

    return my;
}

function newStudentElements(dis: NewStudent){
  
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


  my.input = (title, prop, type = "text") => html`
    <div class="inputfield">
      <label>${title}</label>
      <input
        .value="${store.studentStore.newStudent[prop as keyof StudentRequestModel] as string}"
        type="${type}"
        class="input"
        autocomplete="on"
        minlength="3"
        required
        data-prop="${prop}"
        @input="${dis.events.oInputt}"
      />
    </div>
  `;

  my.select = (title,prop, options: Array<{ key: string; value: string }>) => {
    let value=store.studentStore.newStudent[prop as keyof StudentRequestModel];
    return html`
      <div class="inputfield">
        <label>${title}</label>
        <div class="custom_select">
          <select @change="${dis.events.oInputt}" data-prop="${prop}">
            ${options.map(
              (option) =>
                html`<option ?selected="${option.key==value}" value="${option.key}">${option.value}</option>`
            )}
          </select>
        </div>
      </div>
    `;
  };

  my.textarea = (title, prop) => html`
    <div class="inputfield">
      <label>${title} </label>
      <textarea 
        type="textarea" 
        class="input" 
        minlength="2" 
        data-prop="${prop}" 
        @input="${dis.events.oInputt}"
        .value="${store.studentStore.newStudent[prop as keyof StudentRequestModel] as string}"
        ></textarea>
    </div>
  `;

  return my;
}

export {newStudentViews,newStudentElements}