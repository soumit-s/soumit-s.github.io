import Footer from "@/components/footer";
import WorkSection from "@/components/home/work-section";
import BlogsSection from "@/components/home/blogs-section";
import Hero from "@/components/home/hero";
import MeSection from "@/components/home/me-section";
import ReachMe from "@/components/home/reach-me";
import NavBar from "@/components/nav-bar";
import SinCurve from "@/components/sin-curve";

const Home = () => (
  <main className="min-h-screen flex flex-col gap-8 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-2/5 m-auto">
    <NavBar />
    <div className="h-[10vh]"></div>
    <Hero />
    <SinCurve
      length={16}
      amplitude={12}
      lineWidth={4}
      className="px-8 w-full"
    />
    <MeSection />
    <WorkSection />
    <BlogsSection />
    <ReachMe />
    <Footer />
  </main>
);

export default Home;
