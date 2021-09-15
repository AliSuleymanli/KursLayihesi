import { LoginViewModelToUserValidateRqsModelAdapter, UserToUserValidateRqsModelAdapter } from "../Adapters/UserAdapters";
import { User } from "../Models/Entities/User";
import { UserValidateRequestModel } from "../Models/RequestModels/UsersValidateRequest";
import { UserValidateresponseModel } from "../Models/ResponseModels/User/UserValidateResponseModel";
import { LoginViewModel } from "../Models/ViewModels/LoginViewModel";
import { RequestForUserValidate } from "../Services/Http/UserHttp";
import { getUserFromStorage,setUserInStorage } from "../Services/LocalStorage";
import { store } from "../Store/Store";

class UserController{
    static async usersValidate(viewmodel:LoginViewModel):Promise<UserValidateresponseModel>{
        let LocalUser=getUserFromStorage();

        let requestModel=UserToUserValidateRqsModelAdapter(LocalUser);

        let response=await RequestForUserValidate(requestModel);

        if(response.validated==true){
            return response;
        }else{
            let requestModel= LoginViewModelToUserValidateRqsModelAdapter(viewmodel);

            let response= await RequestForUserValidate(requestModel);
    
            if(response.validated==true){
                let user=new User(viewmodel.username,viewmodel.password);
                setUserInStorage(user);

                return response;
            }else{
                return new UserValidateresponseModel();
            }
        }

        
    }

}

export {UserController}