import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { TextField } from "../components/TextField";
import { signInFunction } from "../firebase/Firebase";
import { Button } from "../components/Button";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogIn = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Email and password are required");
      return;
    }

    try {
      await signInFunction(email, password);

      setEmail("");
      setPassword("");

      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Invalid email or password");
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
        onSubmit={handleLogIn}
        style={{
          padding: "30px",
          width: "300px",
          minHeight: "200px",
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 10px 0px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          borderRadius: "10px",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "700",
            margin: "0px",
            marginBottom: "10px",
          }}
        >
          Sign In
        </h2>

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

        <Button type="submit">Sign In</Button>

        <Link
          to="/sign-up"
          style={{
            textDecoration: "none",
            color: "black",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Do not have an account?
        </Link>
      </form>
    </div>
  );
};
