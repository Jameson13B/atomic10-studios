import React, { useState } from "react"

import MenuIcon from "../assets/menu.svg"
import CloseIcon from "../assets/close.svg"

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const scrollToTop = (selector) => {
    window.scrollTo({
      behavior: "smooth",
      top:
        document.querySelector(selector).getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        62,
    })
  }

  return (
    <div className="w-full bg-[#222222] sticky top-0">
      <div className="flex justify-between items-center max-w-[900px] mx-auto px-[30px] py-[15px]">
        <h1 className="text-2xl font-bold text-white font-Poppins">
          Atomic10 Studio
        </h1>
        <div className="flex justify-between hidden sm:flex">
          <button
            className="text-white mr-[71px] font-PlusJakarta"
            onClick={() => {
              scrollToTop("#home-section")
            }}
          >
            Home
          </button>
          <button
            className="text-white mr-[71px] font-PlusJakarta"
            onClick={() => {
              scrollToTop("#projects-section")
            }}
          >
            Projects
          </button>
          <button
            className="text-white mr-[71px] font-PlusJakarta"
            onClick={() => {
              scrollToTop("#services-section")
            }}
          >
            Services
          </button>
          <button
            className="text-white font-PlusJakarta"
            onClick={() => {
              scrollToTop("#about-section")
            }}
          >
            About
          </button>
        </div>
        <div className="flex justify-between items-center sm:hidden">
          <button
            className="text-white h-[25px] aspect-square font-PlusJakarta"
            onClick={() => setIsOpen(true)}
          >
            <img alt="menu button" src={MenuIcon} />
          </button>
        </div>
        {isOpen && (
          <div className="flex flex-col items-center fixed left-0 right-0 top-0 bottom-0 bg-[#222222] p-[30px] sm:hidden">
            <button
              className="text-white h-[20px] aspect-square ml-auto font-PlusJakarta"
              onClick={() => {
                setIsOpen(false)
              }}
            >
              <img alt="close button" src={CloseIcon} />
            </button>
            <button
              className="text-white p-[20px] rounded-[12px] w-full mt-[20px] font-PlusJakarta hover:bg-[#161513] text-[20px]"
              onClick={() => {
                setIsOpen(false)
                scrollToTop("#home-section")
              }}
            >
              Home
            </button>
            <button
              className="text-white p-[20px] rounded-[12px] w-full mt-[20px] font-PlusJakarta hover:bg-[#161513] text-[20px]"
              onClick={() => {
                setIsOpen(false)
                scrollToTop("#services-section")
              }}
            >
              Services
            </button>
            <button
              className="text-white p-[20px] rounded-[12px] w-full mt-[20px] font-PlusJakarta hover:bg-[#161513] text-[20px]"
              onClick={() => {
                setIsOpen(false)
                scrollToTop("#projects-section")
              }}
            >
              Projects
            </button>
            <button
              className="text-white p-[20px] rounded-[12px] w-full mt-[20px] font-PlusJakarta hover:bg-[#161513] text-[20px]"
              onClick={() => {
                setIsOpen(false)
                scrollToTop("#about-section")
              }}
            >
              About
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
