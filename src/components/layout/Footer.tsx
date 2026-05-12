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
      { label: "Framtidsdokument", href: "/framtidsdokument" },
      { label: "Framtidsfullmakt", href: "/framtidsfullmakt" },
      { label: "Gåvobrev", href: "/gavobrev" },
      { label: "Skuldebrev", href: "/skuldebrev" },
      { label: "Testamente", href: "/testamente" },
      { label: "Samboavtal", href: "/samboavtal" },
    ],
  },
  {
    heading: "Vägledning",
    links: [
      { label: "Framtidsklar", href: "/framtidsklar" },
      { label: "För sambor", href: "/framtidsklar/sambor" },
      { label: "För gifta", href: "/framtidsklar/gift" },
      { label: "För ensamstående med barn", href: "/framtidsklar/ensamstaende" },
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

      {/* Decorative background */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/footer-bg.svg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
    </footer>
  );
}
