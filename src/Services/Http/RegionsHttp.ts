import { HttpGet } from '../HttpService';
import { ApiEndpoints } from './ApiEndPoints';

async function HttpGetRegions(): Promise<Array<{ id: number, name: string }>> {
    return await HttpGet<Array<{ id: number, name: string }>>(ApiEndpoints.studentRegions);
}

export {HttpGetRegions}