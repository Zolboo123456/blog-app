import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useUserContext } from "../context/UserContext";
import { signOutFunction } from "../firebase/Firebase";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "../components/Button";
import { useParams } from "react-router-dom";

import { blogs } from "../pages/Blogs";

export const OneBlog = () => {
  const { id } = useParams();

  const { currentUser } = useUserContext();
  const [showMenu, setShowMenu] = useState(false);

  // console.log(blogs);
  const data = blogs.find((blog) => blog.id === id);

  console.log(data);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "0px 0px 100px",
          width: "800px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            margin: "40px 0px",
            overflowWrap: "break-word",
          }}
        >
          {data.title}
        </h1>
        <div
          style={{
            display: "flex",
            gap: "20px",
            width: "100%",
            alignItems: "center",
          }}
        >
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
          <p style={{ color: "#696A75" }}>{new Date().toLocaleDateString()}</p>
        </div>
        <img
          src={data.image}
          alt="blogImage"
          style={{ marginTop: "30px", width: "800px" }}
        />
        <p
          style={{
            marginTop: "40px",
            textAlign: "left",
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "32px",
            letterSpacing: "0%",
            fontFamily: "Source Serif Pro",
          }}
        >
          {data.content}
        </p>
      </div>
      <Footer />
    </div>
  );
};
