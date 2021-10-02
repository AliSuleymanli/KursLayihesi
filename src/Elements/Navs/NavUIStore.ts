import { autorun, makeAutoObservable } from 'mobx';
class NavUiStore {
    constructor() {
        makeAutoObservable(this);
    }
}

const navUiStore = new NavUiStore();
export { navUiStore }