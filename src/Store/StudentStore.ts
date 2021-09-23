import { makeAutoObservable } from "mobx";
import { StudentAdapters } from "../Adapters/StudentAdapters";
import { newstudentiustore } from "../Components/Students/NewStudent/NewStudentUIStore";
import { StudentController } from "../Controllers/StudentController";
import { StudentRequestModel } from "../Models/RequestModels/StudentRequestModel";
import { StudentResponseModel } from "../Models/ResponseModels/Student/StudentResponseModel";
import { StudentSource } from "../Models/ResponseModels/Student/StudentSource";
import { StudentStatus } from "../Models/ResponseModels/Student/StudentStatuses";
import { StudentListViewModel } from "../Models/ViewModels/StudentListViewModel";
import { HttpGetStatuses, HttpGetStudentSource, HttpInsertNewStudent } from "../Services/Http/StudentHttp";
import { Store } from "./Store";


class StudentStore {
    public studentList: StudentListViewModel[] = [];
    public newStudent: StudentRequestModel = new StudentRequestModel();
    store: Store;

    constructor(store: Store) {
        this.store = store;
        makeAutoObservable(this);
    }

    addNewStudent(student: StudentListViewModel) {
        this.studentList.push(student);
    }

    updateStudent(student: StudentListViewModel) {
        let stud = this.studentList.find(x => x.id == student.id);
        let keys = Object.keys(student);

        for (const key in keys) {
            if (stud != undefined) {
                (stud[key as keyof StudentListViewModel] as any) = student[key as keyof StudentListViewModel];
            }
        }
    }

    deleteStudent(id: number) {
        let index = this.studentList.findIndex(x => x.id == id);
        this.studentList.splice(index, 1);
    }

    async LoadStudentList() {
        let response = await StudentController.GetAllStudents();
        let students=await response.result;

        if(response.responseInfo.success==false) students=[];
        
        this.studentList = students.map(student => StudentAdapters.responseToListView(student));
    }

    resetNewStudent() {
        this.newStudent = new StudentRequestModel();
    }

    onStudentChangedOnServer(student: StudentRequestModel) {

        let message:string="Deyisiklik Qeyd Olundu";

        if(student.id==0){
           // message="Deyisiklikler qeyd oluna bilmedi. tekrar yoxlayin.";
        }else{
            let studentViewModel = StudentAdapters.requestToListViewModel(student);

            this.resetNewStudent();
    
            this.addNewStudent(studentViewModel); 
        }  

        this.store.setMessage(message);
        newstudentiustore.saveButtondisabled=false;
    }
}

class StudentSourceStore{
    sourceList: StudentSource[] = [];

    store: Store;
    constructor(store: Store) {
        this.store = store;
        makeAutoObservable(this);
    }

    async init(){
        this.loadSources();
    }

    async loadSources(){
        let response=await HttpGetStudentSource();
        this.sourceList=await response.result;
    }
}

class StudentStatusStore{
    statusList: StudentStatus[] = [];

    store: Store;
    constructor(store: Store) {
        this.store = store;
        makeAutoObservable(this);
    }

    async init(){
        this.loadStatuses();
    }

    async loadStatuses(){
        let response=await StudentController.GetAllStatuses();
        this.statusList= await response.result; 
    }
}

export { StudentStore,StudentSourceStore,StudentStatusStore }