// import { Link } from "react-router-dom";
// import { Button } from "../components/Button";
import { useUserContext } from "../context/UserContext";
// import { signOutFunction } from "../firebase/Firebase";
import { Header } from "../components/Header";
import { IconButton } from "@mui/material";
import { SlideCard } from "../components/SlideCard";
import { TrendingCard } from "../components/TrendingCard";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useBlogContext } from "../context/BlogContext";
import { useState } from "react";
import { Footer } from "../components/Footer";
import { AllCard } from "../components/AllCard";

export const Home = () => {
  // const { currentUser } = useUserContext();
  const { blogs } = useBlogContext();

  const trendingBlogs = [...blogs].slice(0, 4);

  const [slideCount, setSlideCount] = useState(0);

  const [filter, setFilter] = useState("All");

  const filteredBlogs =
    filter.toLowerCase() === "all"
      ? blogs
      : blogs.filter((blog) => blog.tag.toLowerCase() === filter.toLowerCase());

  if (!blogs || blogs.length === 0) {
    return <div>Loading...</div>;
  }

  console.log(blogs);

  return (
    <div
      style={{
        maxWidth: "100%",
        margin: "0 auto ",
        display: "flex",
        flexDirection: "column",
        minWidth: "800px",
      }}
    >
      <Header />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SlideCard blog={blogs[slideCount]} />

        <div
          style={{
            display: "flex",
            justifyContent: "end",
            marginTop: "10px",
          }}
        >
          <IconButton
            onClick={() => setSlideCount((prev) => prev - 1)}
            disabled={slideCount <= 0}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          <IconButton
            onClick={() => setSlideCount((prev) => prev + 1)}
            disabled={slideCount >= blogs.length - 1}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
        <div>
          <h2>Trending</h2>
          <div
            style={{
              display: "flex",
              maxWidth: "1200px",
              margin: "0 auto",
              gap: "25px",
            }}
          >
            {trendingBlogs.map((blog) => (
              <TrendingCard blog={blog} />
            ))}
          </div>
        </div>
        <div>
          <h2>All Blog Posts</h2>
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginBottom: "30px",
              cursor: "pointer",
            }}
          >
            <a
              onClick={() => setFilter("all")}
              style={{
                color:
                  filter.toLowerCase() === "all"
                    ? "rgb(212, 163, 115)"
                    : "black",
              }}
            >
              All
            </a>
            <a
              onClick={() => setFilter("technology")}
              style={{
                color:
                  filter.toLowerCase() === "technology"
                    ? "rgb(212, 163, 115)"
                    : "black",
              }}
            >
              Technology
            </a>
            <a
              onClick={() => setFilter("art")}
              style={{
                color:
                  filter.toLowerCase() === "art"
                    ? "rgb(212, 163, 115)"
                    : "black",
              }}
            >
              Art
            </a>
          </div>

          <div
            style={{
              display: "flex",
              maxWidth: "1200px",
              margin: "0 auto",
              gap: "25px",
              flexWrap: "wrap", // Added flexWrap so they don't go off screen
              marginBottom: "100px",
            }}
          >
            {/* Map over filteredBlogs instead of blogs */}
            {filteredBlogs.map((blog) => (
              <AllCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
