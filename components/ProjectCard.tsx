"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cubicBezier } from "framer-motion";
import { MoveUpRight } from "lucide-react";
import { MotionDiv, MotionP } from "./MotionDiv";

interface ProjectCardProps {
  name: string;
  link: string;
  image: string;
}

const ProjectCard = ({ name, link, image }: ProjectCardProps) => {
  const [isHovered, setHovered] = useState(false);
  const [isImageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <Link
      href={link}
      target="_blank"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative inline-flex rounded-3xl overflow-hidden max-h-[20rem] md:max-h-[550px] cursor-pointer w-full"
    >
      <Image
        src={image}
        width={800}
        height={670}
        alt={name}
        quality={60}
        onLoad={handleImageLoad}
        style={{ width: "100%", height: "auto" }}
      />
      {isImageLoaded && (
        <div className="absolute left-5 bottom-5">
          <ExpandButton isExpanded={isHovered} text={name} />
        </div>
      )}
    </Link>
  );
};

const ExpandButton = ({
  isExpanded,
  text,
}: {
  isExpanded: boolean;
  text: string;
}) => {
  return (
    <MotionDiv
      className={`w-11 h-11 rounded-[28px] flex items-center bg-white overflow-hidden border-none justify-center transition duration-700 ${
        isExpanded && "shadow-expand"
      }`}
      variants={{
        expanded: {
          width: "auto",
          transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        collapsed: {
          width: "44px",
          transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
        },
      }}
      initial="collapsed"
      animate={isExpanded ? "expanded" : "collapsed"}
    >
      <MotionP
        className="mr-[40px] ml-[16px] text-black whitespace-nowrap"
        variants={{
          show: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.6,
              ease: cubicBezier(0.6, 0.05, -0.01, 0.9),
              delay: 0.3,
            },
          },
          hide: {
            opacity: 0,
            x: -12,
            transition: {
              duration: 0.6,
              ease: cubicBezier(0.6, 0.05, -0.01, 0.9),
            },
          },
        }}
        initial="hide"
        animate={isExpanded ? "show" : "hide"}
      >
        {text}
      </MotionP>
      <div className="w-11 h-11 rounded-[18px] absolute flex right-0 items-center justify-center">
        <MoveUpRight className="text-black w-5 h-5" />
      </div>
    </MotionDiv>
  );
};

export default ProjectCard;
