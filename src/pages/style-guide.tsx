import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function StyleGuidePage() {
  const colorGroups = [
    {
      name: "Blue",
      colors: [
        ["blue-100", "#7EA4D7"],
        ["blue-200", "#2C85FC"],
        ["blue-300", "#2266C1"],
        ["blue-400", "#0D284C"],
      ],
    },
    {
      name: "Cyan",
      colors: [
        ["cyan-100", "#2DEBFC"],
        ["cyan-200", "#187D86"],
        ["cyan-300", "#0E474C"],
      ],
    },
    {
      name: "Neutral",
      colors: [
        ["white", "#FFFFFF"],
        ["gray-100", "#E9EAEC"],
        ["gray-200", "#D3D5D9"],
        ["gray-300", "#93979E"],
        ["gray-400", "#20242C"],
        ["gray-500", "#16181D"],
        ["gray-600", "#14161A"],
        ["gray-700", "#101216"],
        ["gray-800", "#0B0C0F"],
      ],
    },
  ] as const;

  const typeScale = [
    ["headline-hg", "48px", "text-headline-hg", "Bold / 120%"],
    ["headline-xl", "32px", "text-headline-xl", "Bold / 120%"],
    ["headline-lg", "28px", "text-headline-lg", "Bold / 120%"],
    ["headline-md", "24px", "text-headline-md", "Bold / 120%"],
    ["headline-sm", "20px", "text-headline-sm", "Bold / 120%"],
    ["headline-xs", "16px", "text-headline-xs", "Bold / 120%"],
    ["body-md", "16px", "text-body-md", "Regular / 150%"],
    ["body-sm", "14px", "text-body-sm", "Regular / 150%"],
    ["body-xs", "12px", "text-body-xs", "Regular / 150%"],
    ["body-tag", "12px", "text-body-tag", "Medium / Default"],
    ["action-md", "16px", "text-action-md", "Medium / Default"],
    ["action-sm", "14px", "text-action-sm", "Medium / Default"],
  ] as const;

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-gray-800 text-white`}
    >
      <main className={`${geistSans.className} mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-10 lg:px-10`}>
        <section className="overflow-hidden rounded-[32px] border border-gray-400 bg-[radial-gradient(circle_at_top_left,_rgba(45,235,252,0.14),_transparent_35%),linear-gradient(135deg,_rgba(44,133,252,0.16),_rgba(11,12,15,0.92)_65%)] p-8 lg:p-12">
          <div className="max-w-3xl">
            <p className="text-body-tag uppercase tracking-[0.24em] text-cyan-100">
              Tailwind Style Guide
            </p>
            <h1 className="mt-4 text-headline-hg text-white">
              Sistema visual base do blog
            </h1>
            <p className="mt-6 max-w-2xl text-body-md text-gray-200">
              Tokens de cor e tipografia configurados no Tailwind para uso consistente
              em interface, conteúdo e ações.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-cyan-200 bg-cyan-300/50 px-4 py-2 text-action-sm text-cyan-100">
              12 tokens de tipografia
            </span>
            <span className="rounded-full border border-blue-200 bg-blue-400/70 px-4 py-2 text-action-sm text-blue-100">
              12 tokens de cor
            </span>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[28px] border border-gray-400 bg-gray-700 p-6 lg:p-8">
            <div className="mb-6 flex items-end justify-between gap-4 border-b border-gray-400 pb-4">
              <div>
                <p className="text-body-tag uppercase tracking-[0.2em] text-cyan-100">
                  Colors
                </p>
                <h2 className="mt-2 text-headline-md text-white">Paleta principal</h2>
              </div>
              <p className="text-body-sm text-gray-300">Uso via classes `bg-*`, `text-*`, `border-*`</p>
            </div>

            <div className="space-y-8">
              {colorGroups.map((group) => (
                <div key={group.name}>
                  <h3 className="mb-4 text-headline-xs text-gray-100">{group.name}</h3>
                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {group.colors.map(([token, hex]) => (
                      <div key={token} className="overflow-hidden rounded-2xl border border-gray-400 bg-gray-600">
                        <div
                          className="h-24 w-full"
                          style={{ backgroundColor: hex }}
                        />
                        <div className="space-y-1 p-4">
                          <p className="text-action-sm text-white">{token}</p>
                          <p className="font-mono text-body-xs text-gray-300">{hex}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-[28px] border border-gray-400 bg-gray-700 p-6 lg:p-8">
            <p className="text-body-tag uppercase tracking-[0.2em] text-cyan-100">
              Preview
            </p>
            <h2 className="mt-2 text-headline-md text-white">Combinações rápidas</h2>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-blue-200 p-5 text-blue-400">
                <p className="text-body-tag uppercase tracking-[0.18em]">Highlight</p>
                <p className="mt-2 text-headline-sm">Blue 200 sobre Blue 400</p>
              </div>
              <div className="rounded-2xl border border-cyan-200 bg-cyan-300 p-5 text-cyan-100">
                <p className="text-body-tag uppercase tracking-[0.18em]">Accent</p>
                <p className="mt-2 text-headline-sm">Cyan 100 sobre Cyan 300</p>
              </div>
              <div className="rounded-2xl border border-gray-300 bg-gray-100 p-5 text-gray-800">
                <p className="text-body-tag uppercase tracking-[0.18em]">Surface</p>
                <p className="mt-2 text-headline-sm">Gray 100 sobre Gray 800</p>
              </div>
            </div>
          </aside>
        </section>

        <section className="rounded-[28px] border border-gray-400 bg-gray-700 p-6 lg:p-8">
          <div className="mb-6 flex items-end justify-between gap-4 border-b border-gray-400 pb-4">
            <div>
              <p className="text-body-tag uppercase tracking-[0.2em] text-cyan-100">
                Typography
              </p>
              <h2 className="mt-2 text-headline-md text-white">Escala tipográfica</h2>
            </div>
            <p className="text-body-sm text-gray-300">Uso via classes `text-*`</p>
          </div>

          <div className="divide-y divide-gray-400">
            {typeScale.map(([token, size, className, meta]) => (
              <div key={token} className="grid gap-4 py-5 md:grid-cols-[180px_100px_1fr] md:items-center">
                <div>
                  <p className="text-action-sm text-white">{token}</p>
                  <p className="text-body-xs text-gray-300">{meta}</p>
                </div>
                <p className="font-mono text-body-sm text-gray-300">{size}</p>
                <p className={`${className} text-gray-100`}>
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
