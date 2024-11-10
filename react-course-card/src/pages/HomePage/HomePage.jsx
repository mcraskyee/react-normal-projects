import React, { useContext } from "react";
import { AuthContext } from "../../Auth/authContext";
import "./HomePage.css";

export default function HomePage() {
  const { isLoggedIn, login, logout } = useContext(AuthContext);
  return (
    <section className="homepage">
      <h1>Welcome to Course Card</h1>
      {isLoggedIn ? (
        <div className="login">
          <p>You are logged in.</p>
          <button onClick={logout}>Log Out</button>
        </div>
      ) : (
        <div className="login">
          <input type="text" placeholder="Account Name" />
          <input type="password" placeholder="Password" />
          <button onClick={login}>Sign In</button>
        </div>
      )}
    </section>
  );
}
