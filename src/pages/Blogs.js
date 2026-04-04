import { AllCard } from "../components/AllCard";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Link } from "react-router-dom";

import Card1 from "../images/card1.png";
import Card2 from "../images/card2.png";
import Card3 from "../images/card3.png";

export const blogs = [
  {
    id: "123",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    tag: "Technology",
    date: "August 20, 2022",
    image: Card1,
    content:
      "Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.",
  },
  {
    id: "1234",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    tag: "Technology",
    date: "August 20, 2022",
    image: Card2,
    content:
      "Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.",
  },
  {
    id: "12345",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    tag: "Technology",
    date: "August 20, 2022",
    image: Card3,
    content:
      "Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.",
  },
];

export const Blogs = () => {
  return (
    <div>
      <Header />

      <div style={{ width: "1500px", margin: "0 auto" }}>
        <div style={{ padding: "20px 40px", margin: "0px 116px 100px" }}>
          <div style={{ display: "flex", marginTop: "60px", gap: "20px" }}>
            {blogs.map((blog) => (
              <Link
                key={blog.id}
                to={`/blogs/${blog.id}`}
                style={{ textDecoration: "none", color: "#181A2A" }}
              >
                <AllCard blog={blog} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
