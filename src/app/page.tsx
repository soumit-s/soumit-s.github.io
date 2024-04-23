import Footer from "@/components/footer";
import Hero from "@/components/home/hero";
import NavBar from "@/components/nav-bar";
import SinCurve from "@/components/sin-curve";

const Home = () => (
  <main className="min-h-screen block">
    <div className="h-[20vh]"></div>
    <Hero />
    <SinCurve
      length={16}
      amplitude={12}
      lineWidth={4}
      className="px-8 w-full mt-8"
    />
    <div className="px-8 my-8"><hr/></div>
    <Footer />
  </main>
);

export default Home;
