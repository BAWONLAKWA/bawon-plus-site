import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4">
      <div
        className="text-2xl font-black tracking-widest px-4 py-2 rounded-2xl border text-white flex items-center gap-2"
        style={{ borderColor: "#d6b26f80", background: "#150c23a0" }}
      >
        BAWON<span style={{ color: "#d6b26f" }}>+</span>
      </div>
      <nav className="hidden md:flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-white/70">
        <a href="/" className="hover:text-white">Accueil</a>
        <a href="/services" className="hover:text-white">Services</a>
        <a href="/investisseurs" className="hover:text-white">Investisseurs</a>
        <a href="/partenariats" className="hover:text-white">Partenariats</a>
        <a href="/donations" className="hover:text-white">Don</a>
        <a href="/contact" className="hover:text-white">Contact</a>
        <a href="/infos" className="hover:text-white">Infos</a>
      </nav>
    </header>
  );
}
