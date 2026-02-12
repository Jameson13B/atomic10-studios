export const Services = () => {
  return (
    <div
      className="bg-[#000008] pt-[65px] pb-[135px] p-[25px] flex flex-col align-center min-h-[calc(100vh-62px)]"
      id="services-section"
    >
      <h2 className="bg-gradient-to-t from-[#D5491D] to-[#FF8660] inline-block text-transparent bg-clip-text text-[35px] font-[800] uppercase mb-16 max-w-[650px] mx-auto font-Poppins">
        Services
      </h2>

      <div className="flex flex-col max-w-[650px] mx-auto">
        <div className="mb-[55px]">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row items-center">
              <h3 className="text-[#FFFFFF] text-[21px] font-[700] font-Poppins">
                Modern Web Design
              </h3>
            </div>
          </div>
          <p className="text-[#8491A0] text-[14px] font-[400] text-left mt-[23px] font-Poppins">
            Your website should be more than just functional—it should be an
            experience. At Atomic10, we craft sleek, high-performance sites that
            are fast, seamless, and built with the right tools for the job,
            whether that's Vite, React, TypeScript, or cutting-edge serverless
            tech. No templates, no one-size-fits-all solutions—just bold, custom
            web design that brings your vision to life while standing out in all
            the right ways.
          </p>
        </div>
      </div>
      <div className="flex flex-col max-w-[650px] mx-auto">
        <div className="mb-[55px]">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row items-center">
              <a
                href="https://neonfiction.games"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-[#FFFFFF] text-[21px] font-[700] font-Poppins">
                  Neon Fiction Games
                </h3>
              </a>
            </div>
          </div>
          <p className="text-[#8491A0] text-[14px] font-[400] text-left mt-[23px] font-Poppins">
            Neon Fiction Games is an online game studio. It all started with
            Vault, our breakout banger that got everyone hooked. Now we're
            dropping Penguin Paradise (get ready for penguin-fueled chaos on
            ice!), going full throttle on Starstruck (trust us, it's going to be
            galactic), and plotting epic wins in Bictory!. We live for those
            electric multiplayer moments that turn regular nights into absolute
            legends. Bust this out on your next game night and be an instant
            hit.
          </p>
          <a
            className="text-[#5BADFF] text-[14px] font-[400] text-left ml-[16px] mt-[16px] block font-Poppins"
            href="https://neonfiction.games"
            target="_blank"
            rel="noopener noreferrer"
          >
            ☍ Neon Fiction Games
          </a>
        </div>
      </div>
      <div className="flex flex-col max-w-[650px] mx-auto">
        <div className="mb-[55px]">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row items-center">
              <h3 className="text-[#FFFFFF] text-[21px] font-[700] font-Poppins">
                Software Development
              </h3>
            </div>
          </div>
          <p className="text-[#8491A0] text-[14px] font-[400] text-left mt-[23px] font-Poppins">
            Great software should feel like magic—powerful, seamless, and built
            just for you. At Atomic10, we craft custom solutions that simplify
            operations, boost productivity, and scale effortlessly. Whether it's
            a sleek web app, an automated system, or something entirely
            out-of-the-box, we use the best tools for the job to build software
            that works the way you need it to. No fluff, no unnecessary
            complexity—just smart, efficient development that brings your ideas
            to life.
          </p>
        </div>
      </div>
    </div>
  )
}
