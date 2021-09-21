import { autorun, makeAutoObservable } from 'mobx';
import { UserController } from '../Controllers/UserController';
import { User } from '../Models/Entities/User';
import { UserValidateRequestModel } from '../Models/RequestModels/UsersValidateRequest';
import { UserValidateresponseModel } from '../Models/ResponseModels/User/UserValidateResponseModel';
import { LoginViewModel } from '../Models/ViewModels/LoginViewModel';
import { LoginViewModelToUserValidateRqsModelAdapter } from '../Adapters/UserAdapters';
import { setUserInStorage } from '../Services/LocalStorage';
import { StudentListViewModel } from '../Models/ViewModels/StudentListViewModel';
import { StudentRequestModel } from '../Models/RequestModels/StudentRequestModel';
import { StudentStore } from './StudentStore';
import { RegionStore } from './RegionStore';

class Store {
    public studentStore: StudentStore;
    public RegionStore: RegionStore;

    public User: User = new User();
    public message: { alert: string, rev: number } = { alert: "", rev: -1 };

    public userValidate: UserValidateresponseModel = new UserValidateresponseModel();

    //#region const values

    public Subjects: Array<{ id: number, name: string }> = [];
    public Languages: Array<{ key: string, value: string }> = [
        { key: "Az", value: "Az" },
        { key: "Ru", value: "Ru" },
        { key: "Eng", value: "Eng" }
    ];
    public Genders = [
        { key: "Kişi", value: "Kişi" },
        { key: "Qadın", value: "Qadın" },
    ];
    public Nationalities = [
        { key: "Azerbaycanli", value: "Azerbaycanli" },
        { key: "Ingilis", value: "Ingilis" },
        { key: "Alman", value: "Alman" },
        { key: "Rus", value: "Rus" },
        { key: "Turk", value: "Turk" },
    ];
    public Statuses = [
        { key: "1", value: "Yeni" },
        { key: "2", value: "Yoxlanildi" },
        { key: "3", value: "Qebul Olundu" },
        { key: "4", value: "Odenissiz" },
        { key: "5", value: "Odenisli" },
        { key: "6", value: "Dondurdu" },
        { key: "7", value: "Kursu Bitirdi" },
        { key: "8", value: "Passiv" },
    ];


    //#endregion



    constructor() {
        this.studentStore = new StudentStore(this);
        this.RegionStore=new RegionStore(this);
        makeAutoObservable(this);
        this.init();
    }

    init() {
        this.getUserValidateResponse(new LoginViewModel());
    }

    async getUserValidateResponse(viewModel: LoginViewModel) {
        let request = LoginViewModelToUserValidateRqsModelAdapter(viewModel);

        this.userValidate = await UserController.usersValidate(request);

        if (this.userValidate.validated == true) {
            this.User.username = viewModel.username;
            this.User.password = viewModel.password;
        } else {
            this.setMessage("istifadeci adi yaxud sifre sehfdir. tekrar yoxlayin.");
        }
    }

    setMessage(message: string) {
        let { rev } = this.message;
        rev++;
        this.message = {
            alert: message,
            rev: rev
        };
    }




}

const store = new Store();

autorun(() => {
    if (store.message.alert.length > 0 && store.message.rev > 0) {
        alert(store.message.alert);
    }
});

export { store, Store };