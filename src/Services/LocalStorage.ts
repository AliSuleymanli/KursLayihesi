import { User } from "../Models/Entities/User";
import { constants } from '../Store/Constants';

function getUserFromStorage(): User {
  let result = new User();

  let userStr = localStorage.getItem(constants.kursUser);

  if (userStr == null || userStr == undefined) {
    return result;
  }

  result = JSON.parse(userStr);

  return result;
}

function setUserInStorage(User: User) {
  localStorage.setItem(constants.kursUser, JSON.stringify(User));
}

export { getUserFromStorage, setUserInStorage };
