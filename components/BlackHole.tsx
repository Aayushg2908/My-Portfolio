import { MotionDiv } from "./MotionDiv";

const BlackHole = () => {
  return (
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
      className="relative flex flex-col h-[500px] w-full"
    >
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute h-full top-[-190px] w-full left-0 z-[1] object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
    </MotionDiv>
  );
};

export default BlackHole;
