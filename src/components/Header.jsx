import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { navLinks } from "../contents/contents";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [active, setActive] = useState(0);
  const [toogle, setToogle] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  const handleMobileClick = (id, index) => {
    setActive(index);
    setToogle(false);
    if (id === 'blog') {
      window.open('https://blogs.ahmadwebcraft.com/', '_blank');
    } else {
      setActive(index);
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setPrevScrollY(scrollY);
      setScrollY(window.scrollY);
      setIsSticky(scrollY > 800 && scrollY > prevScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY, prevScrollY]);

  const handleNavLinkClick = (id, index) => {
    if (id === 'blog') {
      window.open('https://blogs.ahmadwebcraft.com/', '_blank');
    } else {
      setActive(index);
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
  

  return (
    <div
      className={`flex flex-wrap bg-header-gradient w-full px-5 py-2 items-center justify-between   ${
        isSticky ? "sticky" : ""
      }`}
    >
      {/*logo  */}
      <div className="">
        <img src={logo} alt="logo" className="w-[110px]" />
      </div>

      {/* Desktop Menu Bar */}
      <div className="">
        <ul className="list-none sm:flex hidden justify-end items-center">
          {navLinks.map((nav, index) => (
            <motion.li
              key={nav.id}
              whileHover={{ scale: 1.1, fontWeight: 600 }}
              className={`font-poppins font-normal text-white cursor-pointer ${
                active === index && "active-nav"
              } ${index == navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            >
              <a  onClick={() => handleNavLinkClick(nav.id, index)}>
                {nav.title}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="text-white">
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 20px rgba(0, 158, 191, 1.0)",
          }}
          className="button"
          
        >
          <a href="#contact">Lets Connect</a> 
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <div className="sm:hidden flex justify-end items-center">
        {!toogle ? (
          <MenuIcon
            sx={{ width: "30px", height: "30px", color: "white" }}
            className="icon-hover"
            onClick={() => setToogle((prev) => !prev)}
          />
        ) : (
          <CloseIcon
            sx={{ width: "30px", height: "30px", color: "white" }}
            className="icon-hover"
            onClick={() => setToogle((prev) => !prev)}
          />
        )}
        <div
          className={`${
            toogle ? "flex" : "hidden"
          } p-6 bg-background-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                key={nav.id}
                className={`font-poppins font-normal ${
                  active === index && "active-nav-mobile"
                } text-white cursor-pointer text-[16px] mb-4`}
              >
                <a  onClick={() => handleMobileClick(nav.id, index)}>
                  {nav.title}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
