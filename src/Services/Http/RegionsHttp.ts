import { helperFunctions } from '../../Helpers/HelperFunctions';
import { HttpGet } from '../HttpService';
import { ApiEndpoints } from './ApiEndPoints';

async function HttpGetRegions() {
    let result= await HttpGet<Array<{ id: number, name: string }>>(ApiEndpoints.studentRegions);
    return await result.result;
}

export {HttpGetRegions}