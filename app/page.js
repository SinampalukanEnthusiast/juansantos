import Image from "next/image";
import { Ubuntu, Roboto, Heebo } from "next/font/google";
import Link from "next/link";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-roboto",
});

const heebo = Heebo({
  subsets: ["latin"],
  weight: ["200"],
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-center gap-40 p-24">
      <div className="">
        <h1
          className={` ${ubuntu.className} lg:text-6xl sm:text-4xl text-xl pt-8`}
        >
          Juan Santos
        </h1>
        <div className="flex flex-col gap-10 mt-5">
          <h1 className={`${roboto.className} `}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            adipisci non velit. Voluptatum eos, consequuntur nisi excepturi
            corrupti minus sit magnam eveniet nobis in nihil incidunt id
            obcaecati quas eligendi possimus voluptate nulla sed? Odio unde
            accusamus dolorum id tempora, distinctio dignissimos dolorem
            quibusdam. Nisi, ea optio. Sapiente, officiis veritatis.
          </h1>
          <div className={`${heebo.className} flex gap-10 justify-start`}>
            <Link
              href={"https://github.com/SinampalukanEnthusiast"}
              rel="noopener noreferrer"
              target="_blank"
              className="btn bg-slate-600"
            >
              Github
            </Link>
            <Link
              href={"https://www.linkedin.com/in/juan-francisco-santos/"}
              className="btn bg-blue-700"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
      <Image
        src={`https://lh3.googleusercontent.com/a/AGNmyxaNgocE0AHgxGxjIqOtMxCxbRLKf_dX7qQJaAg1-Q=s288`}
        width={`250`}
        height={`250`}
        className="rounded-full"
      />
    </main>
  );
}
