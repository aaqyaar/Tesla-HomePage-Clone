import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { Fade } from "react-reveal";
function Header() {
  const navItems = [
    { model: "Model S" },
    { model: "Model 3" },
    { model: "Model X" },
    { model: "Model Y" },
    { model: "Solar Roof" },
    { model: "Solar Panels" },
  ];
  const [burger, setBurger] = useState(false);
  return (
    <>
      <div className="fixed left-0 right-0">
        <div className="flex justify-between mx-14 my-4">
          <div>
            <a href="#">
              <img src="/images/logo.svg" className="min-h-[60%]" />
            </a>
          </div>
          <div className="hidden lg:block">
            {navItems.map((nav, index) => (
              <a href="#" key={index} className="px-4">
                {nav.model}
              </a>
            ))}
          </div>
          <div className="flex items-center">
            <a href="#">Shop</a>
            <a href="#" className="pl-4">
              Account
            </a>

            <div className="ml-6">
              <h1 className="cursor-pointer " onClick={() => setBurger(true)}>
                Menu
              </h1>
            </div>
          </div>
        </div>
      </div>
      {burger && (
        <Fade right>
          <section
            id="mobileNav"
            className="fixed right-0 bg-white z-10 h-screen w-[300px] shadow-lg"
          >
            <div className="right-0 absolute mx-4 my-4">
              <MdOutlineClose
                className="text-black text-3xl cursor-pointer"
                onClick={() => setBurger(false)}
              />
            </div>

            {/* mobile nav */}
            <div id="mobile-nav" className="flex flex-col justify-start mt-12">
              {navItems.map((navItem, index) => (
                <li key={index} className="liStyle">
                  <a href="#">{navItem.model}</a>
                </li>
              ))}
              <li className="liStyle">
                <a href="#">Existing Inventory</a>
              </li>
              <li className="liStyle">
                <a href="#">Used Inventory</a>
              </li>
              <li className="liStyle">
                <a href="#">Trade-in</a>
              </li>
              <li className="liStyle">
                <a href="#">Cybertruck</a>
              </li>
              <li className="liStyle">
                <a href="#">Roadaster</a>
              </li>
            </div>
          </section>
        </Fade>
      )}
    </>
  );
}

export default Header;
