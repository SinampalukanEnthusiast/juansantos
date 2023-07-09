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
        <div className="rounded-md w-32 h-24 relative mb-2 flex flex-col">
          <Image
            src={imgLink}
            width={"75"}
            height={"75"}
            style={{
              objectFit: "cover",
              borderRadius: "10px",
              alignSelf: "center",
            }}
            // width={"50"}
            // height={"50"}
            alt={`${name} logo`}
            className="pt-4 m-0"
          />
        </div>
        <span className={`${hind.className} text-lg`}>{name}</span>
      </div>
    </>
  );
};

export default Box;
