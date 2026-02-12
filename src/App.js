import React from "react"

import { Header } from "./components/Header"
import { Home } from "./components/Home"
import { Services } from "./components/Services"
import { Projects } from "./components/Projects"
import { About } from "./components/About"

function App() {
  return (
    <div className="bg-[#161513]">
      <Header />
      <Home />
      <Projects />
      <Services />
      <About />
    </div>
  )
}

export default App
