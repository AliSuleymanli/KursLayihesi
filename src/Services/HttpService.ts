import { constants } from "../Store/Constants";


async function HttpPost<T, R>(requestModel: T, ApiEndpoint: string): Promise<R> {
    let result: Promise<any> = new Promise((resolve, reject) => { resolve(0) });

    try {
        result = await $.ajax({
            url: constants.rootPath + ApiEndpoint,
            method: 'post',
            data: JSON.stringify(requestModel),
            contentType: "application/json",
        });
    } catch (error) {
        console.log({ error });
    }

    return result;
}

export { HttpPost };