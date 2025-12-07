import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const PALETTE = {
  bg: "#05030a",
  card: "#0f0a19",
  borderSoft: "#ffffff22",
  text: "#f7f4ff",
  accent: "#d6b26f",
  accent2: "#7a3cff"
};

export default function Layout({ children }) {
  return (
    <div className="min-h-screen" style={{ background: PALETTE.bg }}>
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-6">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}
