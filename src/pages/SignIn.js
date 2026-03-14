export const SignIn = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
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
        <input
          type="mail"
          placeholder="Email"
          style={{
            height: "28px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            padding: "3px",
            paddingLeft: "12px",
          }}
        />
        <input
          type="password"
          placeholder="Password"
          style={{
            height: "28px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            padding: "3px",
            paddingLeft: "12px",
          }}
        />
        <button
          style={{
            height: "36px",
            width: "300px",
            backgroundColor: "#4b6bfb",
            border: "none",
            color: "white",
            borderRadius: "5px",
            padding: "10px 16px",
          }}
        >
          Sign In
        </button>
        <a href="/sign-up">Do you have an account?</a>
      </div>
    </div>
  );
};
