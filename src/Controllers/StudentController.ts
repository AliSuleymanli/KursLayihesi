import { StudentRequestModel } from "../Models/RequestModels/StudentRequestModel";
import { ApiEndpoints } from "../Services/Http/ApiEndPoints";
import { HttpPost } from "../Services/HttpService";
import { HttpGetStatuses, HttpGetStudents, HttpGetStudentSource, HttpInsertNewStudent } from "../Services/Http/StudentHttp";
import { store } from '../Store/Store';
import { StudentAdapters } from "../Adapters/StudentAdapters";



class StudentController {
    static async InsertNewStudent(student: StudentRequestModel) {
        let response = await HttpInsertNewStudent(student);

        if(response.responseInfo.success==false){
            store.setMessage(response.responseInfo.message);
            return;
        }
        
        student.id =await response.result;
        store.studentStore.onStudentChangedOnServer(student);
    }

    static async GetAllStudents(start:number=1,end:number=100) {
        return await HttpGetStudents(start,end);
    }

    static async GetAllStatuses() {
        return await HttpGetStatuses();
    } 

    static async GetAllStudentSources() {
        return await HttpGetStudentSource();
    } 
}

export { StudentController };