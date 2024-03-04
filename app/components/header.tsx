import logo from "@/public/logo.svg"
import Image from "next/image"
import Navbar from "./navbar"

const Header = () => {
  return (
    <header className="flex w-full max-w-[90rem] items-center justify-between p-4 md:justify-start md:gap-[2rem] md:py-0 md:pl-[2.88rem]">
      <Image src={logo} alt="logo" className="block" />
      <Navbar />
    </header>
  )
}

export default Header
