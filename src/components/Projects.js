// import { Project } from './Project'

export const Projects = () => {
  return (
    <div
      className="bg-[#000008] pt-[65px] pb-[135px] p-[25px] flex flex-col align-center min-h-[calc(100vh-96px)]"
      id="projects-section"
    >
      <h2 className="bg-gradient-to-t from-[#1373D1] to-[#5BADFF] inline-block text-transparent bg-clip-text text-[35px] font-[800] uppercase mb-16 max-w-[650px] mx-auto font-Poppins">
        Projects
      </h2>
      <div className="flex flex-col max-w-[650px] mx-auto">
        <div className="mb-[55px]">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row items-center">
              <h3 className="text-[#FFFFFF] text-[21px] font-[700] font-Poppins">
                Private Nanobrewery
              </h3>
            </div>
          </div>
          <p className="text-[#8491A0] text-[14px] font-[400] text-left mt-[23px] font-Poppins">
            A local private nanobrewery. We have been brewing beers, ciders,
            hard sodas, and more for 5 years. Always brewed in small batches of
            2 gallons(16 glasses) or less. We enjoy experimenting with new
            flavors and recipes. Most of our brews are ciders and hard
            sodas/juices, but our portfolio has quite the variety.
          </p>
        </div>
      </div>
      <div className="flex flex-col max-w-[650px] mx-auto">
        <div className="mb-[55px]">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row items-center">
              <h3 className="text-[#FFFFFF] text-[21px] font-[700] font-Poppins">
                3D Printed Rockets
              </h3>
            </div>
          </div>
          <p className="text-[#8491A0] text-[14px] font-[400] text-left mt-[23px] font-Poppins">
            Our studio considers this our "hobby project". We are 3D printing
            class A rockets that will be able to travel over 1000 feet in the
            air and desend slowly back on earth with a parachute recovery
            system. We have finished the design phase and are currently in the
            build phase. We plan to launch our first two rockets in March 2025.
            Future improvements include upgraded engines, improved body designs,
            and more to prepare for our massive two stage rocket.
          </p>
        </div>
      </div>
      <div className="flex flex-col max-w-[650px] mx-auto">
        <div className="mb-[55px]">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row items-center">
              <h3 className="text-[#FFFFFF] text-[21px] font-[700] font-Poppins">
                Pop-Up Food Events
              </h3>
            </div>
          </div>
          <p className="text-[#8491A0] text-[14px] font-[400] text-left mt-[23px] font-Poppins">
            We organize pop-up food events that bring together a community of
            open-minded and positive people to share a meal, drink, and
            conversation. We provide the rotating and themed food, drinks, and a
            space. You bring love, an appetite, and the conversation with you.
          </p>
        </div>
      </div>
    </div>
  )
}
