import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import { Button } from "../components/Button";
import { deleteDoc, doc } from "firebase/firestore";
import { database } from "../firebase/Firebase";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

export const DeleteBlogModal = ({ open, handleClose, blogId, blogTitle }) => {
  const navigate = useNavigate();

  const onDelete = async () => {
    try {
      await deleteDoc(doc(database, "blogs", blogId));
      handleClose();
      navigate("/blogs");
    } catch (error) {
      console.error("Error deleting document: ", error);
      alert("Failed to delete the blog. Please try again.");
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography
          variant="h6"
          component="h2"
          sx={{ mb: 2, fontWeight: "bold" }}
        >
          Delete Blog?
        </Typography>
        <Typography sx={{ mb: 4, color: "#696A75" }}>
          Are you sure you want to delete <strong>"{blogTitle}"</strong>? This
          action cannot be undone.
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: "15px" }}>
          <Button
            onClick={handleClose}
            style={{ backgroundColor: "#E8E8EA", color: "#3B3C4A" }}
          >
            Cancel
          </Button>
          <Button
            onClick={onDelete}
            style={{ backgroundColor: "#ff4d4d", color: "white" }}
          >
            Delete
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
