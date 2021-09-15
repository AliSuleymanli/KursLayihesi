import { constants } from '../../Store/Constants';
import 'jquery';

import { StudentRequestModel } from '../../Models/RequestModels/StudentRequestModel';
import { HttpPost } from '../HttpService';
import { ApiEndpoints } from './ApiEndPoints';

async function HttpInsertNewStudent(requestModel: StudentRequestModel): Promise<number> {
    return await HttpPost<StudentRequestModel, number>(requestModel, ApiEndpoints.students);
}

export { HttpInsertNewStudent };