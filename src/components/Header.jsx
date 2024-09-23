import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";



const Header = () => {
    return (
        <header className="fixed top-0 bg-white w-full backdrop-blur bg-opacity-60 p-4 flex">
            <h1 className="text-lg font-poppins">Leni4c</h1>
            <GiHamburgerMenu />
            <MdClose />
            <MdOutlineDarkMode />
            <MdLightMode />

        </header>
    );
};

export default Header;
