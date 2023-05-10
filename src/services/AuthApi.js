import { listAccount } from "../utils/fake";

// ============ login method ============ //
export const login = async (payload) => {
  try {
    let response = null;
    listAccount.forEach((account) => {
      if (
        account.username === payload.username &&
        account.password === payload.password
      ) {
        response = account;
      }
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

// ============ register method ============ //
export const register = async (payload) => {
  try {
    console.log(payload);
    return true;
  } catch (error) {
    console.log(error);
  }
};
