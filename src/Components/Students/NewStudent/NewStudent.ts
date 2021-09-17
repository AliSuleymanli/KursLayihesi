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
    //test
    return html``;
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




