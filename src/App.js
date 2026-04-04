import { Home } from "./pages/Home";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { Error } from "./pages/404";
import { Contact } from "./pages/Contact";
import { Tags } from "./pages/Tags";
import { Blogs } from "./pages/Blogs";
import { OneBlog } from "./pages/OneBlog";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/404" element={<Error />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/tags" element={<Tags />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/blogs/:id" element={<OneBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
