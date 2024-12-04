import React from 'react'
import { motion, useScroll } from 'framer-motion'

const App = () => {
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const gridSquareVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }
  const { scrollYProgress: completionProgress } = useScroll()

  const svgIconVariants = {
   hidden:{
    opacity:0,
    pathLength:0,
    fill:"rgba(255, 211, 77, 0)"
   },
   visible:{
    opacity:1,
    pathLength:1,
    fill:"rgba(255, 211, 77, 1)"
   }
  }
  return (
    <div className='flex flex-col gap-10 overflow-x-hidden'>

      <motion.section
        variants={gridContainerVariants}

        initial='hidden'
        animate='show'

        className='grid grid-cols-3 p-10 gap-10'>

        {/* {fade up and down} */}
        <motion.div variants={gridSquareVariants} className="bg-slate-800 aspect-square flex justify-center items-center rounded-lg gap-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="rounded-lg bg-stone-100 w-20 h-20">

          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeIn", delay: 0.4 }}
            className="rounded-full bg-stone-100 w-20 h-20"></motion.div>


        </motion.div>


        <motion.div variants={gridSquareVariants} className="bg-slate-800 aspect-square flex justify-center items-center rounded-lg gap-10">
          <motion.div
            animate={{ scale: [1, 2, 2, 1], rotate: [0, 90, 90, 0], borderRadius: ["10%", "10%", "50%", "10%"] }}
            transition={{ duration: 5, repeatDelay: 1, repeat: Infinity, ease: "easeInOut" }}

            className=" bg-rose-400 w-1/3 h-1/3 rounded-lg ">

          </motion.div>
        </motion.div>


        <motion.div variants={gridSquareVariants} className="bg-slate-800 aspect-square flex justify-center items-center rounded-lg gap-10">
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.2,
              backgroundColor: "#d1d5db",
              color: "black"

            }}

            transition={{ bounceDamping: 10, bounceStiffness: 600 }}

            className='w-1/2 bg-emerald-600 font-light tracking-wide p-5 rounded-lg text-2xl text-gray-100'>
            click me
          </motion.button>
        </motion.div>
        

        <motion.div variants={gridSquareVariants} className="bg-slate-800 aspect-square flex justify-center items-center rounded-lg gap-10">
          <motion.div className='bg-gray-50/20 w-40 aspect-square rounded-xl'>
            <motion.div 
            style={{scaleY:completionProgress}}
            className='bg-gray-400 w-full h-full origin-bottom rounded-xl'>

            </motion.div>
          </motion.div>
        </motion.div>


        <motion.div variants={gridSquareVariants} className="bg-slate-800 aspect-square flex justify-center items-center rounded-lg gap-10">
        <motion.div drag dragConstraints={{
          right: 125,
          left: -125,
          top: -125,
          bottom: 125
        }}

          dragTransition={{ bounceDamping: 10, bounceStiffness: 600 }}
          className='bg-orange-500 rounded-lg w-1/3 h-1/3 cursor-grab aspect-square'
        >

        </motion.div>
        </motion.div>


        <motion.div variants={gridSquareVariants} S className="bg-slate-800 aspect-square flex justify-center items-center rounded-lg gap-10">
<motion.svg
xmlns='https:www.w3.org/2000/svg'
viewBox='0 0 24 24'

className='stroke-amber-500 stroke-[0.5] w-1/2'>

<motion.path d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" variants={svgIconVariants}
initial="hidden"
animate="visible"
transition={{
  default:{duration:2,delay:1, ease:"easeInOut", repeat:Infinity, repeatType:"reverse", repeatDelay:1},
  fill:{duration:2,delay:2, ease:"easeIn", repeat:Infinity, repeatType:"reverse", repeatDelay:1}
}}
/>
</motion.svg>
        </motion.div>


      </motion.section>
    </div>
  )
}

export default App
