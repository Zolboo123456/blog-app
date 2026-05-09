import Mashin from "../images/mashin.png";

export const TrendingCard = ({ blog }) => {
  if (!blog) return null;
  return (
    <div
      style={{
        position: "relative",
        cursor: "pointer",
        marginBottom: "50px",
        width: "280px",
        border: "1px solid lightgray",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          height: "320px",
          width: "280px",
          borderRadius: "12px",
          backgroundImage: `url(${blog.imageURL || Mashin} )`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "brightness(60%)",
        }}
      />
      <div
        style={{
          color: "white",
          position: "absolute",
          left: "20px",
          bottom: "20px",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "240px",
        }}
      >
        <div>
          <span
            style={{
              backgroundColor: "rgb(75, 107, 251)",
              borderRadius: "6px",
              padding: "4px 10px",
              fontSize: "12px",
              display: "inline-block",
            }}
          >
            {blog.tag}
          </span>
        </div>
        <h2
          style={{
            fontSize: "18px",
            margin: "0px",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: "2",
            overflow: "hidden",
          }}
        >
          {blog.title}
        </h2>
      </div>
    </div>
  );
};
