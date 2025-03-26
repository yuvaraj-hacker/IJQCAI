import React from 'react'
import { FaBalanceScale, FaGlobe, FaUserTie } from 'react-icons/fa'

function About() {
  return (
    <>
      <section className="flex flex-col gap-5 max-w-[90rem] py-5  mx-auto md:px-5 px-3">
        <div className="  relative">
          <section className="flex flex-col gap-5">
            <section className="flex justify-between flex-wrap md:flex-nowrap gap-5">
              <div className="flex flex-col justify-evenly">
                <p className="text-justify md:text-base text-sm">
                  The International Journal of Quantum Computing and AI (IJQCAI) is a peer-reviewed, open-access journal dedicated to advancing research at the intersection of quantum computing and artificial intelligence. It publishes high-quality studies on quantum machine learning, quantum algorithms, AI-driven quantum computing applications, and related interdisciplinary fields. IJQCAI aims to foster innovation, facilitate global collaboration, and bridge the gap between theoretical advancements and real-world applications in quantum AI.                </p>
              </div>
              {/* <img className="mx-auto  border p-0.5 border-[#3e8000] " src="/assets/Images/aboutt.png" alt="" /> */}
            </section>
            <section className="flex flex-col gap-4">
              <div className=' '>
                <h1 className="  text-center merry text-[#18025b] font-semibold  lg:text-2xl   text-lg ">
                  Scope
                </h1>
              </div>
              <p className="text-justify md:text-base text-sm">
                The International Journal of Quantum Computing and AI (IJQCAI) is dedicated to publishing high-quality, peer-reviewed research at the intersection of Quantum Computing and Artificial Intelligence. The journal aims to foster innovation in quantum-based AI technologies and their real-world applications.              </p>
              <div className='flex flex-col gap-2 md:text-base text-sm'>
                <div className='flex items-center gap-2'>
                  <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                  <p className=""><span className='text-[#18025b] font-semibold'>Quantum Machine Learning</span> –  Advancements in applying quantum computing to machine learning and deep learning models.</p>
                </div>
                <div className='flex items-center gap-2 '>
                  <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                  <p className=""><span className='text-[#18025b] font-semibold'>Quantum Algorithms for AI </span> – Development of new quantum algorithms to enhance AI performance.</p>
                </div>
                <div className='flex items-center gap-2'>
                  <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                  <p className=""><span className='text-[#18025b] font-semibold'>Quantum Neural Networks</span> – Exploring neural networks in the quantum paradigm.</p>
                </div>
                <div className='flex items-center gap-2'>
                  <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                  <p className=""><span className='text-[#18025b] font-semibold'>AI-Optimized Quantum Computing </span> – AI-driven quantum error correction, quantum circuit optimization, and hybrid quantum-classical approaches.</p>
                </div>
                <div className='flex items-center gap-2'>
                  <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                  <p className=""><span className='text-[#18025b] font-semibold'>Quantum Data Science</span> –  AI techniques for quantum data processing, pattern recognition, and analysis.</p>
                </div>
                <div className='flex items-center gap-2'>
                  <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                  <p className=""><span className='text-[#18025b] font-semibold'>Quantum AI Applications</span> – Practical implementations in cryptography, optimization, finance, material science, and beyond.</p>
                </div>

              </div>
            </section>
            <section className="flex flex-col gap-4">
              <div className=' '>
                <h1 className="  text-center merry text-[#18025b]  font-semibold  lg:text-2xl   text-lg ">
                  Mission
                </h1>
              </div>
              <p className="text-justify md:text-base text-sm">
                The mission of IJQCAI is to:
              </p>
              <div className='flex flex-col gap-2  md:text-base text-sm'>
                <div className='flex items-center gap-2'>
                  <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                  <p className=""><span className='text-[#18025b] font-semibold'>Advance Scientific Knowledge</span> – Promote groundbreaking research that merges quantum computing with AI.</p>
                </div>
                <div className='flex items-center gap-2'>
                  <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                  <p className=""><span className='text-[#18025b] font-semibold'>Foster Collaboration</span> – Encourage interdisciplinary research between quantum physicists, computer scientists, and AI experts.</p>
                </div>
                <div className='flex items-center gap-2'>
                  <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                  <p className=""><span className='text-[#18025b] font-semibold'>Ensure Open Access </span> – Provide unrestricted access to cutting-edge research for global knowledge-sharing.</p>
                </div>
                <div className='flex items-center gap-2'>
                  <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                  <p className=""><span className='text-[#18025b] font-semibold'>Promote High Standards</span> – Uphold rigorous peer-review processes to ensure high-quality and impactful publications.</p>
                </div>
                <div className='flex items-center gap-2'>
                  <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                  <p className=""><span className='text-[#18025b] font-semibold'>Support Real-World Applications </span> – Bridge the gap between theoretical quantum AI research and its practical applications in various industries.</p>
                </div>

              </div>
            </section>
            <section>
              <h1 className="bg-[#18025b] h-[1px] w-full  "></h1>
            </section>
            <section className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  md:gap-10 gap-5'>
              <div className='flex flex-col gap-2 relative overflow-hidden border-l-4 border-l-[#18025b] border border-[#18025b] rounded-lg md:p-4  p-3'>
                <h2 className='text-[#18025b] font-bold merry md:text-lg underline underline-offset-2'>Editorial Excellence</h2>
                <div className='flex   gap-3'>
                  <i className="fi fi-rr-angle-double-small-right     "></i>
                  <p className="text-justify  md:text-base text-sm">"The International Journal of Quantum Computing and AI (IJQCAI) upholds the highest standards of editorial excellence through a distinguished board of experts from leading research institutions and industry organizations worldwide. Committed to rigorous peer review and scientific integrity, our editorial team ensures that every published work meets the utmost quality in quantum computing and AI research."</p>
                </div>
                <div className="bg-[#18025b] w-20 h-20 absolute -top-10 -right-10 rotate-45 flex justify-center items-center ">
                  <FaUserTie className="text-white mt-10 -rotate-45" />
                </div>
              </div>
              <div className='flex flex-col gap-2  border-l-4 relative overflow-hidden border-l-[#18025b] border border-[#18025b] rounded-lg md:p-4  p-3'>
                <h2 className='text-[#18025b] font-bold merry md:text-lg  underline underline-offset-2'>Global Reach and Impact</h2>
                <div className='flex   gap-3'>
                  <i className="fi fi-rr-angle-double-small-right     "></i>
                  <p className="text-justify  md:text-base text-sm">IJQCAI is committed to advancing research on a global scale, fostering collaboration among scientists, academicians, and industry professionals worldwide. With open-access publications and a diverse readership spanning multiple disciplines, IJQCAI ensures that groundbreaking discoveries in quantum computing and AI reach a broad audience, driving innovation and real-world applications across industries.</p>
                </div>
                <div className="bg-[#18025b] w-20 h-20 absolute -top-10 -right-10 rotate-45 flex justify-center items-center ">
                  <FaGlobe  className="text-white mt-10 -rotate-45" />
                </div>
              </div>
              <div className='flex flex-col gap-2 border-l-4 relative overflow-hidden border-l-[#18025b] border border-[#18025b] rounded-lg md:p-4  p-3'>
                <h2 className='text-[#18025b] font-bold merry md:text-lg  underline underline-offset-2' >Publication Ethics</h2>
                <div className='flex   gap-3'>
                  <i className="fi fi-rr-angle-double-small-right     "></i>
                  <p className="text-justify  md:text-base text-sm">The International Journal of Quantum Computing and AI (IJQCAI) upholds the highest ethical standards in academic publishing. We adhere to strict guidelines to ensure integrity, transparency, and fairness in all aspects of the publication process. Our policies prohibit plagiarism, data fabrication, and unethical research practices.</p>
                </div>
                <div className="bg-[#18025b] w-20 h-20 absolute -top-10 -right-10 rotate-45 flex justify-center items-center ">
                  <FaBalanceScale  className="text-white mt-10 -rotate-45" />
                </div>
              </div>
            </section>
          </section>
        </div>
      </section>
    </>
  )
}

export default About
