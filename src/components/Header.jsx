import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const Header = () => {
    const [isDark, setIsDark] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleDark= () => {
        setIsDark(!isDark)
    }
    const toggleMenu= () => {
        setIsMenuOpen (!isMenuOpen)
    }

    return (
        <header className="text-2xl fixed top-0 bg-white w-full backdrop-blur bg-opacity-60 p-4 flex justify-between items-center z-50">
            <h1 className="font-poppins font-semibold">Leni4c</h1>
            <div className="_header-icons flex gap-6">
                <MdOutlineDarkMode onClick={toggleDark}/>
                <MdLightMode className="hidden" onClick={toggleDark}/>
                <GiHamburgerMenu onClick={toggleMenu}/>
                <MdClose className="hidden" onClick={toggleMenu}/>
            </div>
        </header>
    );
};

export default Header;
