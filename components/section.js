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
            className={`flex w-full min-h-screen container mx-auto`}
        >

        {/* Background */}
        <div 
            className={`absolute right-0  w-1/2  h-full z-10`} 
            style={{backgroundColor: darkColor}}
        />

        {/* Content */}
        {children}
      </motion.section>
    )
}

