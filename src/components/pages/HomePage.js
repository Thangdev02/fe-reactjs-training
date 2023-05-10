import React, { useEffect, useState } from "react";
import { getUserProfile } from "../../services/HomeApi";

function HomePage() {
  const [userProfile, setUserProfile] = useState(null);

  const loadUserProfile = async () => {
    const userProfileResponse = await getUserProfile(1);
    setUserProfile(userProfileResponse);
  };

  useEffect(() => {
    loadUserProfile();
  }, []);

  return (
    <div style={{marginLeft: 100}}>
      <h1>User Profile</h1>
      <h3>{userProfile?.name}</h3>
      <h3>{userProfile?.email}</h3>
      <h3>{userProfile?.phone}</h3>
    </div>
  );
}
export default HomePage;
