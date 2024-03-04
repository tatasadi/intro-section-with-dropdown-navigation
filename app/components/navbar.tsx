"use client"
import NavItem from "./nav-item"
import iconCloseMenu from "@/public/icon-close-menu.svg"
import iconMenu from "@/public/icon-menu.svg"
import Image from "next/image"
import { useState } from "react"
import { cn } from "../lib/utils"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex w-full justify-end">
      {isMenuOpen && (
        <div className="bg-almost-black/75 absolute inset-0 z-30 md:hidden"></div>
      )}
      <div className="relative z-50 md:hidden">
        {isMenuOpen ? (
          <Image
            src={iconCloseMenu}
            alt="menu"
            className="self-end"
            onClick={() => setIsMenuOpen(false)}
          />
        ) : (
          <Image
            src={iconMenu}
            alt="menu"
            className="self-end"
            onClick={() => setIsMenuOpen(true)}
          />
        )}
      </div>
      <nav
        className={cn(
          "absolute inset-0 left-auto z-40 w-[15rem] bg-white p-6 pt-[4.88rem] md:relative md:left-0 md:w-full md:items-center md:bg-transparent md:py-[1.32rem] md:pr-10",
          isMenuOpen ? "block" : "hidden md:block",
        )}
      >
        <ul className="flex flex-col gap-4 md:flex-row md:items-center md:gap-10">
          <NavItem text="Features" href="#" childrenLeftPosition="md:-left-16">
            <ul className="flex flex-col gap-4 p-6 md:w-[9.5625rem]">
              <NavItem text="Todo List" icon="/icon-todo.svg" href="#" />
              <NavItem text="Calendar" icon="/icon-calendar.svg" href="#" />
              <NavItem text="Reminders" icon="/icon-reminders.svg" href="#" />
              <NavItem text="Planning" icon="/icon-planning.svg" href="#" />
            </ul>
          </NavItem>
          <NavItem text="Company" href="#">
            <ul className="flex flex-col gap-4 p-6 md:w-[7.25rem]">
              <NavItem text="History" href="#" />
              <NavItem text="Our Team" href="#" />
              <NavItem text="Blog" href="#" />
            </ul>
          </NavItem>
          <NavItem text="Careers" href="#" />
          <NavItem text="About" href="#" />
          <NavItem
            text="Login"
            href="#"
            className="ml-auto mt-4 text-center md:mt-0"
          />
          <NavItem
            text="Register"
            href="#"
            className="border-medium-gray rounded-[0.875rem] border-[1.5px] p-[0.81rem] text-center"
          />
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
