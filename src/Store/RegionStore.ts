import { makeAutoObservable } from "mobx";
import { RegionsController } from "../Controllers/RegionsController";
import { Store } from "./Store";

class RegionStore{
    public Regions: Array<{ id: number, name: string }> = [];
    store: Store;
    constructor(store: Store) {
        this.store = store;
        makeAutoObservable(this);
        this.init();
    }

    async LoadRegions(){
        this.Regions=await RegionsController.GetAllRegions();
    }

    init(){
        this.LoadRegions();
    }
}

export {RegionStore}