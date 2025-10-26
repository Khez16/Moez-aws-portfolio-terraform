import Card from "../components/Card"
import CopyEmailButton from "../components/CopyEmailButton"
import { FrameWorks } from "../components/Frameworks"
import { Globe } from "../components/globe"

const About = () => {
    return (
        <section id="About" className='c-space section-spacing'>
            <h2 className="text-heading"> About Me</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
                {/* Grid 1*/}
                <div className="flex items-end grid-default-color grid-1">
                    {/*make the website responsive with the md and lg for medium and large screens*/}
                    <img src='assets/coding-pov.png' className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10
                    lg:scale-[2.5}">

                    </img>
                    <div className="z-10">
                        <p className="headtext"> Hi, I am Moez Khan</p>
                        <p className="subtext `">I am in my Third year of University studying Computer Science
                            at the University of Ontario Tech. I am passionate about building efficient and scalable software solutions.
                            I have 8 months of  professional experience in CyberSecurity and IT.
                            I have completed 2 internships which were at Professional Engineers Ontario
                            as a Cybersecurity and IT intern, and at FTG where I was working a Cybersecurity 
                            and IT Network Analyst. I have built multiple projects including game mechanics
                            in Unreal Engine using C++, and a file storage web application using React and TypeScript.
                            More details about my projects and experience are listed below. 
                        </p>
                    </div>
                    <div className =" absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h*1/3 bg-gradient-to-t from-indigo" />

                    
                </div>
                {/* Grid 2*/}
                <div className="grid-default-color grid-2">
                    <div className="flex-items-center justify-center w-full h-full">
                        <p className="flex items-end text-5xl text-gray-500">
                            Code is Craft
                        </p>
                        <Card text="GRASP"/>
                        <Card text="SOLID"/>
                        <Card text="Design Patterns"/>
                        <Card text="Design Principles"/>
                        <Card text="SRP"/>
                    </div>
                </div>
                 {/* Grid 3*/}
                <div className="grid-black-color grid-3">
                    <div className=" z-10 w-[500]">
                        <p className="headtext"> Time Zone</p>
                        <p className="subtext"> I am Based in Toronto and open <br /> to work remotely</p>
                    </div>
                    <figure className="absolute left-[30%] top-[10%]">
                        <Globe />
                    </figure>
                </div>
                {/* Grid 4*/}
                <div className="grid-special-color grid-4">
                    <div className="flex flex-col items-center justify-center gap-4 size-full">
                        <p className="text-center headtext"> Do you want to start a project together?</p>
                        <CopyEmailButton />
                    </div>
                </div>
                {/* Grid 5*/}
                <div className="grid-default-color grid-5">
                    <div className=" w-[100%]">
                        <p className="headtext"> Frameworks and Tools</p>
                        <p className="subtext"> These are some of the frameworks and tools I have been working with recently</p>
                    </div>
                    <div className="absolute inset-0 flex items-start justify-center md:scale-110 mt-[3.5rem]">
                        <FrameWorks />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About    