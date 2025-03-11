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
            Our Web Design and Development service brings your digital ideas to
            life. We create custom websites that are user-friendly, visually
            appealing, and tailored to your needs. From design to
            implementation, we ensure your online presence stands out and
            performs seamlessly across devices.
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
            We develop custom software solutions that streamline your
            operations, boost productivity, and drive growth at an affordable
            price. Our team of experts will work closely with you to understand
            your unique business needs and create software that meets your
            specific requirements and expectations.
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
            We offer a range of services to help you realize and grow your idea.
            From web design and development to application development, we have
            you covered. Whatever your idea, we can help you bring it to life
            and make it a reality.
          </p>
        </div>
      </div>
    </div>
  )
}
