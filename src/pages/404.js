import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Error = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        maxHeight: "100%",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <div
        style={{
          gap: "40px",
          display: "flex",
          justifySelf: "center",
          alignItems: "center",
          alignSelf: "center",
          marginTop: "30px",
          marginBottom: "30expx",
        }}
      >
        <p style={{ fontWeight: "400", fontSize: "72px" }}>404</p>
        <hr style={{ border: "1px solid #E8E8EA", height: "156px" }} />
        <div
          style={{
            width: "320px",
          }}
        >
          <p style={{ fontWeight: "600", fontSize: "24px" }}>Page not found</p>
          <p style={{ color: "#696A75" }}>
            We're sorry, This page is unknown or does not exist the page you are
            looking for.
          </p>
          <button
            style={{
              width: "320px",
              backgroundColor: " #4B6BFB",
              padding: "10px 16px",
              border: "none",
              borderRadius: "6px",
              color: "white",
            }}
          >
            Back to Home
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
