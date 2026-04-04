import { Header } from "../components/Header";

export const Tags = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header />
      <div style={{ margin: "30px 0px 0px" }}>
        <h2 style={{ marginBottom: "30px" }}>List of Tags</h2>
        <div>Discovery</div>
        <div>Technology</div>
      </div>
    </div>
  );
};
