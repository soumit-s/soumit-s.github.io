"use client";

import Footer from "@/components/footer";
import Hero from "@/components/home/hero";
import { WorkAdvert, MeAdvert, BlogsAdvert } from "@/components/home/adverts";
import ReachMe from "@/components/home/reach-me";
import NavBar from "@/components/nav-bar";
import SinCurve from "@/components/sin-curve";
import { useMobile } from "@/lib/hooks";
import AdvertsSection from "@/components/home/adverts-section";

const Home = () => {
  const isMobile = useMobile();

  return (
    <>
      {isMobile && <HomeMobile />}
      {!isMobile && <HomeDesktop />}
    </>
  );
};

const HomeMobile = () => (
  <main className="min-h-screen flex flex-col gap-8 md:w-1/2  m-auto">
    <NavBar />
    <div className="h-[10vh]"></div>
    <Hero />
    <SinCurve
      length={16}
      amplitude={12}
      lineWidth={4}
      className="px-8 w-full"
    />
    <AdvertsSection />
    <ReachMe />
    <Footer />
  </main>
);

const HomeDesktop = () => (
  <main className="min-h-screen flex flex-col set-size m-auto py-20">
    <NavBar />
    <div className="h-[10vh]"></div>
    <div className="flex sm:gap-8 lg:gap-16 xl:gap-24">
      <div className="w-[52%]">
        <Hero />
      </div>
      <AdvertsSection className="w-[48%]" />
    </div>
  </main>
);

export default Home;
