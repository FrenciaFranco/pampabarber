"use client";

import { useState, useEffect } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { BOOKSY_URL } from "@/lib/booksy";
import { useTheme } from "@/components/ThemeProvider";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const isDarkMode = theme === "dark";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Barberos", href: "#barberos" },
        { name: "Servicios", href: "#servicios" },
        { name: "Estilo", href: "#estilo" },
        { name: "Reseñas", href: "#resenas" },
        { name: "Ubicación", href: "#ubicacion" },
        { name: "FAQ", href: "#faq" },
    ];

    const navTheme = isDarkMode
        ? {
            container: isScrolled
                ? "bg-neutral-950/95 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.45)] py-3"
                : "bg-neutral-950/80 backdrop-blur-sm py-5",
            logo: "text-white",
            logoSub: "text-neutral-300",
            link: "text-neutral-200 hover:text-white",
            cta: "bg-white text-neutral-950 hover:bg-neutral-100 shadow-[0_6px_20px_rgba(255,255,255,0.2)]",
            iconButton: "text-white bg-white/10 border border-white/20",
            mobileMenu: "bg-neutral-950 text-white border-neutral-800",
            mobileLink: "text-neutral-100",
            mobileCta: "bg-white text-neutral-950",
        }
        : {
            container: isScrolled
                ? "bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-neutral-200"
                : "bg-white/85 backdrop-blur-sm py-5 border-b border-neutral-200/70",
            logo: "text-neutral-900",
            logoSub: "text-neutral-500",
            link: "text-neutral-700 hover:text-neutral-900",
            cta: "bg-neutral-900 text-white hover:bg-neutral-800 shadow-[0_6px_20px_rgba(0,0,0,0.2)]",
            iconButton: "text-neutral-900 bg-white border border-neutral-300",
            mobileMenu: "bg-white text-neutral-900 border-neutral-200",
            mobileLink: "text-neutral-900",
            mobileCta: "bg-neutral-900 text-white",
        };

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${navTheme.container}`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between pointer-events-auto">
                {/* Logo */}
                <a href="#" className={`text-2xl font-serif font-bold tracking-tighter ${navTheme.logo}`}>
                    PAMPA <span className={`font-sans text-lg font-normal ${navTheme.logoSub}`}>Barber</span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors ${navTheme.link}`}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className={`h-10 w-10 grid place-items-center rounded-md transition-colors ${navTheme.iconButton}`}
                    >
                        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <a
                        href={BOOKSY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-6 py-2.5 text-sm font-semibold transition-colors rounded-md ${navTheme.cta}`}
                    >
                        Reservar
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-2">
                    <button
                        type="button"
                        className={`rounded-md p-2 ${navTheme.iconButton}`}
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button
                        className={`rounded-md p-2 ${navTheme.iconButton}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className={`absolute top-full left-0 w-full shadow-2xl border-t md:hidden flex flex-col p-6 gap-6 ${navTheme.mobileMenu}`}>
                    <ul className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className={`text-lg font-medium ${navTheme.mobileLink}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a
                        href={BOOKSY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex justify-center px-6 py-3 text-base font-semibold rounded-md ${navTheme.mobileCta}`}
                    >
                        Reservar
                    </a>
                </div>
            )}
        </nav>
    );
}
