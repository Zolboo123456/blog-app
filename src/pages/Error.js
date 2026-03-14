import companyLogo from "../images/Union.png";

export const Error = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        maxHeight: "100%",
        width: "100vw",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "32px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <img
            src={companyLogo}
            alt="logo"
            style={{ height: "36px", width: "36px" }}
          />
          <p>Meta Blog</p>
        </div>

        <div style={{ gap: "40px" }}>
          <a href="/Home" style={{ textDecoration: "none", color: "#3B3C4A" }}>
            Home
          </a>
          <a href="/blog" style={{ textDecoration: "none", color: "#3B3C4A" }}>
            Blog
          </a>
          <a
            href="/contact"
            style={{ textDecoration: "none", color: "#3B3C4A" }}
          >
            Contact
          </a>
        </div>
        <input
          type="text"
          placeholder="Search"
          style={{
            backgroundColor: "#F4F4F5",
            padding: "8px 8px 8px 16px",
            border: "none",
            borderRadius: "5px",
          }}
        />
      </div>
      <div
        style={{
          gap: "40px",
          display: "flex",
          justifySelf: "center",
          alignItems: "center",
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
      <div></div>
    </div>
  );
};
