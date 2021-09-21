import { makeAutoObservable } from "mobx";
import { RegionsController } from "../Controllers/RegionsController";
import { Store } from "./Store";

class RegionStore{
    public Regions: Array<{ id: number, name: string }> = [];
    store: Store;
    constructor(store: Store) {
        makeAutoObservable(this);
        this.store = store;      
    }

    async LoadRegions(){
        this.Regions=await RegionsController.GetAllRegions();
    }

    async init(){
       await this.LoadRegions();
    }
}

export {RegionStore}