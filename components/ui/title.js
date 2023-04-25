import { motion } from "framer-motion";


export default function Title({title, preTitle, color, darkColor, children, className}) {
    return (
        <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{duration: 0.5}}
        >
            <h3 className={className}>{preTitle}</h3>
            <h1 className="font-extralight text-5xl leading-tight mb-16" >{children}</h1>
        </motion.div>

    )
}

