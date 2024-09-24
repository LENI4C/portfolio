import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const Header = () => {
    return (
        <header className="text-lg fixed top-0 bg-white w-full backdrop-blur bg-opacity-60 p-4 flex justify-between align-middle z-50">
            <h1 className="font-poppins font-semibold">Leni4c</h1>
            <GiHamburgerMenu />
            <MdClose />
            <MdOutlineDarkMode />
            <MdLightMode />
        </header>
    );
};

export default Header;
