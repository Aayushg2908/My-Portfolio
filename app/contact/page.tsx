import { Input } from "@/components/Input";
import { MotionDiv } from "@/components/MotionDiv";
import { Textarea } from "@/components/Textarea";
import { font1, font2 } from "@/constants";

const ContactPage = () => {
  return (
    <div className="text-white z-[20] flex flex-col gap-y-8 items-center justify-center px-10 w-full -mt-72 sm:-mt-68 selection:bg-purple-700 selection:text-purple-300">
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
        className={`font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center ${font1.className}`}
      >
        Contact Me
      </MotionDiv>
      <MotionDiv
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
        className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black border border-neutral-700"
      >
        <h2
          className={`font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center ${font1.className}`}
        >
          Welcome to My Portfolio
        </h2>
        <form className={`my-8 ${font2.className}`}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <label>First Name</label>
              <Input id="firstname" placeholder="Jane" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <label>Last Name</label>
              <Input id="lastname" placeholder="Doe" type="text" />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <label>Email Address</label>
            <Input id="email" placeholder="youremail@gmail.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <label>Message</label>
            <Textarea placeholder="We want to hire you in our company!" />
          </LabelInputContainer>
          <button
            className="bg-gradient-to-br relative from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10"
            type="submit"
          >
            Contact
          </button>
        </form>
      </MotionDiv>
    </div>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`flex flex-col space-y-2 w-full ${className}`}>
      {children}
    </div>
  );
};

export default ContactPage;
