export const Services = () => {
  return (
    <div
      className="pt-[65px] pb-[135px] p-[25px] flex flex-col align-center min-h-[calc(100vh-96px)]"
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
      <div className="flex flex-col max-w-[650px] mx-auto">
        <div className="mb-[55px]">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row items-center">
              <h3 className="text-[#FFFFFF] text-[21px] font-[700] font-Poppins">
                Dev Shop Services
              </h3>
            </div>
          </div>
          <p className="text-[#8491A0] text-[14px] font-[400] text-left mt-[23px] font-Poppins">
            Big idea, small idea, half-baked idea—we're here for all of it. At
            Atomic10, we help turn concepts into real, working products with
            custom web, software, and app development built around your needs.
            Whether you're starting from scratch or refining something great, we
            bring the technical expertise and creative problem-solving to get
            you there, no nonsense, no limits.
          </p>
        </div>
      </div>
    </div>
  )
}
