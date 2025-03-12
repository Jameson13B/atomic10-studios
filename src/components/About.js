import NeonLogo from "../assets/neon_logo.png"

export const About = () => {
  return (
    <div
      className="w-full h-[calc(100vh-96px)] bg-[#191919] px-[25px] pb-[100px] pt-[55px]"
      id="about-section"
    >
      <div className="flex flex-col max-w-[650px] h-full mx-auto">
        <h2 className="text-[#FFFFFF] text-[30px] font-[700] font-Poppins mb-[30px] text-left">
          About
        </h2>
        <p className="text-[#C5C5C5] text-[14px] font-[400] font-Poppins mb-[40px] text-left">
          Atomic10 isn't just a company—it's a playground for bold ideas,
          unexpected creativity, and hands-on innovation. We're a collective of
          makers, builders, and dreamers bringing unique projects to life, from
          modern web design and software development to experimental brewing,
          pop-up food experiences, and even 3D-printed rockets. If it sparks
          curiosity, we're in.
        </p>
        <p className="text-[#C5C5C5] text-[14px] font-[400] font-Poppins mb-[40px] text-left">
          At the heart of it all is a simple mission: to create, explore, and
          share. Whether crafting sleek digital experiences, pushing the
          boundaries of technology, or hosting unforgettable nights filled with
          food and community, every Atomic10 project is driven by passion,
          collaboration, and a relentless pursuit of what's next.
        </p>
        <p className="text-[#C5C5C5] text-[14px] font-[400] font-Poppins mb-[40px] text-left">
          We're not here to follow the rules—we're here to redefine them.
          Welcome to Atomic10.
        </p>
        <p className="text-[#C5C5C5] text-[14px] font-[800] font-Poppins mb-[22px]">
          Headquarters: <span className="font-[600]">Salt Lake City, UT</span>
        </p>
        <p className="text-[#C5C5C5] text-[14px] mb-[60px] font-[800] font-Poppins">
          Contact:{" "}
          <a className="font-[600]" href="mailto: jameson13b@icloud.com">
            jameson13b@icloud.com
          </a>
        </p>
        <img
          src={NeonLogo}
          alt="logo"
          className="max-w-[60%] sm:mt-4 w-full mx-auto self-end"
        />
      </div>
    </div>
  )
}
