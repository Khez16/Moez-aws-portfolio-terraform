/*File is for the actaul text on the hero page*/ 

import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
    const words=["DevOps", "IT", "CyberSecurity"]; {/*Will flip through these words on website page*/}
    const variants = {
        hidden: {opacity: 0, x: -50},
        visible: {opacity: 1, x:0}
    }
    return (
       <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
            {/*Desktop View*/}
            <div className="flex-col hidden md:flex c-space">
                <motion.h1 className="text-4xl font-medium" 
                    variants={variants}
                    initial = "hidden"
                    animate = "visible"
                    transition={{delay: 1}}>
                         Hey I'm Moez
                </motion.h1>
                <div className="flex flex-col items-start">
                <motion.p className="text-5xl font-medium text-neutral-300" 
                    variants={variants}
                    initial = "hidden"
                    animate = "visible"
                    transition={{delay: 1.2}}> A Developer</motion.p>

                <motion.div> 
                    <FlipWords words={words} className="font-black text-white text-8xl"/>  {/*words array from top is being called here*/}
                </motion.div>
                <motion.p className="text-4xl font-medium text-neutral-300 "> Computer Science</motion.p>
            </div>
            </div>
            {/*Mobile View*/}
            <div className="flex flex-col space-y-6 md:hidden"> 
                <motion.p className="text-4xl font-medium"
                 variants={variants}
                    initial = "hidden"
                    animate = "visible"
                    transition={{delay: 1}}>
                        Hey I'm Moez </motion.p>
                <div>
                    <motion.p className="text-5xl font-black text-neutral-300"
                    variants={variants}
                    initial = "hidden"
                    animate = "visible"
                    transition={{delay: 1.8}}>
                        Building</motion.p>
                    <motion.div>
                        <FlipWords words={words} className="font-bold text-white text-7xl"/>
                    </motion.div>
                    <motion.p className= "text-4xl font-black text-neutral-300">Web Applications</motion.p>
                </div>
            
            </div>
       </div>
    )
}

export default HeroText