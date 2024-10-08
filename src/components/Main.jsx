import leni4c from "../assets/images/leni4c.jpg";
import Projects from "./Projects";
import Skills from "./Skills";

const Main = () => {
    return (
        <main className="pt-20 p-5 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 transition-colors duration-300">
            {/* Profile Image */}
            <img
                src={leni4c}
                alt="leni4c"
                className="w-40 h-40 rounded-full object-cover object-bottom transition-transform transform hover:scale-105"
            />
            {/* Main Heading */}
            <h1 className="my-6 text-xl font-semibold">
                Hi 👋, I'm Leni4c - Web Developer 💻
            </h1>
            {/* Main Paragraph */}
            <p className="my-8 text-gray-500 dark:text-gray-400 transition-colors duration-300">
                I’m passionate about turning ideas into digital realities!
                Whether it's building something from scratch or enhancing
                existing web experiences, I thrive on crafting websites and apps
                that not only look great but perform even better.
            </p>
            {/* Call to Action Button */}
            <a
                href="#contact"
                className="bg-black dark:bg-white text-white dark:text-black block text-center rounded py-3 font-bold mb-3 transition-transform transform hover:scale-105 hover:shadow-lg"
            >
                Let's talk
            </a>
            {/* Status Indicator */}
            <div className="main-text text-center">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse-glow inline-block mx-2"></span>
                <span className="transition-opacity hover:opacity-80">
                    Open for opportunities
                </span>
            </div>
            {/* Projects and Skills Sections */}
            <Projects />
            <Skills />
        </main>
    );
};

export default Main;

// import leni4c from "../assets/images/leni4c.jpg";
// import Projects from "./Projects";
// import Skills from "./Skills";

// const Main = () => {
//     return (
//         <main className="mt-20 p-5">
//             <img
//                 src={leni4c}
//                 alt="leni4c"
//                 className="w-40 h-40 rounded-full object-cover object-bottom"
//             />
//             <h1 className="my-6 text-xl font-semibold">
//                 Hi 👋, I'm Leni4c - Web Developer 💻
//             </h1>
//             <p className="my-8 text-gray-500">
//                 I’m passionate about turning ideas into digital realities!
//                 Whether it's building something from scratch or enhancing
//                 existing web experiences, I thrive on crafting websites and apps
//                 that not only look great but perform even better.
//             </p>
//             <a
//                 href="#"
//                 className="bg-black text-white block text-center rounded py-3 font-bold mb-3"
//             >
//                 Let's talk
//             </a>
//             <div className="main-text text-center">
//                 <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse-glow inline-block mx-2"></span>
//                 <span> Open for opportunities</span>
//             </div>
//             <Projects />
//             <Skills />
//         </main>
//     );
// };

// export default Main;
