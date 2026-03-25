import instagramLogo from "../images/instagram.png";
import facebookLogo from "../images/facebook.png";
import linkedinLogo from "../images/linkedin.png";
import twitterLogo from "../images/twitter.png";
import companyLogo from "../images/Logo-2.png";

export const Footer = () => {
  return (
    <div
      id="footer"
      style={{ padding: "60px 0px", backgroundColor: "rgb(246, 246, 247)" }}
    >
      <div
        id="footerContainer"
        style={{
          padding: "0px 40px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          maxWidth: "1200px",
        }}
      >
        <div
          id="footerTopSection"
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: "20px",
          }}
        >
          <div id="about" style={{ width: "289px", lineHeight: "25px" }}>
            <h4 style={{ margin: "0px" }}>About</h4>
            <p style={{ color: "rgb(105, 106, 117)", margin: "0px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <div style={{ lineHeight: "20px", marginTop: "10px" }}>
              <p style={{ color: "rgb(105, 106, 117)", margin: "0px" }}>
                <b style={{ color: "black" }}>Email:</b> info@jstemplate.net
              </p>
              <p style={{ color: "rgb(105, 106, 117)", margin: "0px" }}>
                <b style={{ color: "black" }}>Phone:</b> 880 123 456 789
              </p>
            </div>
          </div>

          <div
            id="navigation"
            style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
          >
            <a
              href="/"
              style={{ color: "rgb(59, 60, 74)", textDecoration: "none" }}
            >
              Home
            </a>
            <a
              href="/blogs"
              style={{ color: "rgb(59, 60, 74)", textDecoration: "none" }}
            >
              Blogs
            </a>
            <a
              href="/contact-us"
              style={{ color: "rgb(59, 60, 74)", textDecoration: "none" }}
            >
              Contact
            </a>
          </div>

          <div id="social" style={{ display: "flex", gap: "10px" }}>
            <img src={facebookLogo} style={{ height: "16px" }} />
            <img src={twitterLogo} style={{ height: "16px" }} />
            <img src={instagramLogo} style={{ height: "16px" }} />
            <img src={linkedinLogo} style={{ height: "16px" }} />
          </div>
        </div>

        <hr
          style={{
            height: "1px",
            width: "1150px",
          }}
        />

        <div
          id="footerBottomSection"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div>
              <img
                src={companyLogo}
                alt="logo"
                style={{ height: "36px", width: "158px" }}
              />
              <div style={{ fontSize: "12px", color: "gray" }}>
                © All Rights Reserved.
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <a
              href="#"
              style={{ color: "rgb(59, 60, 74)", textDecoration: "none" }}
            >
              Terms of Service
            </a>
            <hr style={{ height: "30px", backgroundColor: "whitesmoke" }} />
            <a
              href="#"
              style={{ color: "rgb(59, 60, 74)", textDecoration: "none" }}
            >
              Privacy Policy
            </a>
            <hr style={{ height: "30px", color: "whitesmoke" }} />
            <a
              href="#"
              style={{ color: "rgb(59, 60, 74)", textDecoration: "none" }}
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
