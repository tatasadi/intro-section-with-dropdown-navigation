import Link from "next/link"
import Image from "next/image"
import clientAudioPhile from "@/public/client-audiophile.svg"
import clientDatabiz from "@/public/client-databiz.svg"
import clientMaker from "@/public/client-maker.svg"
import clientMeet from "@/public/client-meet.svg"

export default function Home() {
  return (
    <main className="flex h-full w-full max-w-[90rem] flex-col md:flex-row md:gap-[7rem] md:px-4 md:pt-[4.16rem] lg:px-[10.31rem]">
      <div className="h-[17.5rem] w-full bg-[url('/image-hero-mobile.png')] bg-cover bg-center bg-no-repeat md:order-2 md:h-[40rem] md:max-w-[30rem] md:bg-[url('/image-hero-desktop.png')]"></div>
      <div>
        <div className="my-12 flex flex-col items-center gap-1 px-4 text-center md:mt-[5rem] md:items-start md:gap-12 md:px-0 md:text-left">
          <h1 className="max-w-[33.75rem] text-[2.25rem] font-bold leading-[2.625rem] -tracking-[-0.03125rem] md:text-[5rem] md:leading-[5rem] md:-tracking-[0.06944rem]">
            Make remote work
          </h1>
          <p className="text-medium-gray mb-2 leading-[1.625rem] md:text-lg md:leading-7 lg:max-w-[27.8125rem]">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <Link
            href="#"
            aria-label="learn more"
            className="bg-almost-black text-almost-white hover:bg-almost-white hover:text-almost-black hover:border-almost-black rounded-[0.9375rem] border border-transparent px-5 py-3 font-bold leading-[1.625rem] -tracking-[0.01388rem] md:px-8 md:text-lg"
          >
            Learn more
          </Link>
        </div>
        <div className="mx-4 grid grid-cols-4 place-items-center gap-[1.8rem] md:mt-[7.5rem]">
          <Image src={clientDatabiz} alt="client-databiz" />
          <Image src={clientAudioPhile} alt="client-audiophile" />
          <Image src={clientMeet} alt="client-meet" />
          <Image src={clientMaker} alt="client-maker" />
        </div>
      </div>
    </main>
  )
}
