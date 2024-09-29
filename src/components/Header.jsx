import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const Header = () => {
    const [isDark, setIsDark] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleDark = () => {
        setIsDark(!isDark);
    };

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
            document.body.classList.add("bg-gray-900");
        } else {
            document.documentElement.classList.remove("dark");
            document.body.classList.remove("bg-gray-900");
        }
    }, [isDark]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* Header */}
            <header className="text-2xl fixed top-0 w-full bg-white dark:bg-gray-800 backdrop-blur bg-opacity-60 p-4 flex justify-between items-center z-50">
                <h1 className="font-poppins font-semibold text-black cursor-pointer dark:text-white" onClick={() => {
                    window.location.href = "/"
                }}>
                    Leni4c
                </h1>
                <div className="_header-icons flex gap-6 items-center">
                    {/* Dark Mode Toggle */}
                    {isDark ? (
                        <MdLightMode
                            onClick={toggleDark}
                            className="cursor-pointer text-black dark:text-white"
                        />
                    ) : (
                        <MdOutlineDarkMode
                            onClick={toggleDark}
                            className="cursor-pointer text-black dark:text-white"
                        />
                    )}

                    {/* Menu Toggle */}
                    {isMenuOpen ? (
                        <MdClose
                            onClick={toggleMenu}
                            className="cursor-pointer text-black dark:text-white"
                        />
                    ) : (
                        <GiHamburgerMenu
                            onClick={toggleMenu}
                            className="cursor-pointer text-black dark:text-white"
                        />
                    )}
                </div>
            </header>

            {/* Sidebar */}
            <aside
                className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 z-40 ${
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Sidebar Content */}
                <div className="p-4">
                    
                <ul className="mt-14 space-y-4">
  <li className="text-black dark:text-white">
    <a
      href="/"
      className="transition duration-300 ease-in-out hover:text-blue-600 dark:hover:text-blue-400"
    >
      Home
    </a>
  </li>
  <li className="text-black dark:text-white">
    <a
      href="#projects"
      className="transition duration-300 ease-in-out hover:text-blue-600 dark:hover:text-blue-400"
    >
      Projects
    </a>
  </li>
  <li className="text-black dark:text-white">
    <a
      href="#skills"
      className="transition duration-300 ease-in-out hover:text-blue-600 dark:hover:text-blue-400"
    >
      Skills
    </a>
  </li>
  <li className="text-black dark:text-white">
    <a
      href="#contact"
      className="transition duration-300 ease-in-out hover:text-blue-600 dark:hover:text-blue-400"
    >
      Contact
    </a>
  </li>
</ul>
                </div>
            </aside>

            {/* Overlay */}
            {isMenuOpen && (
                <div
                    onClick={toggleMenu}
                    className="fixed inset-0 bg-black bg-opacity-50 z-30"
                ></div>
            )}
        </>
    );
};

export default Header;


// import { useState, useEffect } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { MdClose } from "react-icons/md";
// import { MdOutlineDarkMode } from "react-icons/md";
// import { MdLightMode } from "react-icons/md";

// const Header = () => {
//   const [isDark, setIsDark] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Toggle dark mode
//   const toggleDark = () => {
//     setIsDark(!isDark);
//   };

//   useEffect(() => {
//     if (isDark) {
//       document.body.classList.add("dark-mode"); // Add dark mode class to the body
//     } else {
//       document.body.classList.remove("dark-mode"); // Remove dark mode class from the body
//     }
//   }, [isDark]);

//   // Toggle menu
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="text-2xl fixed top-0 bg-white w-full backdrop-blur bg-opacity-60 p-4 flex justify-between items-center z-50">
//       <h1 className="font-poppins font-semibold">Leni4c</h1>
//       <div className="_header-icons flex gap-6 items-center">
//         {isDark ? (
//           <MdLightMode onClick={toggleDark} className="cursor-pointer" />
//         ) : (
//           <MdOutlineDarkMode onClick={toggleDark} className="cursor-pointer" />
//         )}
//         {isMenuOpen ? (
//           <MdClose onClick={toggleMenu} className="cursor-pointer" />
//         ) : (
//           <GiHamburgerMenu onClick={toggleMenu} className="cursor-pointer" />
//         )}
//       </div>

//       {/* Sidebar Menu */}
//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white p-4 transform transition-transform duration-300 ${
//           isMenuOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <ul className="space-y-4">
//           <li>Home</li>
//           <li>About</li>
//           <li>Services</li>
//           <li>Contact</li>
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Header;
