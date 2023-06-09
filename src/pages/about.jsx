import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/developer-pic-2.png";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
import Toolstack from "@/components/Toolstack";
import Github from "@/components/Github";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Mehmet | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text={"Passion Fuels Purpose!"}
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-6 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biografy
              </h2>
              <p className="font-medium">
                Hello, I'm Mehmet. I am currently a computer programming student
                pursuing an associate degree. I am passionate about working with
                computers and particularly enjoy creating mobile and web
                projects. Coming up with innovative solutions in this field
                excites me.
              </p>
              <p className="my-4 font-medium">
                Throughout my studies, I have actively participated in various
                programming endeavors. I strive to constantly improve myself by
                keeping up with the latest technologies and learning new things.
                I have worked intensively to gain expertise in mobile and web
                development, and I have successfully completed several projects.
              </p>
              <p className="my-4 font-medium">
                Listening to music holds a significant place among my hobbies.
                It brings me both tranquility and inspiration to explore
                different genres of music. Additionally, I place great
                importance on self-improvement in the computer field. I aim to
                continuously enhance my skills to meet and surpass user
                expectations.
              </p>
              <p className=" font-medium">
                As graduation approaches, I am eagerly looking forward to
                embarking on a professional journey, using my knowledge and
                skills in mobile and web development to contribute to the
                ever-evolving technology industry. Starting a career and making
                a positive impact in the constantly changing world of technology
                is truly exciting for me.
              </p>
            </div>
            {/* <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light " />
              <Image
                src={profilePic}
                alt="Arawn"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-with: 1200px) 50vw, 50vw"
              />
            </div> */}
            <div className="col-span-2 flex flex-col items-end justify-between md:col-span-8 md:flex-row md:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={20} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
       
          <h1 className="dark:text-white text-purple-400 font-bold text-7xl mt-64 w-full text-center lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8">
            Professional{" "}
            <strong className="dark:text-primaryDark text-dark">
              Skillset
            </strong>
          </h1>
          <Skills />
          <h1 className="dark:text-white text-purple-400 font-bold text-7xl mt-64 w-full text-center lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8">
            Tools{" "}
            <strong className="dark:text-primaryDark text-dark">I use</strong>
          </h1>
          <Toolstack />
          {/* <Github/> */}
          {/* <Experience /> */}
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
