import { StudentRequestModel } from "../Models/RequestModels/StudentRequestModel";
import { ApiEndpoints } from "../Services/Http/ApiEndPoints";
import { HttpPost } from "../Services/HttpService";
import { HttpInsertNewStudent } from "../Services/Http/StudentHttp";
import { store } from '../Store/Store';
import { StudentAdapters } from "../Adapters/StudentAdapters";



class StudentController {
    static async InsertNewStudent(student: StudentRequestModel) {
        let id = await HttpInsertNewStudent(student);

        store.setMessage("Qeyd Olundu");

        student.id = id;
        let studentViewModel = StudentAdapters.requestToListViewModel(student);

        store.resetNewStudent();

        store.studentList.unshift(studentViewModel);
        //store.studentList = Object.assign({}, store.studentList);

    }
}

export { StudentController };