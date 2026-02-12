// import { Project } from './Project'

export const Projects = () => {
  return (
    <div
      className="bg-[#191919] pt-[65px] pb-[135px] p-[25px] flex flex-col align-center min-h-[calc(100vh-62px)]"
      id="projects-section"
    >
      <h2 className="bg-gradient-to-t from-[#1373D1] to-[#5BADFF] inline-block text-transparent bg-clip-text text-[35px] font-[800] uppercase mb-16 max-w-[650px] mx-auto font-Poppins">
        Projects
      </h2>

      <div className="flex flex-col max-w-[650px] mx-auto">
        <div className="mb-[55px]">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row items-center">
              <a
                href="https://neonboard.atomic10.studio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-[#FFFFFF] text-[21px] font-[700] font-Poppins">
                  Neon Board - Multiplayer Game Framework
                </h3>
              </a>
            </div>
          </div>
          <p className="text-[#8491A0] text-[14px] font-[400] text-left mt-[23px] font-Poppins">
            Neon Board is a multiplayer game framework that keeps your game
            state in sync across devices using Firebase Firestore. A hooks first
            approach with an imperative API for vanilla JS or whenever you need
            it. One game config. Board applies it. Players submit actions.
            Firebase Firestore — no game server.
          </p>
          <a
            className="text-[#5BADFF] text-[14px] font-[400] text-left ml-[16px] mt-[16px] block font-Poppins"
            href="https://neonboard.atomic10.studio"
            target="_blank"
            rel="noopener noreferrer"
          >
            ☍ Neon Board Docs
          </a>
        </div>
      </div>
      <div className="flex flex-col max-w-[650px] mx-auto">
        <div className="mb-[55px]">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row items-center">
              <h3 className="text-[#FFFFFF] text-[21px] font-[700] font-Poppins">
                Private Pico Brewery
              </h3>
            </div>
          </div>
          <p className="text-[#8491A0] text-[14px] font-[400] text-left mt-[23px] font-Poppins">
            Brewing, but make it experimental. At Atomic10 Brewery, we craft
            ultra-small batches—just 3 gallons or less at a time—giving us the
            freedom to explore bold flavors, unexpected ingredients, and
            anything that piques our curiosity. For the past five years, we've
            been perfecting ciders, hard sodas, and small-batch brews that don't
            just taste good—they tell a story. No mass production, no
            shortcuts—just pure creativity in a glass.
          </p>
          <a
            className="text-[#5BADFF] text-[14px] font-[400] text-left ml-[16px] mt-[16px] block font-Poppins"
            href="https://brews.atomic10.studio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ☍ Brews Menu
          </a>
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
            What starts as an experiment quickly becomes an obsession. Designing
            and building Class A rockets that soar over 1,000 feet before
            parachuting back to Earth. With the design phase complete, we're
            deep into building and prepping for our first test launches in March
            2025. And this is just the beginning—future upgrades include more
            powerful engines, refined aerodynamics, and the ultimate goal: a
            massive two-stage rocket built for even greater heights.
          </p>
        </div>
      </div>
    </div>
  )
}
