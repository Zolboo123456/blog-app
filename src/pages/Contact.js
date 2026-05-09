import React, { useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { auth, messagesCollection } from "../firebase/Firebase";
import { addDoc } from "firebase/firestore";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    const user = auth.currentUser;

    if (!name || !email || !subject || !message) {
      alert("Please fill out all the fields!");
      return;
    }

    setLoading(true);

    try {
      await addDoc(messagesCollection, {
        name: name,
        email: email,
        subject: subject,
        message: message,
        uid: user ? user.uid : "anonymous",
      });

      alert("Message sent!");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            style={{
              borderRadius: "10px",
              padding: "8px",
              border: "1px solid rgb(204, 204, 204)",
            }}
          />
          <textarea
            placeholder="Write a message"
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              borderRadius: "10px",
              padding: "16px",
              border: "1px solid rgb(204, 204, 204)",
            }}
          ></textarea>
          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              height: "36px",
              width: "140px",
              color: "white",
              backgroundColor: loading ? "#A5B4FC" : "#4B6BFB",
              border: "none",
              borderRadius: "8px",
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "sending..." : "Send Message"}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
