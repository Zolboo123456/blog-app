import { Box, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { Button } from "../components/Button";
import { TextField } from "../components/TextField";
import { addDoc } from "firebase/firestore";
import { tagsCollection } from "../firebase/Firebase";

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

export const CreateTagModal = ({ open, handleClose }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    if (!name) return alert("Name is required");
    try {
      await addDoc(tagsCollection, { name, description });
      setName("");
      setDescription("");
      handleClose();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Create Tag
        </Typography>
        <TextField
          placeholder="Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div style={{ height: "10px" }} />
        <TextField
          placeholder="Description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Save</Button>
        </Box>
      </Box>
    </Modal>
  );
};
