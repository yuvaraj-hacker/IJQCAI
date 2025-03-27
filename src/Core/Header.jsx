import Hamburger from "hamburger-react";
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropDownOpen, setAboutDropDownOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const isActive = (path) => {
    // First check for direct path match
    if (location.pathname === path) {
      return true;
    }
    // Then find the nav item with this path
    const navItem = navLinks.find(link => link.to === path);
    // If nav item has dropdown, check if current path is in the dropdown
    if (navItem && navItem.dropdown) {
      return navItem.dropdown.some(item => location.pathname === item.to);
    }
    return false;
  };
  const navLinks = [
    { to: "/", label: "Home" },
    {
      to: "/about",
      label: "About Journal",
      dropdown: [
        {
          to: "/about",
          label: "About ",
        },
        {
          to: "/aim-and-scope",
          label: "Aim and Scope",
        },
        {
          to: "/editorial-board",
          label: "Editorial Board",
        },
        {
          to: "/issues",
          label: "Issues",
        },
        {
          to: "/author-guidelines",
          label: "Author Guidelines",
        },
        {
          to: "/copyrights",
          label: "Copyrights",
        },
      ],
    },
    {
      to: " ",
      label: "Overview",
      dropdown: [
        {
          to: "/Peer-Review-Process",
          label: "Peer Review process",

        },
        {
          to: "/Publication-ethics",
          label: "Publication Ethics",

        },
        {
          to: "/abstracting-and-indexing",
          label: "Abstracting and Indexing",

        },
        {
          to: "/article-processing",
          label: "Article Processing",

        },

      ],
    },
    {
      to: "",
      label: "Policy",
      dropdown: [
        {
          to: "/plagiarism",
          label: "Plagiarism",

        },
        {
          to: "/malpractice",
          label: "Malpractice",

        },
        {
          to: "/correction",
          label: "Corretion",

        },
        {
          to: "/publication-policy",
          label: "Publication Rights",

        },

      ],
    },
    { to: "/contact", label: "Contact" },
  ];
  const toggleDropdown = (label) => {
    setAboutDropDownOpen(aboutDropDownOpen === label ? null : label);
  };
  useEffect;

  const handleMouseEnter = (category) => {
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  return (
    <>
      <section className="bg-transparent   ">
        <div className="max-w-[90rem] mx-auto md:px-5 px-3   ">
          <div className="flex items-center justify-between   lg:gap-0  gap-5  ">
            <Link to="/">
              <div className="  w-[200px] ">
                <div className="   text-center ">
                  {/* <p className="    p-4 px-7 font-bold    text-[#18025b] " >IJQCAI</p> */}
                  <img className=" py-2 font-bold  " src="/assets/Images/IJQCAI.png" alt="" />
                </div>
              </div>
            </Link>
            {/* <div className="md:block hidden xl:text-2xl text-xl   merry">
              International Journal of Quantum Computing and AI
            </div> */}
            <section className={`  relative  lg:block hidden  ${menuOpen ? " block" : " md:block hidden"}`}>
              <header className="max-w-[90rem] mx-auto    ">
                <div className="flex justify-center md:justify-between items-center py-1">
                  <nav ref={dropdownRef}>
                    <div className={`space-x-3 md:block max-w-[65rem] mx-auto    ${menuOpen ? "flex flex-col space-y-4" : " "}`}>
                      {navLinks.map((link) => (
                        <div key={link.to} className="  inline-block group"
                          // onMouseEnter={() => handleMouseEnter(link.label)}
                          // onMouseLeave={handleMouseLeave}
                          onMouseEnter={() => window.innerWidth >= 768 && handleMouseEnter(link.label)}
                          onMouseLeave={() => window.innerWidth >= 768 && handleMouseLeave()}  >
                          <Link to={link.to}
                            className={`      p-2 flex   transition-all duration-300 ease-in-out  text-white   lg:text-base md:text-sm justify-center items-center    gap-2 ${isActive(link.to) || hoveredCategory === link.label ? '' : 'border-transparent'} `}
                            onClick={(e) => {
                              if (link.dropdown) {
                                e.preventDefault();
                                setHoveredCategory((prev) => (prev === link.label ? null : link.label));
                              } else {
                                setMenuOpen(false);
                              }
                            }}
                          >
                            {link.label}
                            {link.dropdown && (
                              <i className={`fi fi-rr-caret-down flex items-center  transition-all duration-300 ease-in-out    ${ hoveredCategory === link.label ? '  text-white rotate-180 duration-100' : '  '} `}></i>
                            )}
                            {hoveredCategory === link.label && link.dropdown ? (
                              <div className="absolute -bottom-[7px]   w-4 h-4  bg-white rotate-45  z-20 "></div>
                            ) : null}
                          </Link>
                          {hoveredCategory === link.label && link.dropdown && (
                            <div className="md:absolute left-0 top--10  w-full   bg-white  transition-all duration-300 ease-in-out opacity-100 scale-y-100 origin-top   grid grid-cols-2 border border-black  p-3 z-10">
                              {link.dropdown.map((dropdownlink) => (
                                <Link key={dropdownlink.to} to={dropdownlink.to}
                                  className="block px-4 py-2   md:text-start text-center  text-[#815cbf]   underline underline-offset-2  "
                                  onClick={() => {
                                    setHoveredCategory(null);
                                    setMenuOpen(false);
                                  }}  >
                                  {dropdownlink.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </nav>
                </div>
              </header>
            </section>

            <div className="md:hidden block">
              <Hamburger toggled={menuOpen} toggle={setMenuOpen} />
            </div>
          </div>
        </div>
      </section>
      {/* <div className={` ${menuOpen ? "" : ""}`}>
        {menuOpen && (
          <div className=" flex flex-col items-center space-y-4 w-full text-center bg-white py-2 shadow-lg">
            {navLinks.map(
              (link) =>
                !link.desktopOnly && (
                  <div key={link.to} to={link.to} className="relative   ">
                    <Link onClick={() =>  link.dropdown && toggleDropdown(link.label) }
                      className="text-black " >
                      {link.label}
                    </Link>
                    {link.dropdown && aboutDropDownOpen === link.label && (
                      <div className="     mt-3   bg-white   text-black border-gray-200 z-10 ">
                        {link.dropdown.map((dropdownlink) => (
                          <Link
                            key={dropdownlink.to}
                            to={dropdownlink.to}
                            className="block px-4 py-2 text-black hover:bg-gray-100"
                          >
                            {dropdownlink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
            )}
          </div>
        )}
      </div> */}
      <section className={`  relative  md:hidden block bg-white text-[#18025b] ${menuOpen ? " block" : " md:block hidden"}`}>
        <header className="max-w-[90rem] mx-auto    ">
          <div className="flex justify-center md:justify-between items-center py-1">
            <nav ref={dropdownRef}>
              <div className={`space-x-3 md:block max-w-[65rem] mx-auto    ${menuOpen ? "flex flex-col space-y-4" : " "}`}>
                {navLinks.map((link) => (
                  <div key={link.to} className="  inline-block group"
                    // onMouseEnter={() => handleMouseEnter(link.label)}
                    // onMouseLeave={handleMouseLeave}
                    onMouseEnter={() => window.innerWidth >= 768 && handleMouseEnter(link.label)}
                    onMouseLeave={() => window.innerWidth >= 768 && handleMouseLeave()}  >
                    <Link to={link.to}
                      className={`      p-2 flex   transition-all duration-300 ease-in-out    lg:text-base md:text-sm justify-center items-center    gap-2 ${isActive(link.to) || hoveredCategory === link.label ? '' : 'border-transparent'} `}
                      onClick={(e) => {
                        if (link.dropdown) {
                          e.preventDefault();
                          setHoveredCategory((prev) => (prev === link.label ? null : link.label));
                        } else {
                          setMenuOpen(false);
                        }
                      }}  >
                      {link.label}
                      {link.dropdown && (
                        <i className={`fi fi-rr-caret-down flex items-center  transition-all duration-300 ease-in-out    ${isActive(link.to) || hoveredCategory === link.label ? '  rotate-180 duration-100' : ' '} `}></i>
                      )}

                    </Link>
                    {hoveredCategory === link.label && link.dropdown && (
                      <div className="md:absolute left-0 top-full   w-full   border-[#815cbf]   transition-all duration-300 ease-in-out opacity-100 scale-y-100 origin-top   grid grid-cols-1 border   p-3 z-10">
                        {link.dropdown.map((dropdownlink) => (
                          <Link key={dropdownlink.to} to={dropdownlink.to}
                            className="block px-4 py-2   md:text-start text-center text-[#815cbf]     underline underline-offset-2  "
                            onClick={() => {
                              setHoveredCategory(null);
                              setMenuOpen(false);
                            }}  >
                            {dropdownlink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </nav>
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
