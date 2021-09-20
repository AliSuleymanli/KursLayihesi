import { constants } from '../../Store/Constants';
import 'jquery';

import { StudentRequestModel } from '../../Models/RequestModels/StudentRequestModel';
import { HttpGet, HttpPost } from '../HttpService';
import { ApiEndpoints } from './ApiEndPoints';
import { StudentResponseModel } from '../../Models/ResponseModels/Student/StudentResponseModel';

async function HttpInsertNewStudent(requestModel: StudentRequestModel): Promise<number> {
    return await HttpPost<StudentRequestModel, number>(requestModel, ApiEndpoints.students);
}

async function HttpGetStudents(): Promise<StudentResponseModel[]> {
    return await HttpGet<StudentResponseModel[]>(ApiEndpoints.students);
}

export { HttpInsertNewStudent, HttpGetStudents };