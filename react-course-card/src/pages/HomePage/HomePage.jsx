import React from "react";
import "./HomePage.css";

export default function HomePage() {
  return (
    <section className="homepage">
      <h1>Welcome to Course Card</h1>
      <div className="login">
        <input type="text" placeholder="Account Name (abc)" />
        <input type="password" placeholder="Password (123)" />
        <button>Sign In</button>
      </div>
    </section>
  );
}
