import logo from "@/public/logo.svg"
import Image from "next/image"
import Navbar from "./navbar"

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between p-4 md:justify-start md:gap-[3.75rem]">
      <Image src={logo} alt="logo" className="block" />
      <Navbar />
    </header>
  )
}

export default Header
