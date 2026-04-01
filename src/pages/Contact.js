import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Contact = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <div
        id="mainContact"
        style={{
          width: "624px",
          margin: "0 auto",
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
      >
        <div id="mainContactTop" style={{ marginBottom: "50px" }}>
          <h1>Contact Us</h1>
          <p style={{ color: "rgb(105, 106, 117)", lineHeight: "24px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                paddingLeft: "16px",
                paddingRight: "16px",
                borderRadius: "10px",
                border: "1px solid rgb(232, 232, 234)",
                width: "260px",
                height: "120px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                lineHeight: "24px",
              }}
            >
              <h2 style={{ margin: "0px", marginBottom: "10px" }}>Address</h2>
              <p style={{ margin: "0px", color: "rgb(105, 106, 117)" }}>
                1328 Oak Ridge Drive, Saint Louis, Missouri
              </p>
            </div>
            <div
              style={{
                paddingLeft: "16px",
                paddingRight: "16px",
                borderRadius: "10px",
                border: "1px solid rgb(232, 232, 234)",
                width: "260px",
                height: "120px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                lineHeight: "24px",
              }}
            >
              <h2 style={{ margin: "0px", marginBottom: "10px" }}>Contact</h2>
              <p style={{ margin: "0px", color: "rgb(105, 106, 117)" }}>
                313-332-8662
                <br />
                info@email.com
              </p>
            </div>
          </div>
        </div>
        <div
          id="mainContactBottom"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "526px",
            padding: "40px",
            backgroundColor: "rgb(246, 246, 247)",
            border: "none",
            borderRadius: "10px",
            gap: "20px",
          }}
        >
          <h2 style={{ margin: "0px" }}>Leave a message</h2>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <input
              placeholder="Your name"
              style={{
                width: "230px",
                padding: "10px",
                fontSize: "13.3333px",
                borderRadius: "10px",
                border: "1px solid rgb(204, 204, 204)",
              }}
            />
            <input
              placeholder="Your email"
              style={{
                width: "230px",
                padding: "10px",
                borderRadius: "10px",
                border: "1px solid rgb(204, 204, 204)",
              }}
            />
          </div>
          <input
            placeholder="Subject"
            style={{
              borderRadius: "10px",
              padding: "8px",
              border: "1px solid rgb(204, 204, 204)",
            }}
          />
          <textarea
            placeholder="Write a message"
            rows={6}
            style={{
              borderRadius: "10px",
              padding: "16px",
              border: "1px solid rgb(204, 204, 204)",
            }}
          ></textarea>
          <button
            style={{
              height: "36px",
              width: "140px",
              color: "white",
              backgroundColor: "#4B6BFB",
              border: "none",
              borderRadius: "8px",
            }}
          >
            Send Message
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
