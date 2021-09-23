import { constants } from "../Store/Constants";

interface IresponseInfo {
    success:boolean,
    message:string,     
}

interface IhttpResponse<R>{
     result: Promise<R>, 
     responseInfo: IresponseInfo
}


async function HttpPost<T, R>(requestModel: T, ApiEndpoint: string) :Promise<IhttpResponse<R>> {
    let result: Promise<any> = new Promise((resolve, reject) => { resolve(null) });

    let responseInfo:IresponseInfo={
        success:false,
        message:'əməliyyat uğurla başa çatdı',        
    }

    try {
        result = await $.ajax({
            url: constants.rootPath + ApiEndpoint,
            method: 'post',
            data: JSON.stringify(requestModel),
            contentType: "application/json",
        });

        responseInfo.success=true;
        
    } catch (error:any) {
        console.log({ ApiEndpoint,error });
        responseInfo.message=error?.responseJSON?.internalMessage;
    }

    return {result,responseInfo};
}

async function HttpGet<R>(ApiEndpoint: string):Promise<IhttpResponse<R>>{
    let result: Promise<any> = new Promise((resolve, reject) => { resolve(null) });

    let responseInfo:IresponseInfo={
        success:false,
        message:'əməliyyat uğurla başa çatdı',        
    }

    try {
        result = await $.ajax({
            url: constants.rootPath + ApiEndpoint,
            method: 'get',
            contentType: "application/json",
        });

        responseInfo.success=true;
    } catch (error:any) {
        console.log({ ApiEndpoint,error });
        responseInfo.message=error?.responseJSON?.internalMessage;
    }

    return {result,responseInfo};
}

export { HttpPost, HttpGet };