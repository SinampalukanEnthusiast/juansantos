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
        className={`bg-gray-50 drop-shadow-sm p-2 rounded-lg text-center h-fit transition-all list-delay ${
          isIntersecting ? "visible" : "invisible"
        } `}
      >
        <div className="rounded-md lg:w-32 lg:h-24 w-28 h-20 p-2 relative mb-2 flex flex-col">
          <Image
            src={imgLink}
            fill
            style={{
              objectFit: "contain",
              alignSelf: "center",
            }}
            // width={"50"}
            // height={"50"}
            alt={`${name} logo`}
            className="pt-4 m-0"
          />
        </div>
        <span className={`text-lg hidden md:block`}>{name || ""}</span>
      </div>
    </>
  );
};

export default Box;
