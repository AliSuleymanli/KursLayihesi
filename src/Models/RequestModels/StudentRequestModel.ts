import { helperFunctions } from "../../Helpers/HelperFunctions";
import { enums } from "../../Store/Constants";

export class StudentRequestModel {

        address: string = "salam";
        birthday: string = "";
        email: string = "";
        fatherName: string = "";
        gender: string = "";
        id: number = 0;
        idNumber: string = "";
        idPin: string = "";
        interestSubjects: string = "";
        mindType: string = "";
        minds: string = "";
        motherName: string = "";
        name: string = "test";
        nationality: string = "";
        notes: string = "";
        phoneExtra: string = "";
        phoneFather: string = "";
        phoneMain: string = "";
        phoneMother: string = "";
        phoneWhatsApp: string = "";
        regionName: string = "";
        register:string=helperFunctions.today(enums.dateformat.server);
        callDate :string=helperFunctions.today(enums.dateformat.server);
        updateDate :string=helperFunctions.today(enums.dateformat.server);
        schoolId: number = 0;
        sector: string = "Ru";
        specialityName: string = "";
        status: string = "";
        studentCode: number = 0;
        studentSource: string = "";
        subjectName: string = "";
        surname: string = "";
        userOpen: string = "";
}

