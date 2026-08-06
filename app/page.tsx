import Image from "next/image";

const cuties = [
  { src: "/cuties/cat.svg", name: "Mochi", species: "Cat", mood: "Sleepy" },
  { src: "/cuties/fox.svg", name: "Ember", species: "Fox", mood: "Curious" },
  { src: "/cuties/panda.svg", name: "Bao", species: "Panda", mood: "Snacking" },
  { src: "/cuties/bunny.svg", name: "Pip", species: "Bunny", mood: "Bouncy" },
  { src: "/cuties/bear.svg", name: "Biscuit", species: "Bear", mood: "Cozy" },
  { src: "/cuties/frog.svg", name: "Yuzu", species: "Frog", mood: "Chill" },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center bg-gradient-to-b from-rose-50 via-white to-sky-50 font-sans dark:from-zinc-950 dark:via-black dark:to-zinc-950">
      <main className="w-full max-w-5xl px-6 py-20 sm:px-10">
        <header className="flex flex-col items-center gap-4 text-center">
          <span className="rounded-full bg-rose-100 px-4 py-1.5 text-sm font-medium text-rose-700 dark:bg-rose-500/15 dark:text-rose-300">
            Demo gallery
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
            A very cute picture wall
          </h1>
          <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Six friends, drawn as SVG and served from{" "}
            <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
              public/cuties
            </code>{" "}
            through <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">next/image</code>.
          </p>
        </header>

        <ul className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cuties.map((cutie, i) => (
            <li
              key={cutie.name}
              className="group flex flex-col items-center gap-4 rounded-3xl border border-black/[.06] bg-white/70 p-8 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-xl dark:border-white/[.08] dark:bg-white/[.04]"
            >
              <Image
                className="h-32 w-32 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                src={cutie.src}
                alt={`Illustration of ${cutie.name} the ${cutie.species.toLowerCase()}`}
                width={128}
                height={128}
                priority={i < 3}
              />
              <div className="text-center">
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  {cutie.name}
                </h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {cutie.species} · {cutie.mood}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <footer className="mt-16 text-center text-sm text-zinc-500 dark:text-zinc-500">
          Edit{" "}
          <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono dark:bg-white/[.08]">
            app/page.tsx
          </code>{" "}
          to add your own.
        </footer>
      </main>
    </div>
  );
}
