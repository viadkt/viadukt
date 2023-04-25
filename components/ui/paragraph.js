
import { motion } from "framer-motion";


export default function Title({title, preTitle, color, className, children}) {
    return (
    <motion.p 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{duration: 0.5, delay: 0.1}}
        className={` font-light text-lg leading-8  ${className} `}
    >
        {children}
    </motion.p>
    )
}

