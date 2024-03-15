import React, { useState, useEffect } from 'react'
import NeonLogo from '../assets/neon_logo.png'

const topics = [
  'Restaurants',
  'Brew Pubs',
  'Salons',
  'Portfolios',
  'Real Estate',
]

export const Home = (props) => {
  const [topic, setTopic] = useState(topics[0])

  useEffect(() => {
    let i = 1
    const interval = setInterval(() => {
      setTopic(topics[i])
      i === topics.length - 1 ? (i = 0) : i++
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="flex flex-col bg-[#000008] h-[calc(100vh-96px)] px-[25px]"
      id="home-section"
    >
      <h1 className="max-w-[768px] mx-auto mt-20 text-center text-white text-[45px] sm:text-[55px] font-[800] font-Poppins">
        Your technology partner for{' '}
      </h1>
      <p className="max-w-[768px] mx-auto mb-12 bg-gradient-to-br from-[#FF51A0] from-55% to-[#3289C3] to-75% bg-clip-text text-[55px] sm:text-[65px] text-transparent font-[800]">
        {topic}
      </p>
      <img src={NeonLogo} alt="logo" className="max-w-[900px] w-full mx-auto" />
    </div>
  )
}
