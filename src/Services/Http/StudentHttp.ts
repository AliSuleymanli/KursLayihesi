import { constants } from '../../Store/Constants';
import 'jquery';

import { StudentRequestModel } from '../../Models/RequestModels/StudentRequestModel';
import { HttpGet, HttpPost } from '../HttpService';
import { ApiEndpoints } from './ApiEndPoints';
import { StudentResponseModel } from '../../Models/ResponseModels/Student/StudentResponseModel';
import { StudentStatus } from '../../Models/ResponseModels/Student/StudentStatuses';
import { StudentSource } from '../../Models/ResponseModels/Student/StudentSource';

async function HttpInsertNewStudent(requestModel: StudentRequestModel){
    return await HttpPost<StudentRequestModel, number>(requestModel, ApiEndpoints.UpdateStudents);
}

async function HttpGetStudents(start:number,end:number) {
    return await HttpPost<{}, StudentResponseModel[]>({}, `${ApiEndpoints.getStudents}/${start}/${end}`);
}

async function HttpGetStatuses() {
    return await HttpGet<StudentStatus[]>(ApiEndpoints.studentStatus);
}

async function HttpGetStudentSource() {
    return await HttpGet<StudentSource[]>(ApiEndpoints.studentSource);
}

export { HttpInsertNewStudent, HttpGetStudents,HttpGetStatuses,HttpGetStudentSource };