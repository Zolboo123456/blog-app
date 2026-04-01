import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Mashin from "../images/mashin.png";
import { useUserContext } from "../context/UserContext";
import { TrendingCard } from "../components/TrendingCard";
import { AllCard } from "../components/AllCard";

export const Home = () => {
  const blog = {
    blogId: "1",
    imageUrl: "",
    tagName: "Technology",
    title: "Title",
  };
  const { currentUser } = useUserContext();

  console.log(currentUser);

  return (
    <div>
      <Header />

      <div
        id="homeContainer"
        style={{
          padding: "0px 40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "start",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "20px",
            margin: "50px 0px",
          }}
        >
          <div
            style={{
              position: "relative",
              cursor: "pointer",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                width: "1200px",
                height: "600px",
                borderRadius: "12px",
                backgroundImage: `url(${Mashin})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                filter: "brightness(80%)",
              }}
            />
            <div
              style={{
                backgroundColor: "white",
                padding: "40px",
                position: "absolute",
                borderRadius: "12px",
                left: "25px",
                bottom: "25px",
                display: "flex",
                flexDirection: "column",
                width: "520px",
                maxHeight: "230px",
                gap: "20px",
              }}
            >
              <div style={{ gap: "20px" }}>
                <span
                  style={{
                    backgroundColor: "rgb(75, 107, 251)",
                    borderRadius: "6px",
                    padding: "4px 10px",
                    color: "white",
                  }}
                >
                  Technology
                </span>
                <div style={{ height: "100px", overflow: "hidden" }}>
                  <h2
                    style={{
                      fontSize: "36px",
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: "2",
                      margin: "0px",
                      paddingTop: "10px",
                      marginBottom: "20px",
                    }}
                  >
                    The Impact of Technology on the Workplace: How Technology is
                    Changing
                  </h2>
                </div>
                <span>December 23, 2024</span>
              </div>
            </div>
          </div>
        </div>
        <div
          id="trending"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            margin: "50px 0px",
          }}
        >
          <h2>Trending</h2>
          <div style={{ display: "flex", gap: "20px" }}>
            <TrendingCard blog={blog} />
          </div>
        </div>
        <div
          id="allBlogPosts"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            margin: "50px 0px",
          }}
        >
          <h2 style={{ margin: "0px", padding: "0px" }}>All Blog Posts</h2>
          <div
            style={{
              display: "flex",
              gap: "20px",
              fontSize: "14px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            <div style={{ color: "rgb(212, 163, 115)" }}>All</div>
            <div style={{ color: "rgb(0, 0, 0)" }}>Discovery</div>
            <div style={{ color: "rgb(0, 0, 0)" }}>Technology</div>
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <AllCard />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
