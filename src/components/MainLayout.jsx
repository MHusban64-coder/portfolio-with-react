import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";

function MainLayout() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-6rem] top-24 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute right-[-8rem] top-40 h-96 w-96 rounded-full bg-glow-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-accent-500/15 blur-3xl" />
      </div>
      <ScrollToTop />
      <Navbar />
      <main className="relative overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
