import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Wrapper from "@/components/Wrapper";
import Skills from "@/components/Skills";
import { useScroll, motion, useTransform } from "framer-motion";

export default function About() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <>
      <Head>
        <title>Damien Durand | About</title>
      </Head>
      <Wrapper>
        <div className="flex flex-col gap-2 lg:flex-row items-center justify-center mb-12 min-h-screen lg:mb-0 pt-28 lg:pt-0 ">
          <Image
            src={"/portfolio.jpg"}
            width={300}
            height={240}
            alt={"this is me"}
            className="rounded-md md:w-[400px] md:h-[320px] object-cover"
            priority
          />
          <div className="lg:w-1/2 lg:ml-8 max-w-md md:max-w-xl ">
            <div className="font-semibold text-3xl mt-8 text-White uppercase text-center">
              FullStack developer, based in Biarritz, France
            </div>
            <p className="text-WhiteGray text-lg mt-8 leading-7">
              Though I once put my passion for web development on hold to travel
              and work abroad for a while, I&apos;m now eager to leverage my
              creativity, motivation for tackling challenges, and interest in
              staying current with new technologies to make a positive impact on
              users. As a full-stack developer, I am excited to collaborate on
              projects that combine my love for coding and my desire to create
              innovative, user-focused web solutions.
            </p>
            <div className="flex gap-8 xxs:mt-4 md:mt-10 mt-20">
              <Link
                href="/contact"
                className="text-Orange font-semibold text-sm uppercase hover:underline"
              >
                Contact Me
              </Link>
              <a
                href="/pdf/CV_DamienDurand_MDS.pdf"
                download
                className="text-Orange font-semibold text-sm uppercase hover:underline"
              >
                Resume
              </a>
            </div>
          </div>
          <div className="absolute bottom-12 xxs:hidden md:block">
            <motion.div style={{ opacity }}>
              <Image
                src="/arrow-down.jpeg"
                alt="continuer vers le bas"
                width={50}
                height={50}
                className="xl:w-16 xl:h-16"
              />
            </motion.div>
          </div>
        </div>
        <Skills />
      </Wrapper>
    </>
  );
}
