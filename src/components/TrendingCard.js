import Mashin from "../images/mashin.png";

export const TrendingCard = ({ blog }) => {
  return (
    <div style={{ position: "relative", cursor: "pointer" }}>
      <div
        style={{
          height: "320px",
          width: "280px",
          borderRadius: "12px",
          backgroundImage: `url(${Mashin})`,
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
          top: "200px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "230px",
        }}
      >
        <div>
          <span
            style={{
              backgroundColor: "#4B6BFB",
              borderRadius: "6px",
              padding: "4px 10px",
            }}
          >
            {blog.tagName}
          </span>
        </div>
        <div style={{ height: "70px", overflow: "hidden" }}>
          <h2
            style={{
              fontSize: "18px",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: "2",
            }}
          >
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h2>
        </div>
      </div>
    </div>
  );
};
