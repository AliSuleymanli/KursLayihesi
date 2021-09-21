import { HttpGetRegions } from "../Services/Http/RegionsHttp";


class RegionsController{
    static async GetAllRegions() {
        return await HttpGetRegions();
    }
}

export {RegionsController}