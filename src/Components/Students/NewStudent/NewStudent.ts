import { MobxLitElement } from "@adobe/lit-mobx";
import { LitElement, html, TemplateResult } from "lit-element";
import { customElement, property } from "lit/decorators.js";
import { StudentController } from "../../../Controllers/StudentController";
import { BootstrapCssMin } from "../../../Elements/BootstrapCss";
import { helperFunctions } from "../../../Helpers/HelperFunctions";
import { StudentRequestModel } from "../../../Models/RequestModels/StudentRequestModel";
import { StudentStatus } from "../../../Models/ResponseModels/Student/StudentStatuses";
import { store } from "../../../Store/Store";
import { HTMLElementEventType } from "../../../Types/Types";
import { NewStudentCss } from "./NewStudentCss";
import { newstudentiustore } from "./NewStudentUIStore";
import { newStudentElements, newStudentViews } from "./NewStudentViews";

@customElement("new-student")
class NewStudent extends MobxLitElement {
  static styles = [BootstrapCssMin,NewStudentCss];

  keys = helperFunctions.sameKeyValue<StudentRequestModel>(
    new StudentRequestModel()
  );

  render() { return newStudentViews(this).render(); }

  get elements() { return newStudentElements(this); }

  get events() {
    interface My {
      onChange: (e: Event) => void;
      onQedyEt: Function
      onSubmit?: any;
      oInputt?: any;
    }

    let my: My = {
      onQedyEt: (e: Event)=>{},
      onChange: (e: Event) => {}
    };
    let dis = this;

    my.oInputt = (
      e: HTMLElementEventType<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      let target = e.currentTarget || e.target;
      let { value, dataset } = target;

      (store.studentStore.newStudent[dataset.prop as keyof StudentRequestModel] as any) = value;
    };

    my.onQedyEt= (e:Event)=>{
      newstudentiustore.saveButtondisabled=true;
      console.log({newstu:store.studentStore.newStudent});
      StudentController.InsertNewStudent(store.studentStore.newStudent);
    }

    return my;
  }

  get dataConverter() {
    interface My {
      sources: () => { key: string; value: string }[];
      statuses: () =>  { key: string; value: string }[];
      regions: () => { key: string; value: string; }[];
      
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

    my.statuses=()=>{
      let result= store.StudentStausStore.statusList.map(status=>{
        return {key:status.id.toString(),value:status.status};
      });

      return result;
    }

    my.regions= ()=>{
      let result = store.RegionStore.Regions.map((obj) => {
        return {
          key: obj.id.toString(),
          value: obj.name,
        };
      });

      return result;
    }

    my.sources=()=>{
      let result=store.StudentSourceStore.sourceList.map(source=>{
        return {
          key:source.id.toString(),
          value:source.source
        }
      });

      return result;
    }

    return my;
  }
}

export {NewStudent}