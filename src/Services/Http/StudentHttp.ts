import { constants } from '../../Store/Constants';
import 'jquery';

import { StudentRequestModel } from '../../Models/RequestModels/StudentRequestModel';
import { HttpGet, HttpPost } from '../HttpService';
import { ApiEndpoints } from './ApiEndPoints';
import { StudentResponseModel } from '../../Models/ResponseModels/Student/StudentResponseModel';
import { StudentStatus } from '../../Models/ResponseModels/Student/StudentStatuses';
import { StudentSource } from '../../Models/ResponseModels/Student/StudentSource';

async function HttpInsertNewStudent(requestModel: StudentRequestModel): Promise<number> {
    let result= await HttpPost<StudentRequestModel, number>(requestModel, ApiEndpoints.students);
    return result==null?0:result;
}

async function HttpGetStudents(): Promise<StudentResponseModel[]> {
    let result= await HttpGet<StudentResponseModel[]>(ApiEndpoints.students);
    return result==null?[]:result;
}

async function HttpGetStatuses(): Promise<StudentStatus[]> {
    let result= await HttpGet<StudentStatus[]>(ApiEndpoints.studentStatus);
    return result==null?[]:result;
}

async function HttpGetStudentSource(): Promise<StudentSource[]> {
    let result= await HttpGet<StudentSource[]>(ApiEndpoints.studentSource);
    return result==null?[]:result;
}

export { HttpInsertNewStudent, HttpGetStudents,HttpGetStatuses,HttpGetStudentSource };