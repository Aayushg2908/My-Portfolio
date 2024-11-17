"use client";

import { Input } from "@/components/Input";
import { MotionDiv } from "@/components/MotionDiv";
import { Textarea } from "@/components/Textarea";
import { font1, font2 } from "@/constants";
import { sendEmail } from "@/lib/email";
import { useState } from "react";
import { sendContactEmail } from "./action";

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [object, setObject] = useState({
    firstname: "",
    lastname: "",
    topic: "",
    email: "",
    message: "",
  });

  const handleContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      await sendContactEmail(object);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      object.firstname = "";
      object.lastname = "";
      object.topic = "";
      object.email = "";
      object.message = "";
    }
  };

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
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delay: 1.7,
              duration: 0.7,
              ease: "easeOut",
            },
          },
        }}
        className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-gradient-to-br from-zinc-900 to-black border border-purple-500/20 backdrop-blur-sm"
      >
        <h2
          className={`font-bold text-xl text-neutral-200 text-center mb-2 bg-gradient-to-r from-purple-500 to-purple-200 bg-clip-text text-transparent ${font1.className}`}
        >
          Welcome to My Portfolio
        </h2>
        <form className={`my-8 ${font2.className}`} onSubmit={handleContact}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <label>First Name</label>
              <Input
                id="firstname"
                placeholder="Jane"
                type="text"
                value={object.firstname}
                onChange={(e) =>
                  setObject({ ...object, firstname: e.target.value })
                }
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <label>Last Name</label>
              <Input
                id="lastname"
                placeholder="Doe"
                type="text"
                value={object.lastname}
                onChange={(e) =>
                  setObject({ ...object, lastname: e.target.value })
                }
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <label>Heading</label>
            <Input
              id="topic"
              placeholder="Job Offer"
              type="text"
              value={object.topic}
              onChange={(e) => setObject({ ...object, topic: e.target.value })}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <label>Email Address</label>
            <Input
              id="email"
              placeholder="youremail@gmail.com"
              type="email"
              value={object.email}
              onChange={(e) => setObject({ ...object, email: e.target.value })}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <label>Message</label>
            <Textarea
              placeholder="We want to hire you in our company!"
              value={object.message}
              onChange={(e) =>
                setObject({ ...object, message: e.target.value })
              }
            />
          </LabelInputContainer>
          <button
            disabled={loading}
            className="bg-gradient-to-r relative from-purple-500 to-purple-700 block w-full text-white rounded-md h-10 
            hover:from-purple-600 hover:to-purple-800 transition-all duration-300 
            hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transform hover:scale-[1.01]"
            type="submit"
          >
            {loading ? "Sending..." : "Contact Me"}
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
      <MotionDiv
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </MotionDiv>
    </div>
  );
};

export default ContactPage;
