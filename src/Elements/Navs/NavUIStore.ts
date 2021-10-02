import { makeAutoObservable } from 'mobx';
class NavUiStore {

    public pathname: string = location.pathname;

    constructor() {
        makeAutoObservable(this);
    }
}

const navUiStore = new NavUiStore();
export { navUiStore }