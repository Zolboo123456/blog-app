import { Box, MenuItem, Modal, Select, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { Button } from "./Button";
import { TextField } from "./TextField";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { auth, blogsCollection } from "../firebase/Firebase";
import { uploadImage } from "../cloudinary";

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

export const CreateBlogModal = (props) => {
  const { open, handleClose } = props;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");
  const [file, setFile] = useState();

  const handleSubmit = async () => {
    const user = auth.currentUser;

    if (!title || !description || !content || !tag) {
      alert("Please fill out all the fields!");
      return;
    }

    const imageURL = await uploadImage(file);

    await addDoc(blogsCollection, {
      title: title,
      description: description,
      content: content,
      tag: tag,
      imageURL: imageURL,
      createdAt: serverTimestamp(),
      userId: user.uid,
    });
    console.log(user.uid);
    setTitle("");
    setDescription("");
    setContent("");
    setTag("");
    setFile();

    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Stack sx={{ gap: "10px" }}>
          <Typography variant="h5" component="h5">
            Create Blog
          </Typography>

          <TextField
            placeholder="Title..."
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <TextField
            placeholder="Description..."
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <TextField
            placeholder="Content..."
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <Select
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            sx={{
              height: "37px",
              borderRadius: "8px",
              fontSize: "14px",
            }}
            displayEmpty
          >
            <MenuItem value="">Choose Tag</MenuItem>
            <MenuItem value="Technology">Technology</MenuItem>
            <MenuItem value="Art">Art</MenuItem>
          </Select>

          <input type="file" onChange={(e) => setFile(e.target.files[0])} />

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit}>Save</Button>
          </Box>
        </Stack>
      </Box>
    </Modal>
  );
};
