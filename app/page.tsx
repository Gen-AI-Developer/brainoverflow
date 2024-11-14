import BlogFeed from "./components/blog-feed";
import Footer from "./components/Footer";
import BlogHero from "./components/Hero";
import Navbar from "./components/Navbar";
import TrendingBlogPost from "./components/TrendingBlog";

export default function Home() {
  return (
    <>
      <Navbar />
      <BlogHero />
      <TrendingBlogPost />
      <BlogFeed />
      <Footer />
    </>
  );
}
