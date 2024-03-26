"use client";

import { ArrowUpRight } from "lucide-react";
import { MotionDiv } from "./MotionDiv";

const ResumeButton = () => {
  const handleResumeDownload = async () => {
    try {
      const res = await fetch(
        "https://utfs.io/f/97cd7bd7-09fd-41a3-a91e-472e187eca8b-nq87l5.pdf"
      );
      if (!res.ok) {
        throw new Error("Failed to fetch resume");
      }

      const blob = await res.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.style.display = "none";

      a.download = "Resume";
      a.href = blobUrl;

      document.body.appendChild(a);

      a.click();

      document.body.removeChild(a);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MotionDiv
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delay: 1.9,
            duration: 0.5,
          },
        },
      }}
      onClick={handleResumeDownload}
      className="cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-500 to-cyan-500 group-hover:from-purple-500 group-hover:to-cyan-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
    >
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0 flex gap-x-1 items-center">
        My Resume <ArrowUpRight />
      </span>
    </MotionDiv>
  );
};

export default ResumeButton;
