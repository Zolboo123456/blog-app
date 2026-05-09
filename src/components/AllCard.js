import Card1 from "../images/card1.png";

export const AllCard = ({ blog }) => {
  return (
    <div
      style={{
        width: "340px",
        height: "460px",
        padding: "16px",
        borderRadius: "12px",
        border: "1px solid rgb(232, 232, 234)",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        backgroundColor: "#fff",
      }}
    >
      <img
        src={blog.imageURL || Card1}
        style={{
          height: "240px",
          width: "100%",
          objectFit: "cover",
          borderRadius: "6px",
        }}
        alt="blog"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <div>
          <span
            style={{
              color: "rgb(38, 230, 255)",
              padding: "6px",
              borderRadius: "10px",
              fontSize: "20px",
              border: "1px solid lightgrey",
              marginTop: "10px",
            }}
          >
            {blog.tag}
          </span>
        </div>
        <h2
          style={{
            fontSize: "20px",
            height: "80px",
            margin: "0",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: "3",
            lineHeight: "1.4",
          }}
        >
          {blog.title}
        </h2>
        {/* <p style={{ color: "#97989F", margin: "0", fontSize: "16px" }}>
          {blog.createdAt.toDate().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p> */}
      </div>
    </div>
  );
};
