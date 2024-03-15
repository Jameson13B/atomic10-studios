import NeonLogo from '../assets/neon_logo.png'

export const About = () => {
  return (
    <div
      className="w-full h-[calc(100vh-96px)] bg-[#191919] px-[25px] py-[100px]"
      id="about-section"
    >
      <div className="flex flex-col max-w-[650px] h-full mx-auto">
        <h2 className="text-[#FFFFFF] text-[30px] font-[700] font-Poppins mb-[30px] text-left">
          About
        </h2>
        <p className="text-[#C5C5C5] text-[14px] font-[400] font-Poppins mb-[40px] text-left">
          At Atomic10 Studio, we're passionate about helping businesses thrive
          in the digital world. With our comprehensive range of services
          including Web Design and Development, Web Content, and Email Marketing
          Design, we empower our clients to build a strong online presence,
          engage their audience effectively, and achieve their goals. Backed by
          a team of skilled professionals, we combine creativity, expertise, and
          dedication to deliver tailored solutions that exceed expectations.
          Whether you're a new company or already well established, we're
          committed to partnering with you on your journey to digital success.
        </p>
        <p className="text-[#C5C5C5] text-[14px] font-[800] font-Poppins mb-[22px]">
          Headquarters: <span className="font-[600]">Salt Lake City, UT</span>
        </p>
        <p className="text-[#C5C5C5] text-[14px] mb-[60px] font-[800] font-Poppins">
          Contact:{' '}
          <a className="font-[600]" href="mailto: jameson13b@icloud.com">
            jameson13b@icloud.com
          </a>
        </p>
        <img
          src={NeonLogo}
          alt="logo"
          className="max-w-[60%] sm:mt-16 w-full mx-auto self-end"
        />
      </div>
    </div>
  )
}
