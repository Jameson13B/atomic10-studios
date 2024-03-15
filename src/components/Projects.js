// import { Project } from './Project'

export const Projects = () => {
  return (
    <div
      className="bg-[#000008] py-[100px] p-[25px] flex flex-col align-center min-h-[calc(100vh-96px)]"
      id="projects-section"
    >
      <h2 className="bg-gradient-to-t from-[#1373D1] to-[#5BADFF] inline-block text-transparent bg-clip-text text-[35px] font-[800] uppercase mb-[27px] max-w-[650px] mx-auto font-Poppins">
        Projects
      </h2>
      <div className="flex flex-col sm:flex-row max-w-[650px] mx-auto flex-wrap mb-[60px]">
        <h3 className="text-[#FFFFFF] text-[21px] font-[700] font-Poppins">
          Projects Coming Soon
        </h3>
        {/* <Project title="Designer Portfolio" containerStyles="sm:mr-[30px]" /> */}
        {/* <Project
          title="Gilluly Planner"
          containerStyles="mt-[30px] sm:mr-0 sm:mt-0"
        /> */}
        {/* <Project
          title="Build Redux - Article"
          containerStyles="mt-[30px] sm:mr-[30px]"
        /> */}
        {/* <Project
          title="MARP Cheatsheet - Article"
          containerStyles="mt-[30px] sm:mt-[30px]"
        /> */}
        {/* <Project
          title="Stripe API - Article"
          containerStyles="mt-[30px] sm:mr-[30px]"
        /> */}
      </div>
    </div>
  )
}
