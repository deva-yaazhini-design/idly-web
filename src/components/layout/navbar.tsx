"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "py-4 bg-surface/60 backdrop-blur-xl border-b border-accent/20 shadow-[0_10px_40px_-10px_rgba(29,28,21,0.05)]"
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 md:px-20 max-w-7xl flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-display font-semibold tracking-tight text-foreground"
        >
          Yaazhini Idly
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {["Heritage", "Catering", "Gallery"].map((item) => (
            <motion.div key={item} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors duration-300"
              >
                {item === "Heritage" ? "Our Heritage" : item}
              </Link>
            </motion.div>
          ))}
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link
              href="#inquire"
              className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-[0_4px_14px_0_rgba(59,105,52,0.39)] hover:shadow-[0_6px_20px_rgba(59,105,52,0.23)] border border-primary/20"
            >
              Inquire Now
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Toggle */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-surface/95 backdrop-blur-2xl border-b border-border shadow-xl px-6 py-6 flex flex-col gap-6"
          >
            {["Heritage", "Catering", "Gallery"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg font-medium text-foreground hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item === "Heritage" ? "Our Heritage" : item}
              </Link>
            ))}
            <Link
              href="#inquire"
              className="mt-2 w-full text-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Inquire Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
