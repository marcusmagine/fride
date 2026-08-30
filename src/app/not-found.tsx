import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-sm font-medium text-[#d27957] uppercase tracking-wide mb-4">404</p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-[#354042] mb-4">
        Sidan hittades inte
      </h1>
      <p className="text-[#4a5e5f] text-lg mb-10 max-w-md">
        Sidan du letar efter verkar inte finnas. Den kan ha flyttats eller tagits bort.
      </p>
      <Link
        href="/"
        className="bg-[#20293d] text-[#fff1e6] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#2C3447] transition-colors"
      >
        Tillbaka till startsidan
      </Link>
    </section>
  );
}
