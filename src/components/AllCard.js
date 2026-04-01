import Mashin from "../images/mashin.png";

export const AllCard = () => {
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
              backgroundImage: `url(${Mashin})`,
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
                Technology
              </span>
            </div>
            <h2
              style={{
                height: "60px",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: "2",
              }}
            >
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </h2>
            December 23, 2024
          </div>
        </div>
      </div>
    </div>
  );
};
