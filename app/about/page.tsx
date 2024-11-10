import { MotionDiv, MotionP } from "@/components/MotionDiv";
import ResumeButton from "@/components/ResumeButton";
import { education, font1, font2, socials, work_experience } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="text-white z-[20] flex flex-col gap-y-8 items-center justify-center px-10 w-full -mt-72 sm:-mt-68 selection:bg-purple-700 selection:text-purple-300">
      <h1
        className={`font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter text-center ${font2.className}`}
      >
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          I&apos;m{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            Aayush
          </span>
        </MotionDiv>
      </h1>
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex gap-x-4 items-center"
      >
        {socials.map((social, index) => (
          <MotionDiv
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href={social.link} target="_blank">
              <Image
                src={social.icon}
                alt={social.name}
                width={30}
                height={30}
                className="w-10 h-10"
              />
            </Link>
          </MotionDiv>
        ))}
      </MotionDiv>
      <MotionP
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
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
          WORK EXPERIENCE
        </MotionDiv>
        {work_experience.map((exp, index) => (
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 2.2 + index * 0.2 }}
            whileHover={{ scale: 1.02, x: 10 }}
            key={index}
            className="flex flex-col w-full mb-8 p-4 rounded-lg hover:bg-purple-900/20 transition-colors"
          >
            <div
              className={`text-2xl flex flex-col sm:flex-row w-full items-center justify-between ${font1.className}`}
            >
              <span>{exp.company}</span>
              <span>{exp.duration}</span>
            </div>
            <div
              className={`text-base flex flex-col sm:flex-row w-full items-center justify-between ${font2.className}`}
            >
              <span>{exp.title}</span>
            </div>
          </MotionDiv>
        ))}
        <MotionDiv
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delay: 3.0,
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
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 3.0 + index * 0.2 }}
            whileHover={{ scale: 1.02, x: -10 }}
            key={index}
            className="flex flex-col w-full mb-8 px-4 rounded-lg hover:bg-cyan-900/20 transition-colors"
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
