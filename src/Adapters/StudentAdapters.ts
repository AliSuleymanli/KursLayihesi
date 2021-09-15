import { StudentRequestModel } from "../Models/RequestModels/StudentRequestModel";
import { StudentListViewModel } from "../Models/ViewModels/StudentListViewModel";

class StudentAdapters {

    static requestToListViewModel(requestModel: StudentRequestModel): StudentListViewModel {
        let result: StudentListViewModel = {
            id: requestModel.id,
            name: requestModel.name,
            surname: requestModel.surname,
            birthday: requestModel.birthday,
            nationality: requestModel.nationality,
            specialityId: 0,
            status: requestModel.status,
            sector: requestModel.status,
            fatherName: requestModel.fatherName,
            motherName: requestModel.motherName,
            specialityName: requestModel.specialityName,
            subjectName: requestModel.subjectName,
            minds: requestModel.minds,
            mindType: requestModel.mindType,
            phoneMain: requestModel.phoneMain,
            phoneWhatsApp: requestModel.phoneWhatsApp,
            phoneFather: requestModel.phoneFather,
            phoneMother: requestModel.phoneMother,
            regionName: requestModel.regionName,
            userOpen: requestModel.userOpen,
            register: "",
            callDate: ""
        };

        return result;
    }
}

export { StudentAdapters }