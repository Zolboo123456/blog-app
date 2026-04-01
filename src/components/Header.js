import companyLogo from "../images/Logo-2.png";
import { Button } from "../components/Button";
import { useUserContext } from "../context/UserContext";
import { signOutFunction } from "../firebase/Firebase";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const { currentUser } = useUserContext();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div
      style={{
        height: "100px",
        width: "1130px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 180px",
        margin: "0 auto",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          style={{ cursor: "pointer", height: "36px", width: "158" }}
          src={companyLogo}
          alt="logo"
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "600px",
          gap: "20px",
        }}
      >
        <a href="/home" style={{ textDecoration: "none", color: "#3B3C4A" }}>
          Home
        </a>
        <a href="/blog" style={{ textDecoration: "none", color: "#3B3C4A" }}>
          Blogs
        </a>
        <a href="/tags" style={{ textDecoration: "none", color: "#3B3C4A" }}>
          Tags
        </a>
        <a href="/contact" style={{ textDecoration: "none", color: "#3B3C4A" }}>
          Contact
        </a>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {currentUser ? (
          <div style={{ position: "relative" }}>
            <div
              onClick={() => setShowMenu(!showMenu)}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#333",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              {currentUser.displayName
                ?.split(" ")
                .map((name) => name.charAt(0).toUpperCase())
                .join("")}
            </div>

            {showMenu && (
              <div
                style={{
                  position: "absolute",
                  top: "50px",
                  right: 0,
                  backgroundColor: "#fff",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  padding: "10px",
                  width: "81px",
                }}
              >
                <Button onClick={signOutFunction}>Sign out</Button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/sign-in">
            <Button>Sign In</Button>
          </Link>
        )}
      </div>
    </div>
  );
};
