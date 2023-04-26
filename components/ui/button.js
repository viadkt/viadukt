
import { motion } from "framer-motion";


export default function Button({href, target, rel, children, className}) {
    return (
        <a href={href} target={target} rel={rel} className={`inline-flex gap-2  px-3 h-9  items-center rounded-full text-center  bg-neutral-50 font-semibold hover:bg-neutral-100 ${className} `}>
            {children}
            <svg className=" w-4 h-4 inline fill-current"  viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.3705 5.97559V0.975586H23.3705H28.3705V4.51118L28.3705 4.51121L28.3705 4.51123V5.97559L28.3705 20.9756H23.3705V9.51123L3.53554 29.3462L0 25.8107L19.8351 5.97559H8.3705Z" />
            </svg>
        </a>
    )
}

