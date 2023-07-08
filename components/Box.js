import Image from "next/image";
import React from "react";
import { Hind } from "next/font/google";
const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const Box = ({ isIntersecting, name, imgLink }) => {
  return (
    <>
      <div
        className={`bg-gray-50 drop-shadow-sm p-5 rounded-lg text-center h-fit transition-all list-delay ${
          isIntersecting ? "visible" : "invisible"
        } `}
      >
        <div className="rounded-md w-[7.5rem] h-16 relative mb-5 ">
          <Image
            src={imgLink}
            fill
            style={{ objectFit: "contain" }}
            alt={`${name} logo`}
            className="pt-4"
          />
        </div>
        <span className={`${hind.className} text-lg`}>{name}</span>
      </div>
    </>
  );
};

export default Box;
