import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedPosts from "./components/FeaturedPosts";
import FaqSection from "./components/FaqSection";
import GetListed from "./components/GetListed";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedPosts />
      <FaqSection />
      <GetListed />
      <Footer />
    </>
  );
}