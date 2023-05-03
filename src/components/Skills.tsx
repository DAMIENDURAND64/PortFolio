import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Skills({}: Props) {
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
  ];

  return (
    <>
      <div className="flex w-full justify-center uppercase font-semibold text-2xl text-WhiteGray my-6">
        Skills
      </div>
      <div className="flex justify-between gap-8 pt-4 ">
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
              <Image
                src={image.src}
                alt={image.alt}
                height={130}
                width={130}
                className="rounded-full"
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
      <div className="flex justify-around px-20 gap-8 mt-6 ">
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
                className="rounded-full"
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
      <div className="flex justify-around px-20 gap-8 mt-6 ">
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
                className="rounded-full"
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
    </>
  );
}

export default Skills;
