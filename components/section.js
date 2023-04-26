import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";



export default function Section({id, darkColor, preTitle, title, text, children}) {
    return (
        <motion.section 
            id={id} 
            className={`bg-white  lg:static flex flex-col lg:flex-row w-full h-screen max-h-screen container mx-auto overflow-hidden`}
        >

        {/* Background */}
        <div 
            className={`absolute lg:top-auto right-0 w-full  lg:w-1/2 h-[33.33vh] lg:h-full z-10`} 
            style={{backgroundColor: darkColor}}
        />

        {/* Content */}
        {children}
      </motion.section>
    )
}

