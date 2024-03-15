export const Services = () => {
  return (
    <div
      className="py-[100px] p-[25px] flex flex-col align-center min-h-[calc(100vh-96px)]"
      id="services-section"
    >
      <h2 className="bg-gradient-to-t from-[#D5491D] to-[#FF8660] inline-block text-transparent bg-clip-text text-[35px] font-[800] uppercase mb-20 max-w-[650px] mx-auto font-Poppins">
        Services
      </h2>
      <div className="flex flex-col max-w-[650px] mx-auto">
        <div className="mb-[55px]">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row items-center">
              <h3 className="text-[#FFFFFF] text-[21px] font-[700] font-Poppins">
                Web Design and Development
              </h3>
            </div>
          </div>
          <p className="text-[#8491A0] text-[14px] font-[400] text-left mt-[23px] font-Poppins">
            Our Web Design and Development service brings your digital ideas to
            life. We create custom websites and software applications that are
            user-friendly, visually appealing, and tailored to your needs. From
            design to implementation, we ensure your online presence stands out
            and performs seamlessly across devices.
          </p>
        </div>
      </div>
      <div className="flex flex-col max-w-[650px] mx-auto">
        <div className="mb-[55px]">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row items-center">
              <h3 className="text-[#FFFFFF] text-[21px] font-[700] font-Poppins">
                Email Marketing Design
              </h3>
            </div>
          </div>
          <p className="text-[#8491A0] text-[14px] font-[400] text-left mt-[23px] font-Poppins">
            Email Marketing Design is about making your emails pop! It's about
            creating eye-catching designs and compelling content that make
            people want to click. With our service, your emails will stand out
            in crowded inboxes and get your message across effectively, helping
            you connect with your audience and drive results.
          </p>
        </div>
      </div>
      <div className="flex flex-col max-w-[650px] mx-auto">
        <div className="mb-[55px]">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row items-center">
              <h3 className="text-[#FFFFFF] text-[21px] font-[700] font-Poppins">
                Web Content
              </h3>
            </div>
          </div>
          <p className="text-[#8491A0] text-[14px] font-[400] text-left mt-[23px] font-Poppins">
            Web Content is all about telling your story online. It includes
            everything from engaging blog posts and captivating visuals to
            informative website text and catchy social media updates. Our Web
            Content service helps you connect with your audience by creating
            content that's easy to understand, enjoyable to read, and keeps them
            coming back for more.
          </p>
        </div>
      </div>
    </div>
  )
}
