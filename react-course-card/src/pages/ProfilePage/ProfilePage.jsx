import React, { useContext } from "react";
import { AuthContext } from "../../Auth/authContext";
import "./ProfilePage.css";

export default function ProfilePage() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div className="profile-page">
      <h1>Profile Page</h1>
      {isLoggedIn ? (
        <p>You have logged in.</p>
      ) : (
        <p>Displayed when you logged in.</p>
      )}
    </div>
  );
}
