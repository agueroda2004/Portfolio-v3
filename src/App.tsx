import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Work from "./components/sections/Work";
import Contact from "./components/sections/Contact";
import Projects from "./components/sections/Projects";
import ProjectDetail from "./components/sections/ProjectDetail";
import NotFound from "./components/sections/NotFound";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Contact />
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main className="pt-[100px] px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}