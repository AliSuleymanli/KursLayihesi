import { StudentRequestModel } from "../Models/RequestModels/StudentRequestModel";
import { StudentResponseModel } from "../Models/ResponseModels/Student/StudentResponseModel";
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

    static responseToListView(responseModel: StudentResponseModel): StudentListViewModel {
        let result: StudentListViewModel = {
            id: responseModel.id,
            name: responseModel.name,
            surname: responseModel.surname,
            birthday: responseModel.birthday,
            nationality: responseModel.nationality,
            specialityId: 0,
            status: responseModel.status,
            sector: responseModel.status,
            fatherName: responseModel.fatherName,
            motherName: responseModel.motherName,
            specialityName: responseModel.specialityName,
            subjectName: responseModel.subjectName,
            minds: responseModel.minds,
            mindType: responseModel.mindType,
            phoneMain: responseModel.phoneMain,
            phoneWhatsApp: responseModel.phoneWhatsApp,
            phoneFather: responseModel.phoneFather,
            phoneMother: responseModel.phoneMother,
            regionName: responseModel.regionName,
            userOpen: responseModel.userOpen,
            register: "",
            callDate: ""
        };

        return result;
    }
}

export { StudentAdapters }