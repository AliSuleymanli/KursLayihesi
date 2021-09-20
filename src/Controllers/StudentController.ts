import { StudentRequestModel } from "../Models/RequestModels/StudentRequestModel";
import { ApiEndpoints } from "../Services/Http/ApiEndPoints";
import { HttpPost } from "../Services/HttpService";
import { HttpGetStudents, HttpInsertNewStudent } from "../Services/Http/StudentHttp";
import { store } from '../Store/Store';
import { StudentAdapters } from "../Adapters/StudentAdapters";



class StudentController {
    static async InsertNewStudent(student: StudentRequestModel) {
        let id = await HttpInsertNewStudent(student);
        student.id = id;

        store.studentStore.onStudentChangedOnServer(student);
    }

    static async GetAllStudents() {
        return await HttpGetStudents();
    }
}

export { StudentController };