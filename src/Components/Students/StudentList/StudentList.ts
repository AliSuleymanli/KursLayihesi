import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { BootstrapCssMin } from "../../../Elements/BootstrapCss";
import { StudentListViewModel } from "../../../Models/ViewModels/StudentListViewModel";
import { store } from "../../../Store/Store";
import { HTMLElementEventType } from "../../../Types/Types";
import { StudentListCss } from "./StudentListCss";
import { StudentListView } from "./StudentListView";



@customElement("student-list")
class StudentList extends LitElement {
  static styles=[BootstrapCssMin,StudentListCss];

  

  render(){ return this.views.render(); }

  get views(){ return StudentListView(this); }

  get events(){
    interface My{
      //onToEdit: (e:HTMLElementEventType<HTMLElement>) => void;
      onToEdit:(stu:StudentListViewModel)=>void
    }

    let my:My={
      onToEdit: function (stu) { }
    };

    my.onToEdit=(student)=>{
      // let target=e.currentTarget || e.target;
      // let {id}=target.dataset;
      // console.log({id});


      let id=student.id;
      console.log({student});
    };

    return my;
  }

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