"use client"
import Link from "next/link"
import React, { useState } from "react"
import { cn } from "../lib/utils"
import Image from "next/image"

const NavItem = ({
  href,
  text,
  className = "",
  children,
  icon = "",
  childrenLeftPosition = "md:left-0",
}: {
  href: string
  text: string
  className?: string
  children?: React.ReactNode
  icon?: string
  iconWidth?: number
  iconHeight?: number
  childrenLeftPosition?: string
}) => {
  const [isChildrenOpen, setIsChildrenOpen] = useState(false)

  const toggleChildren = () => {
    setIsChildrenOpen(!isChildrenOpen)
  }

  return (
    <li className={cn("text-medium-gray leading-[1.625rem]", className)}>
      {children ? (
        <div className="md:relative">
          <div
            className="flex cursor-pointer items-center gap-4"
            onClick={toggleChildren}
          >
            <span className="hover:text-almost-black cursor-pointer md:text-sm">
              {text}
            </span>
            <Image
              src={
                isChildrenOpen ? "/icon-arrow-up.svg" : "/icon-arrow-down.svg"
              }
              alt={isChildrenOpen ? "arrow up" : "arrow down"}
              width={12}
              height={12}
            />
          </div>
          {isChildrenOpen && (
            <div
              className={cn(
                "md:absolute md:top-6 md:rounded-[0.625rem] md:bg-white md:shadow-[0_10px_40px_0_rgba(0,0,0,0.15)]",
                childrenLeftPosition,
              )}
            >
              {children}
            </div>
          )}
        </div>
      ) : (
        <Link href={href} className={cn(icon ? "flex items-center gap-4" : "")}>
          {icon && (
            <Image src={icon} alt={text} width={20} height={20} className="" />
          )}
          <span className="hover:text-almost-black cursor-pointer md:text-sm">
            {text}
          </span>
        </Link>
      )}
    </li>
  )
}

export default NavItem
