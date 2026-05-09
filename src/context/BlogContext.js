import { onSnapshot, doc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { blogsCollection } from "../firebase/Firebase";

const BlogContext = createContext();

export const BlogContextProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(true);

  useEffect(() => {
    const giveLiveUpdates = onSnapshot(
      blogsCollection,
      (collectionSnapshot) => {
        const blogsData = collectionSnapshot.docs.map((blogDoc) => ({
          blogId: blogDoc.id,
          ...blogDoc.data(),
        }));

        setBlogs(blogsData);

        console.log(blogs);
      },
    );

    return () => giveLiveUpdates();
  }, []);

  return (
    <BlogContext.Provider value={{ blogs }}>{children}</BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  return useContext(BlogContext);
};
