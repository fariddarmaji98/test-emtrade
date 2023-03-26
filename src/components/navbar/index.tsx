import React, { useEffect, useRef, useState } from "react"
import { SubTitle } from "../text"
import { HiArrowLeft, HiOutlineShare } from "react-icons/hi"
import { ALERT } from "@/utils"

interface NavbarProps {
  name: string
}

const Navbar = ({
  name
}: NavbarProps) => {
  const navbarRef = useRef<HTMLDivElement>(null)
  const [navSticky, setNavSticky] = useState(false)
  const [currPosition, setCurrPosition] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY
       
      setNavSticky(currPosition > scrollPosition)
      setCurrPosition(scrollPosition)
    })
  })

  return (<nav 
    className={`
      ${navSticky && 'sticky top-0'}
      w-full backdrop-blur-md bg-white/90 px-1 xs:px-5 pt-[38px] xs:pt-4 pb-3.5 flex items-center justify-between xs:gap-x-7 shadow-cs-1
    `}
    ref={navbarRef}
  >
    <HiArrowLeft 
      className="w-[24px] xs:w-6 h-[24px] xs:h-6 cursor-pointer" 
      onClick={() => ALERT.Coomingsoon()} 
    />
    <div className="w-10/12 xs:w-full">
      <SubTitle costumeClass="w-full block text-ellipsis overflow-hidden whitespace-nowrap px-2">{name}</SubTitle>
    </div>
    <HiOutlineShare 
      className="w-[24px] xs:w-6 h-[24px] xs:h-6 cursor-pointer" 
      onClick={() => ALERT.Coomingsoon()} 
    />
  </nav>)
}
 
export default Navbar
