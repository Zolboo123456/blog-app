import { Box, Modal, Typography, Select, MenuItem } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { TextField } from "./TextField";
import { doc, updateDoc } from "firebase/firestore";
import { database } from "../firebase/Firebase";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "8px",
  p: 4,
};

export const UpdateBlogModal = ({ open, handleClose, blog }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");

  useEffect(() => {
    if (blog) {
      setTitle(blog.title || "");
      setDescription(blog.description || "");
      setContent(blog.content || "");
      setTag(blog.tag || "");
    }
  }, [blog, open]);

  const handleUpdate = async () => {
    if (!blog?.blogId) return;

    try {
      const blogRef = doc(database, "blogs", blog.blogId);
      await updateDoc(blogRef, {
        title,
        description,
        content,
        tag,
      });
      handleClose();
    } catch (error) {
      console.error("Error updating blog:", error);
      alert("Failed to update blog.");
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Update Blog
        </Typography>

        <TextField
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div style={{ height: "10px" }} />

        <TextField
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div style={{ height: "10px" }} />

        <TextField
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div style={{ height: "10px" }} />

        <Select
          fullWidth
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          sx={{ mb: 2 }}
        >
          <MenuItem value="Technology">Technology</MenuItem>
          <MenuItem value="Art">Art</MenuItem>
        </Select>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUpdate}>Update</Button>
        </Box>
      </Box>
    </Modal>
  );
};
