import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { BootstrapCssMin } from "../../../Elements/BootstrapCss";
import { StudentListViewModel } from "../../../Models/ViewModels/StudentListViewModel";
import { store } from "../../../Store/Store";
import { StudentListCss } from "./StudentListCss";
import { StudentListView } from "./StudentListView";



@customElement("student-list")
class StudentList extends LitElement {
  static styles=[BootstrapCssMin,StudentListCss]

  render(){
    return html`
      
    `;
  }

  get views(){ return StudentListView(this); }

  get dataConverter(){
    interface My{
      students:()=> StudentListViewModel[]
    }
    let my:My={
      students:()=>[]
    };

    my.students  =()=>store.studentStore.studentList;

    return my;
  }  
}

export {StudentList};