import { User } from "../Models/Entities/User";
import { UserValidateRequestModel } from "../Models/RequestModels/UsersValidateRequest";
import { LoginViewModel } from "../Models/ViewModels/LoginViewModel";



function UserToUserValidateRqsModelAdapter(user:User) : UserValidateRequestModel{
    let result: UserValidateRequestModel=new UserValidateRequestModel();

    result.username=user.username;
    result.password=user.password;

    return result;
}

function LoginViewModelToUserValidateRqsModelAdapter(user:LoginViewModel) : UserValidateRequestModel{
    let result: UserValidateRequestModel=new UserValidateRequestModel();

    result.username=user.username;
    result.password=user.password;

    return result;
}

export {UserToUserValidateRqsModelAdapter,LoginViewModelToUserValidateRqsModelAdapter};