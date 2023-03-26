import React, { useEffect, useRef, useState } from "react";
import { Title, SubTitle, Description } from "../text";
import { HiArrowLeft, HiOutlineShare } from 'react-icons/hi'
import { BsShare } from 'react-icons/bs'

interface NavbarProps {
  name: string
}

const Navbar = ({
  name
}: NavbarProps) => {
  const navbarRef = useRef<HTMLDivElement>(null)
  const [navbarOpen, setNavbarOpen] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY

      console.log('===> scrollPosition', scrollPosition)
    })
  }, [])

  return (<nav 
    className="sticky top-0 backdrop-blur-md bg-white/90 px-1 xs:px-5 py-3.5 flex items-center justify-between xs:gap-x-7 shadow-cs-1"
    ref={navbarRef}
  >
    <HiArrowLeft className="w-[24px] xs:w-6 h-[24px] xs:h-6 cursor-pointer" />
    <div className="w-10/12 xs:w-full">
      <SubTitle costumeClass="w-full block text-ellipsis overflow-hidden whitespace-nowrap px-2">{name}</SubTitle>
    </div>
    <HiOutlineShare className="w-[24px] xs:w-6 h-[24px] xs:h-6 cursor-pointer" />
  </nav>);
}
 
export default Navbar;
