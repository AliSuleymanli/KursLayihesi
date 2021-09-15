
import { UserValidateRequestModel } from '../../Models/RequestModels/UsersValidateRequest';

import { UserValidateresponseModel } from '../../Models/ResponseModels/User/UserValidateResponseModel';
import { constants } from '../../Store/Constants';
import 'jquery';

 async function RequestForUserValidate(requestModel:UserValidateRequestModel):Promise<UserValidateresponseModel>  {
    let result:Promise<UserValidateresponseModel> = new Promise((resolve,reject)=>{resolve(new UserValidateresponseModel())});

    //test
    // return new Promise((resolve,reject)=>{
    //     let model=new UserValidateresponseModel();

    //     if(requestModel.username=="testUser" && requestModel.password=="testpass"){
    //         model.validated=true;
    //         model.enabled=true;
    //     }

    //     resolve(model);
    // });

    //real
    try{
        result=await $.ajax({
            url: constants.rootPath + '/users/validate',
                method: 'post',
                data: JSON.stringify(requestModel),
                contentType: "application/json",           
        });
    }catch(error){
        console.log({error});
    }

    return result;    
}

export {RequestForUserValidate};