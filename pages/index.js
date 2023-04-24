import Image from "next/image";
import { Inter } from "next/font/google";
import { NextSeo } from "next-seo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NextSeo
        title="Arbeiten im energiequartier"
        description="Werde Teil unseres Teams und leiste mit uns den Beitrag zur Energiewende in Deutschland."
      />
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            novum&nbsp;
            <code className="font-mono font-bold">viadukt</code>
          </p>
        </div>
      </main>
    </>
  );
}