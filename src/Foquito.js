import React from 'react'
import { motion } from "framer-motion"

export default function Foquito({bg, dy}) {
    return (
        <motion.div className='foquito'
        animate={{background:['#444444','#444444',bg]}}
        transition={{duration: 6, repeat: Infinity, delay: dy, ease:'easeInOut'}}
        ></motion.div>
    )
}
