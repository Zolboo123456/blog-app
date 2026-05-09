import React from "react";

export const SlideCard = (props) => {
  const { blog } = props;

  if (!blog) return null;

  const formattedDate = blog.createdAt?.toDate
    ? blog.createdAt.toDate().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <div
      style={{
        position: "relative",
        width: 1200,
        height: 600,
        marginTop: "40px",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${blog.image || "https://picsum.photos/seed/picsum/1200/600"})`,
          borderRadius: "12px",
          width: "100%",
          height: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "brightness(80%)",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <div
        style={{
          backgroundColor: "white",
          position: "absolute",
          padding: "40px",
          borderRadius: "12px",
          left: "25px",
          bottom: "25px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "520px",
          height: "170px",
          zIndex: 1,
        }}
      >
        <div>
          <span
            style={{
              backgroundColor: "rgb(75, 107, 251)",
              borderRadius: "6px",
              padding: "8px 16px",
              color: "white",
            }}
          >
            {blog.tag}
          </span>
        </div>
        <div style={{ height: "100px", overflow: "hidden" }}>
          <h2
            style={{
              fontSize: "36px",
              margin: 0,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: "2",
            }}
          >
            {blog.title}
          </h2>
        </div>
        <div style={{ color: "#666" }}>{formattedDate}</div>
      </div>
    </div>
  );
};
