"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  {
    label: "Framtidsdokument",
    children: [
      { label: "Framtidsfullmakt", href: "/framtidsfullmakt" },
      { label: "Gåvobrev", href: "/gavobrev" },
      { label: "Skuldebrev", href: "/skuldebrev" },
    ],
  },
  { label: "Om oss", href: "/om-oss" },
  { label: "Kunskap", href: "/kunskap" },
  { label: "När någon gått bort", href: "/steg-for-steg" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#20293d]">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Link href="/" className="font-serif text-xl font-semibold text-[#fff1e6] tracking-tight">
            fride
          </Link>
          <span className="hidden md:block w-px h-5 bg-[#fff1e6]/30" />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 flex-1 ml-6">
          {navLinks.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <button className="flex items-center gap-1 text-sm text-[#fff1e6]/80 hover:text-[#fff1e6] transition-colors">
                  {item.label}
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 bg-[#20293d] border border-[#fff1e6]/10 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-52 py-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-[#fff1e6]/80 hover:text-[#fff1e6] hover:bg-[#fff1e6]/5 transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                className="text-sm text-[#fff1e6]/80 hover:text-[#fff1e6] transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <Link
          href="/framtidsfullmakt"
          className="hidden md:inline-block bg-[#d27957] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#c06a44] transition-colors duration-300 ml-4"
        >
          Skapa framtidsfullmakt
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-[#fff1e6]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Öppna meny"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#fff1e6]/10 bg-[#20293d] px-6 pb-6">
          <button
            className="flex items-center gap-1 py-3 text-sm text-[#fff1e6]/80 w-full text-left"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Framtidsdokument
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {dropdownOpen && (
            <div className="pl-4 flex flex-col gap-3 mb-2">
              {navLinks[0].children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="text-sm text-[#fff1e6]/70 hover:text-[#fff1e6]"
                  onClick={() => setMobileOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}
          {navLinks.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href!}
              className="block py-3 text-sm text-[#fff1e6]/80 border-t border-[#fff1e6]/10"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/framtidsfullmakt"
            className="mt-4 block bg-[#d27957] text-white text-sm font-medium px-5 py-3 rounded-full text-center"
            onClick={() => setMobileOpen(false)}
          >
            Skapa framtidsfullmakt
          </Link>
        </div>
      )}
    </header>
  );
}
