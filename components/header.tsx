"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#" },
  { label: "Notre Histoire", href: "#histoire" },
  { label: "Galerie", href: "#galerie" },
  { label: "Albums", href: "#albums" },
  { label: "Membres", href: "#membres" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12 lg:px-20">
        {/* Logo */}
        <Link href="#" className="flex flex-col items-start">
          <span
            className={`text-xl font-bold tracking-wide transition-colors duration-300 font-serif ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            BA NGOMBOUNDA
          </span>
          <span
            className={`text-[10px] uppercase tracking-[0.3em] transition-colors duration-300 ${
              isScrolled ? "text-muted-foreground" : "text-white/60"
            }`}
          >
            Association Familiale
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`rounded-full px-3 py-2 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                isScrolled
                  ? "text-muted-foreground hover:text-foreground hover:bg-muted"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex">
          <Link
            href="#contact"
            className={`px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-full ${
              isScrolled
                ? "bg-primary text-primary-foreground hover:opacity-90"
                : "bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 border border-white/30"
            }`}
          >
            Nous Rejoindre
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`transition-colors md:hidden ${
            isScrolled ? "text-foreground" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-border bg-background px-6 py-8 md:hidden">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-lg text-foreground font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="mt-4 bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground rounded-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Nous Rejoindre
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
