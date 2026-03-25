import React, { useState } from "react";
import { TextField } from "../components/TextField";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { signUp } from "../firebase/Firebase";

export const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      alert("All 4 fields are required");
      return;
    }

    try {
      await signUp(firstName, lastName, email, password);

      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");

      navigate("/");
    } catch (error) {
      console.log(error);
    }
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
      <form
        onSubmit={handleSubmit}
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

        <TextField
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit">Sign Up</Button>

        <Link
          to="/sign-in"
          style={{ textDecoration: "none", color: "black", fontSize: "14px" }}
        >
          Already have an account?
        </Link>
      </form>
    </div>
  );
};
