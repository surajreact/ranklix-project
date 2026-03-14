import Header from "../components/Header";
import FeaturedPosts from "../components/FeaturedPosts";
import Footer from "../components/Footer";
import { getPosts } from "../lib/wordpress";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <Header />
      <FeaturedPosts posts={posts} />
      <Footer />
    </>
  );
}