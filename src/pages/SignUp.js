import { useState } from "react";

export const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log({
      firstName,
      lastName,
      email,
      password,
    });
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "300px",
          width: "300px",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          border: "none",
          display: "flex",
          flexDirection: "column",
          padding: "30px",
          gap: "10px",
          borderRadius: "5px",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            padding: 0,
            margin: 0,
            marginBottom: "10px",
          }}
        >
          Sign Up
        </h2>
        <input
          value={firstName}
          type="text"
          placeholder="First Name"
          style={{
            height: "28px",
            borderRadius: "7px",
            border: "1px solid #ccc",
            padding: "7px",
            paddingLeft: "12px",
          }}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          value={lastName}
          type="text"
          placeholder="Last Name"
          style={{
            height: "28px",
            borderRadius: "7px",
            border: "1px solid #ccc",
            padding: "7px",
            paddingLeft: "12px",
          }}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          value={email}
          type="text"
          placeholder="Email"
          style={{
            height: "28px",
            borderRadius: "7px",
            border: "1px solid #ccc",
            padding: "7px",
            paddingLeft: "12px",
          }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          type="password"
          placeholder="Password"
          style={{
            height: "28px",
            borderRadius: "7px",
            border: "1px solid #ccc",
            padding: "7px",
            paddingLeft: "12px",
          }}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          style={{
            color: "white",
            backgroundColor: "rgb(75, 107, 251)",
            border: "none",
            borderRadius: "5px",
            height: "46px",
            lineHeight: "0",
          }}
          onClick={handleSubmit}
        >
          Sign Up
        </button>
        <a href="/sign-in">Already have an account?</a>
      </div>
    </div>
  );
};
