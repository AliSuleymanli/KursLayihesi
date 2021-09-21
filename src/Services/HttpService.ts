import { constants } from "../Store/Constants";


async function HttpPost<T, R>(requestModel: T, ApiEndpoint: string): Promise<R> {
    let result: Promise<any> = new Promise((resolve, reject) => { resolve(null) });

    try {
        result = await $.ajax({
            url: constants.rootPath + ApiEndpoint,
            method: 'post',
            data: JSON.stringify(requestModel),
            contentType: "application/json",
        });
    } catch (error) {
        console.log({ ApiEndpoint,error });
    }

    return result;
}

async function HttpGet<R>(ApiEndpoint: string): Promise<R> {
    let result: Promise<any> = new Promise((resolve, reject) => { resolve(null) });

    try {
        result = await $.ajax({
            url: constants.rootPath + ApiEndpoint,
            method: 'get',
            contentType: "application/json",
        });
    } catch (error) {
        console.log({ ApiEndpoint,error });
    }

    return result;
}

export { HttpPost, HttpGet };