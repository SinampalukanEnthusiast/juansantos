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
    <main className="">
      <section
        className="flex min-h-screen flex-row items-center justify-center gap-40 p-24 mx-32"
        id="about"
      >
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
      </section>
      <section id="skills">
        <div className="h-screen flex flex-col w-screen">
          <h1
            className={`${ubuntu.className} text-6xl bg-black py-10 text-white text-center`}
          >
            Skills
          </h1>

          <div className="flex justify-center items-center h-full gap-10 mx-32">
            <div className="text-center h-fit">
              <div className="border-2 border-black rounded-md w-40 h-40 "></div>
              <span className="mt-2">Skills Box 1</span>
            </div>

            <div className="text-center h-fit">
              <div className="border-2 border-black rounded-md w-40 h-40 "></div>
              <span className="mt-2">Skills Box 2</span>
            </div>

            <div className="text-center h-fit">
              <div className="border-2 border-black rounded-md w-40 h-40 "></div>
              <span className="mt-2">Skills Box 3</span>
            </div>

            <div className="text-center h-fit">
              <div className="border-2 border-black rounded-md w-40 h-40 "></div>
              <span className="mt-2">Skills Box 4</span>
            </div>
            <div className="text-center h-fit">
              <div className="border-2 border-black rounded-md w-40 h-40 "></div>
              <span className="mt-2">Skills Box 5</span>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="h-screen flex flex-col w-screen">
          <h1
            className={`${ubuntu.className} text-6xl bg-black py-10 text-white text-center`}
          >
            Projects
          </h1>

          <div className="flex h-full justify-center mx-32 divide-x cursor-pointer">
            <div className="h-full w-1/3 flex items-center justify-center relative">
              <span
                className={`${roboto.className} text-4xl text-white z-10 uppercase`}
              >
                Project 1
              </span>
              <Image
                src={
                  "https://images.unsplash.com/photo-1681202200406-d07101763be1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=381&q=80"
                }
                fill
                alt="First Project Picture"
                className="opacity-70 hover:opacity-100"
              />
            </div>
            <div className="h-full  w-1/3 flex items-center justify-center relative">
              <span
                className={`${roboto.className} text-4xl text-white z-10 uppercase`}
              >
                Project 2
              </span>
              <Image
                src={`https://images.unsplash.com/photo-1681206691902-14878e9c28db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80`}
                fill
                alt="First Project Picture"
                className="opacity-70 hover:opacity-100 z-0"
              />
            </div>
            <div className="h-full bg-blue-300 w-1/3 flex items-center justify-center relative">
              <span
                className={`${roboto.className} text-4xl text-white z-10 uppercase`}
              >
                Project 3
              </span>
              <Image
                src={
                  "https://images.unsplash.com/photo-1581216340441-d47cad9210a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                }
                fill
                alt="First Project Picture"
                className="opacity-70 hover:opacity-100"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
