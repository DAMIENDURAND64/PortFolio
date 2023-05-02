import Head from "next/head";
import Wrapper from "../components/Wrapper";
export default function Home() {
  return (
    <>
      <Head>
        <title>Damien Durand</title>
      </Head>
      <Wrapper className="max-w-3xl text-center flex flex-col justify-center">
        <div className="flex sm:justify-between md:justify-around items-center gap-4 sm:gap-0  ">
          <div className="text-xl sm:text-3xl uppercase text-WhiteGray font-bold w-52">
            Hello I&apos;m
          </div>
          <div className="flex flex-col justify-end items-start  xxs:h-[280px] sm:h-[430px] h-[345px] w-full">
            <hr className="w-full rounded-sm bg-Orange h-3 border-none" />
            <div className="sm:text-[7.2rem] xs:text-7xl text-5xl text-White font-medium">
              Damien
            </div>

            <div className="flex w-full justify-end uppercase font-bold xs:text-2xl text-xl text-Orange text-end mt-8">
              A Fullstack <br />
              developer
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
