import { makeAutoObservable } from "mobx";
import { StudentRequestModel } from "../Models/RequestModels/StudentRequestModel";
import { StudentListViewModel } from "../Models/ViewModels/StudentListViewModel";
import { HttpInsertNewStudent } from "../Services/Http/StudentHttp";
import { Store } from "./Store";


class StudentStore {
    public studentList: StudentListViewModel[] = [];
    store: Store;

    constructor(store: Store) {
        this.store = store;
        makeAutoObservable(this);
    }

    addNewStudent(student: StudentRequestModel) {
        //this.studentList.push(student)
    }
}

export { StudentStore }