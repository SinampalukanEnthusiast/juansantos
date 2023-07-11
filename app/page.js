"use client";

import Image from "next/image";
import { Montserrat, Hind, Lato } from "next/font/google";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Box from "@/components/Box";
import ProjectCards from "@/components/ProjectCards";
import profile from "/profilepic.jpg";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "300", "100", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
});
const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

// TODO:
//  Make responsive navbar
//  Resume Viewer +
export default function Home() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isIntersecting2, setIsIntersecting2] = useState(false);
  const ref = useRef(null);
  const ref2 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        // console.log("YSAGDHA:", isIntersecting);
      },
      { rootMargin: "-100px" }
    );
    const observer2 = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting2(entry.isIntersecting);
        // console.log("YSAGDHA:", isIntersecting2);
      },
      { rootMargin: "-100px" }
    );
    // console.log("Observer 1:", isIntersecting);
    // console.log("Observer 2:", isIntersecting2);
    observer.observe(ref.current);
    observer2.observe(ref2.current);
    return () => {
      observer.unobserve(ref.current);
      observer2.unobserve(ref2.current);
    };
  }, [isIntersecting, isIntersecting2]);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setIsIntersecting(entry.isIntersecting);
  //       // console.log("YSAGDHA:", isIntersecting);
  //     },
  //     { rootMargin: "-300px" }
  //   );

  //   observer.observe(ref2.current);
  //   return () => {
  //     observer.unobserve(ref.current);
  //     observer2.unobserve(ref2.current);
  //   };
  //   };
  // }, [isIntersecting2]);

  const animateIn = isIntersecting ? "translate-x-0" : "-translate-x-[100rem]";

  return (
    <main className="overflow-hidden z-10 ">
      {/* About */}
      <section
        className="
        overflow-hidden flex flex-col-reverse 
        items-center justify-center min-h-screen
        lg:flex-row lg:gap-40 lg:p-24 lg:mx-32
        "
        id="about"
      >
        {/* Profile Text*/}
        <div className="lg:w-full w-2/3 ">
          <h1
            className={` ${montserrat.className} 
            text-4xl pt-8 animate-fade-in opacity font-bold text-center
            md:text-6xl
            lg:text-7xl lg:text-left
            `}
          >
            Juan Santos
          </h1>
          <div className="flex flex-col gap-10 mt-5 ">
            <h1
              className={`${hind.className} font-normal text-xl animate-fade-in2 text-center lg:text-left`}
            >
              Hi! I'm a software developer passionate about technology and
              learning, with a special interest in web development and systems
              design.
            </h1>
            <div
              className={`${hind.className} font-light flex gap-10 lg:justify-start justify-center text-gray-500 animate-fade-in3`}
            >
              <Link
                href={"https://github.com/SinampalukanEnthusiast"}
                rel="noopener noreferrer"
                target="_blank"
                className="text-2xl hover:text-black underline underline-offset-2"
              >
                Github
              </Link>
              <Link
                href={"https://www.linkedin.com/in/juan-francisco-santos/"}
                className="text-2xl hover:text-black underline underline-offset-2"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
        {/* Profile Picture */}
        <div className="md:w-auto lg:w-1/2 md:h-1/2">
          <Image
            src={profile}
            className="rounded-full relative"
            alt="profile"
          />
          <div className="hidden lg:block animate-prussian absolute bg-prussian-blue w-[350px] h-[350px] rounded-full filter  blur-3xl top-[25rem] delay-2000 -z-10 mix-blend-normal"></div>
          <div className="animate-jordy absolute bg-jordy-blue w-[450px] h-[450px] rounded-full filter  blur-3xl top-[10rem] delay-4000 right-10 -z-10  mix-blend-normal"></div>
          <div className="animate-sunset absolute bg-sunset w-[450px] h-[450px] rounded-full filter  blur-3xl top-[20rem] left-[1000px] -z-10  mix-blend-normal"></div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        ref={ref}
        className="overflow-hidden border-y border-black grain"
      >
        <div className="h-screen flex flex-col w-screen mt-24">
          <div className=" flex justify-center">
            <div
              className={` absolute font-bold text-xl py-10 text-black text-center drop-shadow-md uppercase flex flex-col`}
            >
              <span className="text-prussian-blue">Technical</span>
              <span className="text-6xl 96 border-b-4 border-black">
                Skills
              </span>
            </div>
          </div>

          <div
            className={`flex justify-center items-center h-full gap-10 md:mx-32`}
          >
            {/* Boxes */}
            <div
              className={`grid grid-cols-2 md:grid-cols-3 py-60 md:py-40 md:mx-auto lg:flex lg:mx-40 justify-center items-center h-full gap-10   `}
            >
              {/* JS Box */}
              <Box
                isIntersecting={isIntersecting}
                imgLink={
                  "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                }
                name={"JavaScript"}
              />

              {/* Python Box */}

              <Box
                isIntersecting={isIntersecting}
                imgLink={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png"
                }
                name={"Python"}
              />

              {/* React Box */}
              <Box
                isIntersecting={isIntersecting}
                imgLink={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png?20220125121207"
                }
                name={"React"}
              />

              {/* Django Box */}
              <Box
                isIntersecting={isIntersecting}
                imgLink={"https://cdn.worldvectorlogo.com/logos/django.svg"}
                name={"Django"}
              />

              {/* MongoDB Box */}
              <Box
                isIntersecting={isIntersecting}
                imgLink={
                  "https://symbols.getvecta.com/stencil_261/25_mongodb.cef7d00b8a.png"
                }
                name={"MongoDB"}
              />

              {/* Tailwind Box */}
              <Box
                isIntersecting={isIntersecting}
                imgLink={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
                }
                name={"Tailwind"}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" ref={ref2} className="pb-20">
        <div className="h-screen flex flex-col w-screen ">
          <div className="flex justify-center mb-16">
            <div
              className={`${lato.className} absolute font-bold text-xl py-10 text-black text-center drop-shadow-md uppercase flex flex-col mt-10`}
            >
              <span className="text-prussian-blue">Recent</span>
              <span className="text-6xl 96 border-b-4 border-black">
                Projects
              </span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row h-full justify-center cursor-pointer pt-36 gap-4 mx-20">
            {/* Project 1 */}

            <ProjectCards
              imgLink={"/to-do-app.png"}
              siteLink={"https://juansantos-todo-app.vercel.app/"}
              gitHubLink={"/"}
              isIntersecting={isIntersecting2}
              name={"Basic To-do"}
              tags={"JS, React, Next.js, Tailwind"}
              description={
                "Basic to-do application to showcase CRUD functionalities. Integrated with a PlanetScale database."
              }
            />

            {/* Project 2 */}

            <ProjectCards
              imgLink={`/shoelandia1.png`}
              isIntersecting={isIntersecting2}
              gitHubLink={
                "https://github.com/SinampalukanEnthusiast/Shoelandia"
              }
              name={"Shoelandia"}
              tags={"Python, Django, Bootstrap"}
              description={
                "An e-commerce website created for a university requirement. Includes filtering functionalities and item selections by variant."
              }
            />
            {/* Project 3 */}

            <ProjectCards
              imgLink={`/juansantos3.png`}
              isIntersecting={isIntersecting2}
              siteLink={"https://juansantos.dev"}
              name={"juansantos.dev"}
              tags={"JS, React, Next.js, Tailwind"}
              description={
                "My personal portfolio website, built with React, Next.js, and Tailwind. Deployed on Vercel."
              }
            />
          </div>
        </div>
      </section>
    </main>
  );
}
