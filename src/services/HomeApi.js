import { listAccountProfile } from "../utils/fake";

// ============ get user profile by id ============ //
export const getUserProfile = async (userId) => {
  try {
    let userProfile = {};
    listAccountProfile.forEach((profile) => {
      if (profile.id === userId) {
        userProfile = profile;
      }
    });
    return userProfile;
  } catch (error) {
    console.log(error);
  }
};
