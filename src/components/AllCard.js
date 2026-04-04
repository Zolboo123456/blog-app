export const AllCard = ({ blog }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      <div>
        <div
          style={{
            width: "340px",
            height: "460px",
            padding: "20px",
            borderRadius: "12px",
            border: "1px solid rgb(232, 232, 234)",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              height: "240px",
              width: "340px",
              border: "1px solid rgb(232, 232, 234)",
              borderRadius: "6px",
              backgroundImage: `url(${blog.image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "20px",
              gap: "20px",
            }}
          >
            <div>
              <span
                style={{
                  border: "1px solid lightgrey",
                  color: "rgb(38, 230, 255)",
                  padding: "6px",
                  borderRadius: "4px",
                  fontSize: "20px",
                }}
              >
                {blog.tag}
              </span>
            </div>
            <h2
              style={{
                height: "90px",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: "3",
              }}
            >
              {blog.title}
            </h2>
            {blog.date}
          </div>
        </div>
      </div>
    </div>
  );
};
