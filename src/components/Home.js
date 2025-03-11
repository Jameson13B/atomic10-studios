import React, { useState, useEffect } from "react"
import NeonLogo from "../assets/neon_logo.png"

const topics = [
  "Modern Web Design", // Service
  "Software Development", // Service
  "Private Nanobrewery", // Project
  "Dev Shop Services", // Service
  "3D Printed Rockets", // Project
  "Pop-Up Food Events", // Project
]

export const Home = (props) => {
  const [topic, setTopic] = useState(topics[0])

  useEffect(() => {
    let i = 1
    const interval = setInterval(() => {
      setTopic(topics[i])
      i === topics.length - 1 ? (i = 0) : i++
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="flex flex-col bg-[#000008] h-[calc(100vh-96px)] px-[25px]"
      id="home-section"
    >
      <h1 className="max-w-[768px] mx-auto mt-20 text-center text-white text-[45px] sm:text-[55px] font-[800] font-Poppins">
        The studio for{" "}
      </h1>
      <p className="max-w-[768px] mx-auto mb-12 bg-gradient-to-br from-[#FF51A0] from-55% to-[#3289C3] to-75% bg-clip-text text-[50px] sm:text-[65px] text-transparent font-[800] text-center">
        {topic}
      </p>
      <img
        src={NeonLogo}
        alt="logo"
        className="mt-[3rem] max-w-[900px] w-full mx-auto"
      />
    </div>
  )
}
