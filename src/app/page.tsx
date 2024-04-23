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
      lineWidth={6}
      className="px-8 w-full my-8"
    />
  </main>
);

export default Home;
