import ProjectCard from "@/components/ProjectCard";
import { font1, font2, projects } from "@/constants";
import { MotionDiv, MotionP, MotionSpan } from "@/components/MotionDiv";

export default function Home() {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-white z-[20] flex flex-col gap-y-8 items-center justify-center px-10 w-full -mt-72 sm:-mt-68 selection:bg-purple-700 selection:text-purple-300"
    >
      <h1
        className={`font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter text-center ${font2.className}`}
      >
        <MotionSpan
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Hi. I&apos;m{" "}
          <MotionSpan
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="bg-gradient-to-r bg-clip-text text-transparent from-purple-500 to-cyan-500 bg-[length:200%_auto]"
          >
            Aayush.
          </MotionSpan>
        </MotionSpan>{" "}
        <br />
        <MotionSpan
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.8,
            ease: "easeOut",
          }}
          className={`text-slate-400 ${font1.className}`}
        >
          A Web Developer.
        </MotionSpan>
      </h1>
      <MotionP
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="text-base sm:text-lg md:text-xl mt-4 text-slate-300"
      >
        I love building full stack software that&apos;s functional, user
        friendly, scalable and <br /> ensures a seamless experience for end
        users.
      </MotionP>
      <MotionDiv
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 1.4,
            },
          },
        }}
        className="flex gap-6 md:mt-l mt-20 mb-4 px-3 md:px-7"
      >
        <div className="max-w-content w-full grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 md:gap-y-20 mx-auto">
          {projects.map((project, index) => (
            <MotionSpan
              key={project.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <ProjectCard
                name={project.name}
                link={project.link}
                image={project.image}
              />
            </MotionSpan>
          ))}
        </div>
      </MotionDiv>
    </MotionDiv>
  );
}
