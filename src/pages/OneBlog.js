import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useUserContext } from "../context/UserContext";
import { useBlogContext } from "../context/BlogContext";
import { useState } from "react";
import { Button } from "../components/Button";
import Card1 from "../images/card1.png";
import { database } from "../firebase/Firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { useParams, useNavigate } from "react-router-dom";
import { UpdateBlogModal } from "../components/updateBlogModal";

export const OneBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { blogs } = useBlogContext();
  const { currentUser } = useUserContext();

  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const data = blogs.find((blog) => blog.blogId === id);

  const isOwner = currentUser?.uid === data.userId;

  const handleDelete = async () => {
    if (!isOwner) return;
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await deleteDoc(doc(database, "blogs", id));
        navigate("/blogs");
      } catch (error) {
        console.error("Error deleting document: ", error);
      }
    }
  };

  if (!data) return null;

  const displayDate = data.createdAt?.seconds
    ? new Date(data.createdAt.seconds * 1000).toLocaleDateString()
    : "Recently";

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <div style={{ width: "800px", margin: "0 auto", padding: "40px 0" }}>
        <h1>{data.title}</h1>
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <p style={{ color: "#696A75" }}>{displayDate}</p>
        </div>
        <img
          src={Card1}
          alt="blog"
          style={{ marginTop: "30px", width: "100%", borderRadius: "12px" }}
        />
        <p style={{ marginTop: "40px", fontSize: "20px", lineHeight: "32px" }}>
          {data.content}
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "40px",
          }}
        >
          <Button
            onClick={() => setIsUpdateModalOpen(true)}
            disabled={!isOwner}
            style={{
              opacity: isOwner ? 100 : 70,
            }}
          >
            Update
          </Button>
          <Button
            onClick={handleDelete}
            disabled={!isOwner}
            style={{
              backgroundColor: isOwner ? "lighgray" : "#4b6bfb",
            }}
          >
            Delete
          </Button>
        </div>
      </div>

      <UpdateBlogModal
        open={isUpdateModalOpen}
        handleClose={() => setIsUpdateModalOpen(false)}
        blog={data}
      />
      <Footer />
    </div>
  );
};
