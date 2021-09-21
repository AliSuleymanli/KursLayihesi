import { helperFunctions } from '../../Helpers/HelperFunctions';
import { HttpGet } from '../HttpService';
import { ApiEndpoints } from './ApiEndPoints';

async function HttpGetRegions(): Promise<Array<{ id: number, name: string }>> {
    let result= await HttpGet<Array<{ id: number, name: string }>>(ApiEndpoints.studentRegions);
    return result==null?[]:result;
}

export {HttpGetRegions}