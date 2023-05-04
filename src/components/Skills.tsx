import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function Skills() {
  const logos = [
    { src: "/NextJS.png", alt: "NextJS" },
    { src: "/React2JS.png", alt: "React" },
    { src: "/TypeScript.png", alt: "TypeScript" },
    { src: "/Tailwind.webp", alt: "Tailwind CSS" },
    { src: "/framerMotion.webp", alt: "Framer Motion" },
    { src: "/ExpressJS.png", alt: "ExpressJS" },
    { src: "/NodeJS.png", alt: "NodeJS" },
    { src: "/tRPC.png", alt: "tRPC" },
    { src: "/Vercel.png", alt: "Vercel" },
    { src: "/PrismaORM.png", alt: "Prisma ORM" },
    { src: "/github-icon-white.png", alt: "GitHub" },
    { src: "/logo-vs-code.png", alt: "VS Code" },
  ];

  return (
    <>
      <div className="flex w-full justify-center uppercase font-semibold text-2xl text-WhiteGray my-6">
        Skills
      </div>
      <div className="md:flex md:justify-between md:gap-8 md:pt-4 hidden ">
        {logos.slice(0, 5).map((image, i) => (
          <motion.div
            initial={{ opacity: 0 }}
            transition={{
              type: "spring",
              duration: 1.5,
              delay: i * 0.16,
            }}
            whileInView={{ opacity: 1 }}
            key={image.src}
            className="relative group"
          >
            <motion.div
              whileHover={{ scale: 1.3 }}
              transition={{ type: "spring", bounce: 0.7, duration: 1 }}
            >
              <Image src={image.src} alt={image.alt} height={130} width={130} />
              <div className="absolute inset-0 right-24 bottom-16 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-black text-white text-sm py-1 px-2 rounded-md">
                  {image.alt}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
      <div className="md:flex md:justify-around md:px-20 md:gap-8 md:mt-6 hidden ">
        {logos.slice(5, 9).map((image, i) => (
          <motion.div
            initial={{ opacity: 0 }}
            transition={{
              type: "spring",
              duration: 1.5,
              delay: i * 0.16,
            }}
            whileInView={{ opacity: 1 }}
            key={image.src}
            className="relative group"
          >
            <motion.div
              whileHover={{ scale: 1.3 }}
              transition={{ type: "spring", bounce: 0.7, duration: 1 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                height={130}
                width={130}
                className="rounded-full min-h-[38px] min-w-[38px]"
              />
              <div className="absolute inset-0 right-24 bottom-16 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-black text-white text-sm py-1 px-2 rounded-md">
                  {image.alt}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
      <div className="md:flex md:justify-center md:px-20 md:gap-9 xl:gap-40 lg:gap-[92px] md:mt-6 hidden">
        {logos.slice(9, 12).map((image, i) => (
          <motion.div
            initial={{ opacity: 0 }}
            transition={{
              type: "spring",
              duration: 1.5,
              delay: i * 0.16,
            }}
            whileInView={{ opacity: 1 }}
            key={image.src}
            className="relative group"
          >
            <motion.div
              whileHover={{ scale: 1.3 }}
              transition={{ type: "spring", bounce: 0.7, duration: 1 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                height={130}
                width={130}
                className="rounded-full md:h-[120px] md:w-[120px]"
              />
              <div className="absolute inset-0 right-24 bottom-16 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-black text-white text-sm py-1 px-2 rounded-md">
                  {image.alt}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
      <div className=" flex flex-wrap md:hidden justify-center gap-8">
        {logos.map((image, i) => (
          <motion.div
            initial={{ opacity: 0 }}
            transition={{
              type: "spring",
              duration: 1.5,
              delay: i * 0.16,
            }}
            whileInView={{ opacity: 1 }}
            key={image.src}
          >
            <Image
              src={image.src}
              alt={image.alt}
              height={90}
              width={90}
              className="rounded-full xxs:w-[50px] xxs:h-[50px] mobile:w-[70px] mobile:h-[70px]"
            />
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default Skills;
