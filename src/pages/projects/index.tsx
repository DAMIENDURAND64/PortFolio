import Head from "next/head";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import { ProjectProps } from "@/utils/type";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Portfolio() {
  const projects: ProjectProps[] = [
    {
      id: 1,
      img: "/Rotisserie_Harana.png",
      name: "Rotisserie Harana",
      deployment: "https://rotisserie-harana.vercel.app/",
      linkGitHub: "https://github.com/Damsbot64/Project-Rotisserie",
      tools: ["NextJS", "Tailwind CSS", "Vercel"],
    },
    {
      id: 2,
      img: "/Brewery.png",
      name: "BrewDog Beer shop",
      deployment: "https://brewdog-project-2.vercel.app/",
      linkGitHub: "https://github.com/Damsbot64/Brewdog-Project-2",
      tools: ["React", "Tailwind CSS"],
    },
    {
      id: 3,
      img: "/Cave.png",
      name: "Ma petite Cave  (En cours)",
      deployment: "",
      linkGitHub: "",
      tools: [
        "NextJS",
        "TypeScript",
        "Tailwind",
        "tRPC",
        "Prisma",
        "PostgreSQL",
      ],
    },
    {
      id: 4,
      img: "/enedis.png",
      name: "Enedis Share",
      deployment: "https://enedis-share.vercel.app/",
      linkGitHub: "https://github.com/Damsbot64/Project-3_EnedisShare_front",
      tools: [
        "NextJS",
        "TypeScript",
        "Tailwind",
        "Prisma",
        "PostgreSQL",
        "Express",
        "NodeJS",
      ],
    },
  ];
  return (
    <>
      <Head>
        <title>Damien Durand | Portfolio</title>
      </Head>
      <Wrapper>
        <div className="flex flex-col pt-40 items-center text-center">
          <div className="uppercase font-semibold text-sm text-WhiteGray">
            - Portfolio
          </div>
          <div className="font-semibold text-3xl mt-8 text-White uppercase">
            Some of my Projects
          </div>
          <p className="text-WhiteGray text-sm mt-8 leading-7 max-w-3xl">
            Here is some cool projects that I made during my learning process. I
            am still learning and I will keep updating this page with more
            projects. If you want to know more about my projects, please feel
            free to contact me. You are welcome to check out my GitHub profile
            as well.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 md:px-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="p-4 rounded-lg shadow-ShadowBlur"
              >
                <div className="w-full  relative group">
                  <div className="h-48 relative">
                    <Image
                      src={project.img}
                      alt={project.name}
                      fill
                      className="object-fill rounded-md"
                    />
                  </div>
                  <div className="absolute w-full h-full rounded-md bg-Orange top-0 left-0 z-10 flex items-center justify-center gap-4 scale-0 group-hover:scale-100 transition-all duration-300">
                    <Link href={project.linkGitHub}>
                      <motion.div
                        whileHover={{ scale: 1.6 }}
                        transition={{
                          type: "spring",
                          duration: 1,
                          bounce: 0.7,
                        }}
                      >
                        <AiFillGithub className="text-3xl hover:scale-110 transition-all duration-300" />
                      </motion.div>
                    </Link>
                    <Link href={project.deployment}>
                      <motion.div
                        whileHover={{ scale: 1.6 }}
                        transition={{
                          type: "spring",
                          duration: 1,
                          bounce: 0.7,
                        }}
                      >
                        <AiFillEye className="text-3xl hover:scale-110 transition-all duration-300" />
                      </motion.div>
                    </Link>
                  </div>
                </div>
                <div className="text-White mt-2 text-start">{project.name}</div>
                <div className="flex mt-2 flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-Blur rounded-full py-2 px-3 text-white text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </>
  );
}
