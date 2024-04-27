"use client";
import Footer from "@/components/footer";
import ReachMe from "@/components/home/reach-me";
import NavBar from "@/components/nav-bar";
import SinCurve from "@/components/sin-curve";
import { useMobile } from "@/lib/hooks";
import { lazy, useEffect } from "react";
import HeroSection from "@/components/home/hero";
import FooterClassic from "@/components/footer-classic";
import { useThemeStore } from "@/lib/stores";

const AdvertsSection = lazy(() => import("@/components/home/adverts-section"));

const Home = () => {
  const isMobile = useMobile();
  const theme = useThemeStore((state) => state.getCurrentTheme());

  useEffect(() => {
    const root: HTMLElement = document.querySelector(":root") as HTMLElement;
    for (const [k, v] of Object.entries(theme.colors)) {
      const propName = `--${k}-color`;
      console.log(propName, v);
      root.style.setProperty(propName, v);
    }
  }, [theme]);

  return isMobile ? <HomeMobile /> : <HomeDesktop />;
};

const HomeMobile = () => (
  <main className="min-h-screen flex flex-col gap-8 md:w-1/2  m-auto">
    <NavBar />
    <div className="h-[10vh]"></div>
    <HeroSection />
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
        <HeroSection />
      </div>
      <AdvertsSection className="w-[48%]" />
    </div>
    <div className="h-[10vh]"></div>
    <FooterClassic />
  </main>
);

export default Home;
