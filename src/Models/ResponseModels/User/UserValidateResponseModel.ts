 class UserValidateresponseModel{
    enabled:boolean=false;
    grants:Grant[]=[];
    id:number=0;
    name: string="";
    schoolId:number= 0;
    type:string= "";
    validated: boolean=false;   
}

class Grant{
    description:string="";
    grant:string="";
    id:number=0;
}

export {UserValidateresponseModel,Grant};

