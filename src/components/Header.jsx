import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import AvatarDropdown from './Avatar';

const Header = () => {
  
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state
  const [name , setName] = useState("")

  
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const checkLogin = () =>{
    if(sessionStorage.getItem('isLoggedIn')=='true'){
      setIsAuthenticated(true);
      setName( JSON.parse(sessionStorage.getItem('User')).name)
    }
  }

  useEffect(() => {
    checkLogin()
  }, [])


  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
        }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <Link className="block w-[12rem] xl:mr-8" to="/">
          {/* <img src={brainwave} width={190} height={40} alt="Brainwave" /> */}
        </Link>

        <nav
          className={`${openNavigation ? "flex" : "hidden"
            } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        {!isAuthenticated ? (
          <Button className="hidden lg:flex">
           <Link to="/signin">Sign in</Link> 
          </Button>
        ) : (
          <AvatarDropdown setIsAuthenticated={setIsAuthenticated} Name={name} />
        )}

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;