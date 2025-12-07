import React from "react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="pt-6 mt-8 border-t border-white/10 text-xs text-white/60 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
    >
      <p>
        © {new Date().getFullYear()} BAWON+ — L’excellence haïtienne, du passé
        vers le futur.
      </p>
      <div className="flex flex-wrap gap-3 items-center">
        <span>contact@bawon.plus</span>
        <a
          href="/contact"
          className="underline underline-offset-2 hover:text-white"
        >
          Formulaire de contact
        </a>
        <a
          href="/infos"
          className="underline underline-offset-2 hover:text-white"
        >
          Réseaux & légal
        </a>
      </div>
    </footer>
  );
}
