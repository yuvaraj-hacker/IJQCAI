import React from "react";
import { FaDatabase, FaUnlockAlt, FaUserCheck } from "react-icons/fa";
import { Link, useOutletContext } from "react-router-dom";
function Home() {
  const { headerHeight } = useOutletContext();
  return (
    <>
      <section className=" flex flex-col gap-5">
        <div className="  relative">
          <section className="flex flex-col md:gap-7 gap-5">
            <div className="md:gap-4 flex flex-col  ">
              <section className="relative bg-[url('/assets/Images/ai.jpg')] bg-no-repeat bg-cover bg-center">
                {/* Overlay (Only Covers Background) */}
                <div className="absolute inset-0 bg-[#18025b] md:opacity-50 opacity-60 z-0"></div>
                {/* Content (Ensure It Stays Above Overlay) */}
                <section className="relative z-10 flex justify-between flex-wrap md:flex-nowrap gap-5 max-w-[90rem] md:px-5 px-3 mx-auto">
                  {/* <img className="mx-auto w-96" src="/assets/Images/ai.jpg" alt="" /> */}
                  <div className="flex flex-col justify-evenly md:gap-5 gap-3 text-white lg:py-20 md:py-10 md:pt-20 pt-28 py-10 lg:pt-36">
                    <p className="text-justify md:text-3xl text-xl underline underline-offset-4">
                      International Journal of Quantum Computing and AI
                    </p>
                    <p className="text-justify md:text-base text-sm">
                      The International Journal of Quantum Computing and AI is a scholarly, peer-reviewed journal that focuses on cutting-edge research in quantum computing and artificial intelligence. It aims to provide a platform for researchers, academicians, and industry experts to publish innovative studies, theories, and applications that bridge the gap between quantum computing and AI. The journal covers topics such as quantum machine learning, quantum algorithms, AI-driven quantum computing applications, quantum neural networks, and the impact of quantum advancements on artificial intelligence.
                    </p>
                    <a href="https://IJQCAI.com/IJQCAI/index.php/IJQCAI/about/submissions" target="_blank" rel="noopener noreferrer" className="w-fit md:mx-0 mx-auto">
                      <button className="md:p-3 p-2 rounded-full bg-white text-[#18025b]  border border-[#18025b] duration-300 cursor-pointer w-[170px]">
                        Submit Your Paper
                      </button>
                    </a>
                  </div>
                </section>
              </section>

              <section className=" ">
                <div className="max-w-[90rem] md:px-5 px-3 mx-auto py-4 flex flex-col gap-4 ">
                  <div className=' '>
                    <h1 className="   text-center merry   font-semibold  lg:text-2xl   text-lg ">
                      About
                    </h1>
                  </div>
                  <p className="text-justify md:text-base text-sm">
                    The International Journal of Quantum Computing and AI (IJQCAI) is a peer-reviewed, open-access journal
                    focused on cutting-edge research in robotics, automation, and
                    intelligent systems. We publish innovative studies in AI-driven
                    robotics, industrial automation, human-robot interaction, and
                    more, fostering collaboration between academia and industry. IJQCAI aims to foster collaboration between researchers, academicians, and industry professionals by providing a platform for sharing innovative ideas, groundbreaking research, and technological advancements. We welcome original research articles, review papers, and case studies that contribute to the evolving landscape of robotics and automation.
                  </p>

                  <Link to='/about' className="w-fit md:mx-0 mx-auto">
                    <button className="md:p-3 p-2   w-[170px]      rounded-full bg-white      border border-[#18025b] text-[#18025b] duration-300 cursor-pointer">
                      Read More
                    </button>
                  </Link>
                </div>
              </section>
            </div>
            <section className="flex flex-col gap-4 max-w-[90rem] md:px-5 px-3 mx-auto  ">
              <div className=' '>
                <h1 className="    text-center merry text-[#18025b]  font-semibold  lg:text-2xl   text-lg ">
                  Journal  overview
                </h1>
              </div>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 grid-cols-1  h-full ">
                <div className="h-full">
                  <Link to='/about'>
                    <div className=" border-l-4 border-l-[#18025b] border h-full border-[#18025b] rounded-lg rounded-tr-none  overflow-hidden hover:scale-95 duration-300  relative  flex flex-col justify-between ">
                      <div className=" p-4 flex flex-col gap-2">
                        <h2 className="text-[#18025b] font-bold merry md:text-lg underline underline-offset-2">Open Access</h2>
                        <div className="flex gap-4  ">
                          <i class="fi fi-ss-dot-circle flex  mt-1 text-[#18025b]"></i>
                          <p className=" md:text-base text-sm">The International Journal of Quantum Computing and AI (IJQCAI) is a fully open-access journal, providing unrestricted access to cutting-edge research in quantum computing and AI.  </p>
                        </div>
                      </div>

                      <div className="bg-[#18025b] md:w-16 md:h-16 w-14 h-14 absolute md:top-1 top-0  -right-10 rotate-40  flex justify-center items-center ">
                        <FaUnlockAlt className="text-white mt-6  rotate-320 md:text-xl text-sm relative right-4  " />
                      </div>
                    </div>
                  </Link>

                </div>
                <div className="h-full">
                  <Link to='/Peer-Review-Process'>
                    <div className=" border-l-4 border-l-[#18025b]  h-full border border-[#18025b] rounded-lg rounded-tr-none  overflow-hidden  hover:scale-95 duration-300  relative  flex flex-col justify-between ">
                      <div className=" p-4 flex flex-col gap-2">
                        <h2 className="text-[#18025b] font-bold merry md:text-lg underline underline-offset-2">Peer Review</h2>
                        <div className="flex gap-4  ">
                          <i class="fi fi-ss-dot-circle flex  mt-1 text-[#18025b]"></i>
                          <p className=" md:text-base text-sm">IJQCAI ensures academic excellence through a rigorous double-blind peer-review process, evaluating originality, relevance, and quality to publish high-impact research in quantum computing and AI. </p>
                        </div>
                      </div>
                      <div className="bg-[#18025b] md:w-16 md:h-16 w-14 h-14 absolute md:top-1 top-0  -right-10 rotate-40  flex justify-center items-center ">
                        <FaUserCheck className="text-white mt-6  rotate-320 md:text-xl  text-sm relative right-4  " />
                      </div>
                      {/* <div class="ribbon ribbon-top-right"> <span className="flex items-center justify-center gap-2">
                        <FaUserCheck className="text-white text-xl relative   right-4" />
                      </span></div> */}
                    </div>
                  </Link>
                </div>
                <div className="h-full">
                  <Link to='/abstracting-and-indexing'>
                    <div className=" border-l-4 border-l-[#18025b] border h-full border-[#18025b] rounded-lg rounded-tr-none  overflow-hidden  hover:scale-95 duration-300  relative  flex flex-col justify-between ">
                      <div className=" p-4 flex flex-col gap-2">
                        <h2 className="text-[#18025b] font-bold merry md:text-lg underline underline-offset-2">Indexing</h2>
                        <div className="flex gap-4  ">
                          <i class="fi fi-ss-dot-circle flex  mt-1 text-[#18025b]"></i>
                          <p className=" md:text-base text-sm">To maximize the visibility and impact of published research, IJQCAI is committed to indexing in major academic and research databases. The journal aims to be listed in leading repositories such as Google Scholar, IEEE Xplore, and DBLP. </p>
                        </div>
                      </div>

                      <div className="bg-[#18025b] md:w-16 md:h-16 w-14 h-14 absolute md:top-1 top-0  -right-10 rotate-40  flex justify-center items-center ">
                        <FaDatabase className="text-white mt-6  rotate-320 md:text-xl  text-sm relative right-4  " />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <section className="flex flex-col gap-4 md:mt-3 mt-1 ">
                <div className=' '>
                  <h1 className="  text-center merry  text-[#04004a] font-semibold  lg:text-2xl   text-lg ">
                    The Journal covers following areas
                  </h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3  md:grid-cols-3 md:gap-3 gap-2 ">
                  {[
                    "Quantum Machine Learning", "Quantum Algorithms", "Quantum Neural Networks", "Hybrid Quantum-Classical AI", "Quantum Error Correction", "Quantum Optimization", "Quantum Cybersecurity", "Quantum Reinforcement Learning", "Quantum Humanoid Robots", "Swarm Robotics", "Soft Robotics", "Autonomous Navigation", "Cognitive Robotics", "Human-Robot Collaboration", "Multi-Robot Systems", "Robot Perception", "Brain-Machine Interfaces", "Bio-Inspired Robotics", "Self-Healing Robots", "Exoskeletons", "Telerobotics", "Autonomous Drones", "Medical Robotics", "Agricultural Robotics", "Underwater Robotics", "Smart Manufacturing", "Industry 4.0", "Automated Quality Control", "Digital Twins", "Collaborative Robotics", "Predictive Maintenance", "Real-Time Process Control", "Autonomous Warehousing", "Cyber-Physical Systems", "Space Robotics", "Bipedal & Quadrupedal Locomotion", "AI-Driven Robotics Simulation", "Machine Learning in Robotics", "Digital Human Modeling", "Gesture & Voice Recognition", "Multi-Sensor Data Fusion", "Edge Computing for Robots", "Advanced Control Algorithms", "Sensor Fusion", "Feedback Control", "PID & Adaptive Controllers", "Real-Time Motion Planning", "Embedded Systems", "Actuator & Motor Control", "Wireless Sensor Networks", "Mechatronic Systems", "Signal Processing", "Neuromorphic Computing", "Social & Emotional AI Robots", "Disaster Response Robotics", "Ethics & Security in Robotics", "Wearable Robotics", "Human-Centered AI", "Reinforcement Learning in Robots", "AI in Supply Chains"
                  ].map((topics, index) => (
                    <div key={index} className="flex items-center gap-2 mb-1">
                      <i class="fi fi-ss-dot-circle flex items-center text-[#18025b]"></i>
                      <h1 className="md:text-base text-sm">{topics}</h1>
                    </div>
                  ))}
                </div>
              </section>
            </section>
          </section>
        </div>
        {/* <div class="grid grid-cols-[auto_1fr] gap-x-2 gap-y-2 items-start">
          <span class="font-semibold text-brown-600">Address</span>
          <span>: 4587 Scenic Vista Dr Folsom, CA 95630</span>

          <span class="font-semibold text-brown-600">Email</span>
          <span>: info@oakseenet</span>

          <span class="font-semibold text-brown-600">Phone</span>
          <span>: 804-349-4836</span>
        </div> */}
        <section className="bg-[#815cbf] text-white  py-4 md:px-5 px-3">
          <div className="text-center flex flex-col gap-2 xl:w-1/2 mx-auto ">
            <p className="  md:text-base text-sm text-justify">
              We publish original research articles, review articles and technical notes. The journal reviews papers within two weeks of submission and publishes accepted articles on the internet immediately upon receiving the final versions.
              <span className="  font-bold">   Our fast reviewing process is our strength. </span>
            </p>
            <div className="flex items-center gap-4">
              <i className="fi fi-tr-calendar text-white "></i>
              <h1 className="bg-[#18025b] text-white py-2 font-semibold md:text-base text-sm   text-center mx-auto p-3">
                Launch of Next Issue: 28
                <sup>th</sup> Oct 2025
              </h1>
            </div>
            <h1 className="">With Warm Regards,</h1>
            <h1 className="font-semibold  md:text-base text-sm">
              Editor-in-chief
            </h1>
            <h1 className="font-semibold md:text-base text-sm">IJQCAI</h1>
          </div>
        </section>
      </section>
    </>
  );
}
export default Home;
