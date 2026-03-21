import Header from "@/components/header";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-gray-800 text-white`}
    >
      <Header />
      <main className={`${geistSans.className} mx-auto flex min-h-screen w-full max-w-5xl items-center px-6 py-10 lg:px-10`}>
        <section className="w-full overflow-hidden rounded-[32px] border border-gray-400 bg-[radial-gradient(circle_at_top_left,_rgba(45,235,252,0.14),_transparent_35%),linear-gradient(135deg,_rgba(44,133,252,0.16),_rgba(11,12,15,0.92)_65%)] p-8 lg:p-12">
          <p className="text-body-tag uppercase tracking-[0.24em] text-cyan-100">
            Blog
          </p>
          <h1 className="mt-4 max-w-3xl text-headline-hg text-white">
            Base visual pronta para evoluir a interface do site.
          </h1>
          <p className="mt-6 max-w-2xl text-body-md text-gray-200">
            O sistema de cor e tipografia foi isolado em uma rota dedicada para
            consulta e validação visual durante o desenvolvimento.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/style-guide"
              className="rounded-full bg-blue-200 px-6 py-3 text-action-md text-blue-400 transition-colors hover:bg-blue-100"
            >
              Abrir style guide
            </Link>
            <Link
              href="/blog"
              className="rounded-full border border-gray-300 px-6 py-3 text-action-md text-gray-100 transition-colors hover:bg-gray-700"
            >
              Ir para o blog
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
