import Link from "next/link";

const columns = [
  {
    heading: "Vilka vi är",
    links: [
      { label: "Om oss", href: "/om-oss" },
      { label: "Kontakta oss", href: "/kontakta-oss" },
    ],
  },
  {
    heading: "Dokument",
    links: [
      { label: "Framtidsfullmakt", href: "/framtidsfullmakt" },
      { label: "Gåvobrev", href: "/gavobrev" },
      { label: "Skuldebrev", href: "/skuldebrev" },
    ],
  },
  {
    heading: "Vägledning",
    links: [
      { label: "När någon gått bort", href: "/steg-for-steg" },
      { label: "Bouppteckning", href: "/bouppteckning" },
      { label: "Kunskapsbanken", href: "/kunskap" },
    ],
  },
  {
    heading: "Övrigt",
    links: [
      { label: "Cookies", href: "/cookies" },
      { label: "Integritetspolicy", href: "/integritetspolicy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#20293d] text-[#fff1e6] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-12 relative z-10">
        <Link
          href="/"
          className="block font-serif text-6xl md:text-7xl font-semibold text-[#fff1e6] text-center mb-12 tracking-tight"
        >
          fride
        </Link>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-medium text-[#d27957] mb-4">{col.heading}</h3>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-[#fff1e6]/80 hover:text-[#fff1e6] transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-8 border-t border-[#fff1e6]/10">
          <div className="space-y-1">
            <p className="text-sm text-[#fff1e6]/70">info@fride.se</p>
            <p className="text-sm text-[#fff1e6]/70">Stockholm</p>
          </div>
          <Link
            href="/kontakta-oss"
            className="inline-block bg-[#d27957] text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-[#c06a44] transition-colors self-start sm:self-auto"
          >
            Kontakta oss
          </Link>
          <p className="text-xs text-[#fff1e6]/40 sm:self-end">© {new Date().getFullYear()} Fride AB</p>
        </div>
      </div>

      {/* Decorative wave shape */}
      <div className="absolute bottom-0 right-0 w-72 md:w-96 h-64 md:h-80 pointer-events-none">
        <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            d="M400 320 C300 320 180 260 160 180 C140 100 220 40 300 20 C360 5 400 30 400 30 Z"
            fill="#c06a44"
            opacity="0.6"
          />
          <path
            d="M400 320 C320 320 220 280 200 210 C180 140 250 80 340 60 C380 50 400 70 400 70 Z"
            fill="#d27957"
            opacity="0.5"
          />
        </svg>
      </div>
    </footer>
  );
}
