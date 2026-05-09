import { AllCard } from "../components/AllCard";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Link } from "react-router-dom";
import { useBlogContext } from "../context/BlogContext";
import React, { useState } from "react";
import { CreateBlogModal } from "../components/CreateBlogModal";

export const Blogs = () => {
  const { blogs } = useBlogContext();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "30px",
          width: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ position: "relative" }}>
          <input
            type="text"
            placeholder="Search"
            style={{
              width: "200px",
              height: "24px",
              padding: "8px 12px",
              borderRadius: "5px",
              backgroundColor: "whitesmoke",
              outline: "none",
              border: "none",
            }}
          />
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          <button
            onClick={handleOpen}
            style={{
              backgroundColor: "#4B6BFB",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Create Blog
          </button>
          <CreateBlogModal open={open} handleClose={handleClose} />
        </div>
      </div>
      <div style={{ maxWidth: "1216px", margin: "0 auto", padding: "0 20px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            marginTop: "60px",
            marginBottom: "100px",
            justifyContent: "flex-start",
          }}
        >
          {blogs.map((blog) => (
            <Link
              key={blog.blogId}
              to={`/blogs/${blog.blogId}`}
              style={{ textDecoration: "none", color: "#181A2A" }}
            >
              <AllCard blog={blog} />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
