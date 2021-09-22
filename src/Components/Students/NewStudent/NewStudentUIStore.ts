import { makeAutoObservable } from "mobx";

class newStudentUIStore{   
    saveButtondisabled:boolean=false;

    constructor() {
        makeAutoObservable(this);
    }
}

const newstudentiustore=new newStudentUIStore();

export {newstudentiustore}