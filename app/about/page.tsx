import { MotionDiv, MotionP } from "@/components/MotionDiv";
import ResumeButton from "@/components/ResumeButton";
import { education, font1, font2, socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="text-white z-[20] flex flex-col gap-y-8 items-center justify-center px-10 w-full -mt-72 sm:-mt-68 selection:bg-purple-700 selection:text-purple-300">
      <h1
        className={`font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter text-center ${font2.className}`}
      >
        <MotionDiv
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delay: 1,
                duration: 0.5,
              },
            },
          }}
        >
          I&apos;m{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 ">
            Aayush
          </span>
        </MotionDiv>
      </h1>
      <MotionDiv
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delay: 1.3,
              duration: 0.5,
            },
          },
        }}
        className="flex gap-x-4 items-center"
      >
        {socials.map((social, index) => (
          <Link href={social.link} key={index} target="_blank">
            <Image
              src={social.icon}
              alt={social.name}
              width={30}
              height={30}
              className="w-10 h-10"
            />
          </Link>
        ))}
      </MotionDiv>
      <MotionP
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delay: 1.6,
              duration: 0.5,
            },
          },
        }}
        className="text-base sm:text-lg md:text-xl mt-4 text-slate-300 max-w-6xl text-center sm:px-5"
      >
        I am a BTech Undergrad at NSUT, Delhi. I am an aspiring software
        engineer with experience in Full Stack Development, AI/ML and DevOps. I
        am passionate about building scalable and efficient software solutions.
        I also have a keen interest in DSA and problem solving.
      </MotionP>
      <ResumeButton />
      <div className="flex w-full flex-col items-center max-w-5xl px-4 mt-4">
        <MotionDiv
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delay: 2.2,
                duration: 0.5,
              },
            },
          }}
          className={`text-5xl sm:text-6xl w-fit mb-8 mx-auto ${font1.className}`}
        >
          EDUCATION
        </MotionDiv>
        {education.map((edu, index) => (
          <MotionDiv
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  delay: 2.5 + index * 0.3,
                  duration: 0.5,
                },
              },
            }}
            key={index}
            className="flex flex-col w-full mb-8"
          >
            <div
              className={`text-xl flex flex-col sm:flex-row w-full items-center justify-between ${font1.className}`}
            >
              <span>{edu.name}</span>
              <span>{edu.duration}</span>
            </div>
            <div
              className={`text-base flex flex-col sm:flex-row w-full items-center justify-between ${font2.className}`}
            >
              <span>
                {edu.degree} ({edu.marks})
              </span>
              <span>{edu.place}</span>
            </div>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
