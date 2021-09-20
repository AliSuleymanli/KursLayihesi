import { makeAutoObservable } from "mobx";
import { StudentAdapters } from "../Adapters/StudentAdapters";
import { StudentController } from "../Controllers/StudentController";
import { StudentRequestModel } from "../Models/RequestModels/StudentRequestModel";
import { StudentResponseModel } from "../Models/ResponseModels/Student/StudentResponseModel";
import { StudentListViewModel } from "../Models/ViewModels/StudentListViewModel";
import { HttpInsertNewStudent } from "../Services/Http/StudentHttp";
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

    async getStudentList() {
        let students = await StudentController.GetAllStudents();

        this.studentList = students.map(student => StudentAdapters.responseToListView(student));
    }

    resetNewStudent() {
        this.newStudent = new StudentRequestModel();
    }

    onStudentChangedOnServer(student: StudentRequestModel) {

        let studentViewModel = StudentAdapters.requestToListViewModel(student);

        this.resetNewStudent();

        this.addNewStudent(studentViewModel);

        this.store.setMessage("Deyisiklik Qeyd Olundu");
    }
}

export { StudentStore }