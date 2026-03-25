import companyLogo from "../images/Logo-2.png";

export const Header = () => {
  return (
    <div
      style={{
        height: "100px",
        width: "1130px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 180px",
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
          Blog
        </a>
        <a href="/contact" style={{ textDecoration: "none", color: "#3B3C4A" }}>
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
  );
};
