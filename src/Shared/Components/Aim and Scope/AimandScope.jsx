import React from 'react'
import { FaGlobe, FaHandshake, FaLightbulb, FaMicroscope } from 'react-icons/fa'

function AimandScope() {
    return (
        <>
            <section className="flex flex-col gap-5 max-w-[90rem] py-5  mx-auto md:px-5 px-3">
                <div className="  relative">
                    <section className="flex flex-col gap-5">
                        <section className="flex flex-col gap-4">
                            <div className=' '>
                                <h1 className=" text-[#18025b] text-center merry  font-semibold  lg:text-2xl   text-lg ">
                                    Aim and Scope
                                </h1>
                            </div>
                            <p className="text-justify md:text-base text-sm">
                                The International Journal of Quantum Computing and AI (IJQCAI) is a peer-reviewed, open-access journal dedicated to publishing high-quality research at the intersection of quantum computing and artificial intelligence. Our mission is to advance scientific knowledge, foster interdisciplinary collaboration, and bridge the gap between theoretical advancements and real-world applications in these rapidly evolving fields.
                            </p>
                        </section>

                        <section className="flex flex-col gap-4">
                            <div className=' '>
                                <h1 className=" text-[#18025b]  text-center merry  font-semibold  lg:text-2xl   text-lg ">
                                    Aim
                                </h1>
                            </div>
                            <p className="text-justify md:text-base text-sm">
                                The International Journal of Quantum Computing and AI (IJQCAI) aims to advance research in quantum computing and artificial intelligence by publishing high-quality, peer-reviewed articles. The journal provides a global platform for researchers, academics, and industry professionals to share cutting-edge innovations, theoretical advancements, and practical applications. IJQCAI fosters interdisciplinary collaboration, drives technological breakthroughs, and contributes to the evolution of next-generation computing and intelligent systems.
                            </p>
                        </section>
                        <section className="flex flex-col gap-4">
                            <div className=' '>
                                <h1 className="text-[#18025b] text-center merry font-semibold  lg:text-2xl   text-lg ">
                                    Scope
                                </h1>
                            </div>
                            <p className="text-justify md:text-base text-sm">
                                IJQCAI welcomes original research articles, reviews, and technical papers on topics including, but not limited to:
                            </p>
                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                    <i className="fi  fi-ss-dot-circle text-xs text-[#18025b]   flex items-center"></i>
                                    <p className=""><span className='text-[#18025b] font-semibold'>Quantum Machine Learning</span> – Development of quantum-enhanced machine learning and deep learning models.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi  fi-ss-dot-circle text-xs text-[#18025b]   flex items-center"></i>
                                    <p className=""><span className='text-[#18025b] font-semibold'>Quantum Algorithms for AI </span> –Designing novel quantum algorithms to improve AI performance and efficiency.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi  fi-ss-dot-circle text-xs text-[#18025b]   flex items-center"></i>
                                    <p className=""><span className='text-[#18025b] font-semibold'>Quantum Neural Networks</span> – Exploring neural networks within the quantum computing framework.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi  fi-ss-dot-circle text-xs text-[#18025b]   flex items-center"></i>
                                    <p className=""><span className='text-[#18025b] font-semibold'>AI-Driven Quantum Computing</span> – Applications of AI in quantum error correction, optimization, and circuit design.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi  fi-ss-dot-circle text-xs text-[#18025b]   flex items-center"></i>
                                    <p className=""><span className='text-[#18025b] font-semibold'>Quantum Data Science</span> – Techniques for quantum data processing, pattern recognition, and analytics.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi  fi-ss-dot-circle text-xs text-[#18025b]   flex items-center"></i>
                                    <p className=""><span className='text-[#18025b] font-semibold'>Hybrid Quantum-Classical Computing </span> – Integration of classical AI models with quantum computing techniques.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi  fi-ss-dot-circle text-xs text-[#18025b]   flex items-center"></i>
                                    <p className=""><span className='text-[#18025b] font-semibold'>Applications of Quantum AI</span> – Real-world use cases in cryptography, optimization, financial modeling, and material science.</p>
                                </div>

                            </div>
                        </section>
                        <section>
                            <h1 className="bg-[#18025b] h-[1px] w-full  "></h1>
                        </section>

                        <section className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  md:gap-10 gap-5'>
                            <div className='flex flex-col gap-2 border-l-4 relative overflow-hidden border-l-[#18025b] border border-[#18025b] rounded-lg md:p-4  p-3'>
                                <h2 className='text-[#18025b] font-bold merry md:text-lg underline underline-offset-2'>Innovation</h2>
                                <div className='flex   gap-3'>
                                    <i className="fi  fi-ss-dot-circle text-xs text-[#18025b]     "></i>
                                    <p className="text-justify  md:text-base text-sm">Advancing pioneering ideas and groundbreaking research in quantum computing and artificial intelligence to drive transformative technological progress.

                                    </p>
                                </div>
                                <div className="bg-[#18025b] w-20 h-20 absolute -top-10 -right-10 rotate-45 flex justify-center items-center ">
                                    <FaLightbulb className="text-white mt-10 -rotate-45" />
                                </div>
                            </div>
                            <div className='flex flex-col gap-2  border-l-4  relative overflow-hidden border-l-[#18025b] border border-[#18025b] rounded-lg md:p-4  p-3'>
                                <h2 className='text-[#18025b] font-bold merry md:text-lg  underline underline-offset-2'>Collaboration</h2>
                                <div className='flex   gap-3'>
                                    <i className="fi  fi-ss-dot-circle text-xs text-[#18025b]     "></i>
                                    <p className="text-justify  md:text-base text-sm"> Fostering synergy between researchers, academia, and industry to accelerate advancements in quantum-AI integration and emerging technologies.</p>
                                </div>
                                <div className="bg-[#18025b] w-20 h-20 absolute -top-10 -right-10 rotate-45 flex justify-center items-center ">
                                    <FaHandshake className="text-white mt-10 -rotate-45" />
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 border-l-4  relative overflow-hidden border-l-[#18025b] border border-[#18025b] rounded-lg md:p-4  p-3'>
                                <h2 className='text-[#18025b] font-bold merry md:text-lg  underline underline-offset-2' >Research Excellence</h2>
                                <div className='flex   gap-3'>
                                    <i className="fi  fi-ss-dot-circle text-xs text-[#18025b]     "></i>
                                    <p className="text-justify  md:text-base text-sm"> Upholding high academic standards by publishing original, high-impact research, pushing the frontiers of quantum computing and AI.</p>
                                </div>
                                <div className="bg-[#18025b] w-20 h-20 absolute -top-10 -right-10 rotate-45 flex justify-center items-center ">
                                    <FaMicroscope className="text-white mt-10 -rotate-45" />
                                </div>
                            </div>
                        </section>
                    </section>
                </div>
            </section>
        </>
    )
}

export default AimandScope

