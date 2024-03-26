import ProjectCard from "@/components/ProjectCard";
import { font1, font2, projects } from "@/constants";
import { MotionDiv, MotionP, MotionSpan } from "@/components/MotionDiv";

export default function Home() {
  return (
    <div className="text-white z-[20] flex flex-col gap-y-8 items-center justify-center px-10 w-full -mt-72 sm:-mt-68 selection:bg-purple-700 selection:text-purple-300">
      <h1
        className={`font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter text-center ${font2.className}`}
      >
        <MotionSpan
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
        >
          Hi. I&apos;m{" "}
          <span className="bg-gradient-to-r bg-clip-text text-transparent from-purple-500 to-cyan-500">
            Aayush.
          </span>
        </MotionSpan>{" "}
        <br />
        <MotionSpan
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delay: 1.7,
                duration: 0.5,
              },
            },
          }}
          className={`text-slate-400 ${font1.className}`}
        >
          A Web Developer.
        </MotionSpan>
      </h1>
      <MotionP
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delay: 2.1,
              duration: 0.5,
            },
          },
        }}
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
              delay: 2.5,
              duration: 0.5,
            },
          },
        }}
        className="flex gap-6 md:mt-l mt-20 mb-4 px-3 md:px-7"
      >
        <div className="max-w-content flex flex-col md:flex-row flex-wrap gap-x-10 gap-y-10 md:gap-y-20 mx-auto">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              link={project.link}
              image={project.image}
            />
          ))}
        </div>
      </MotionDiv>
    </div>
  );
}
