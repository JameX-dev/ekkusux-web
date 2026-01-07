import Image from "next/image";
import { FaTiktok, FaInstagram, FaFacebookF } from "react-icons/fa6";

export default function Home() {
  const products = [
    {
      name: "Playera Stranger Things · Edición limitada",
      description:
        "Basada en Stranger Things 5, arte Will vs Vecna, tiraje limitado.",
      price: "MXN $599",
      link: "https://buy.stripe.com/5kQaEX2wS4xSf6m93Mc3m04",
      tag: "Edición limitada",
      images: ["/playera1.png", "/playera1-b.jpg"],
    },

    {
      name: "Playera Stranger Things 5",
      description:
        "Inspirada en la temporada 5, arte oficial, fit cómodo y suave al tacto.",
      price: "MXN $649",
      link: "https://buy.stripe.com/cNi14n1sO0hC3nE0xgc3m05",
      tag: "Edición limitada",
      images: ["/playera2.png", "/playera2-b.jpg"],
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.15),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(236,72,153,0.2),transparent_25%),radial-gradient(circle_at_40%_60%,rgba(16,185,129,0.12),transparent_25%)]" />

      <nav className="sticky top-0 z-20 border-b border-white/10 bg-neutral-950/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl">
              <Image
                src="/logo-ekkusux.png"
                alt="Ekkusux logo"
                fill
                className="object-contain"
                sizes="40px"
                priority
              />
            </div>
            <p className="text-base font-semibold text-white">EKKUSUX</p>
          </div>
          <div className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            <a className="hover:text-white" href="#productos">
              Playeras
            </a>
            <a className="hover:text-white" href="#faq">
              Envíos
            </a>
            <a className="hover:text-white" href="#footer">
              Contacto
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#footer"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/10"
            >
              Redes
            </a>
          </div>
        </div>
      </nav>

      <header className="mx-auto flex max-w-5xl flex-col gap-5 px-4 pb-8 pt-16 sm:px-6 sm:pb-10 sm:pt-24">
        <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200">
          EKKUSUX · Online store
        </p>
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold leading-tight sm:text-5xl">
            Playeras de edición limitada.
          </h1>
          <p className="max-w-2xl text-base text-zinc-300 sm:text-lg">
            Exclusivas de la serie Stranger Things. No te quedes sin la tuya.
          </p>
        </div>
      </header>

      <section
        id="productos"
        className="mx-auto grid max-w-5xl gap-5 px-4 pb-12 sm:grid-cols-2 sm:gap-6 sm:px-6 sm:pb-14 lg:grid-cols-3"
      >
        {products.map((product) => (
          <article
            key={product.name}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)] backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:border-white/20 sm:p-6"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/0 opacity-0 transition group-hover:opacity-100" />
            <div className="relative z-10 flex items-center justify-between">
              <span className="rounded-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-700 px-3 py-1 text-xs font-semibold text-white/90">
                {product.tag}
              </span>
            </div>

            <div className="relative z-10 mt-4 aspect-[3/4] overflow-hidden rounded-xl border border-white/5 bg-neutral-900 sm:aspect-[4/5]">
              <div className="product-image-container relative h-full w-full cursor-zoom-in overflow-hidden">
                <Image
                  src={product.images[0]}
                  alt={`${product.name} frente`}
                  fill
                  className="product-image-zoom object-cover group-hover:scale-125"
                  style={{ touchAction: "pan-x pan-y pinch-zoom" }}
                  sizes="(min-width: 1024px) 320px, (min-width: 640px) 360px, 100vw"
                  priority
                />
              </div>
            </div>

            <div className="relative z-10 flex flex-1 flex-col">
              <h2 className="mt-4 text-lg font-semibold text-white sm:text-xl">
                {product.name}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                {product.description}
              </p>
              <div className="relative z-10 mt-auto pt-6">
                <a
                  href={product.link}
                  target="_blank"
                  rel="noreferrer"
                  className="relative z-10 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-transparent bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-700 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:-translate-y-0.5 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 sm:text-base"
                >
                  Comprar ahora
                  <span className="text-base">→</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section
        id="faq"
        className="mx-auto grid max-w-5xl gap-4 px-4 pb-12 sm:grid-cols-3 sm:px-6 sm:pb-16"
      >
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm font-semibold text-white">Pagos protegidos</p>
          <p className="mt-2 text-sm text-zinc-300">
          Pagos 100% seguros
          Tu información está protegida con cifrado de alto nivel. Compra con total tranquilidad.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm font-semibold text-white">Envíos rápidos</p>
          <p className="mt-2 text-sm text-zinc-300">
          Hacemos envíos a todo México de forma segura y confiable.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm font-semibold text-white">Diseño y Calidad</p>
          <p className="mt-2 text-sm text-zinc-300">
          Diseños de edición limitada creados con pasión y enfoque en la calidad.
          </p>
        </div>
      </section>

      <footer id="footer" className="border-t border-white/10 bg-neutral-950/80">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold text-white">EKKUSUX</p>
            <p className="text-sm text-zinc-400">
            Creado con pasión, hecho con calidad.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <a
              href="https://www.tiktok.com/@3kkusux"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-zinc-200 transition hover:border-white/20 hover:bg-white/5"
            >
              <FaTiktok className="h-4 w-4" aria-hidden="true" />
              TikTok
            </a>
            <a
              href="https://www.instagram.com/3kkusux/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-zinc-200 transition hover:border-white/20 hover:bg-white/5"
            >
              <FaInstagram className="h-4 w-4" aria-hidden="true" />
              Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61584171187689"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-zinc-200 transition hover:border-white/20 hover:bg-white/5"
            >
              <FaFacebookF className="h-4 w-4" aria-hidden="true" />
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
