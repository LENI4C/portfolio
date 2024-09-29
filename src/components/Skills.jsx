import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaWordpress } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";

const Skills = () => {
    return (
        <section className="my-8" id="skills">
            <h3 className="text-xl font-bold mt-4 mb-8">My Skills</h3>
            <div className="_skill-icons flex text-5xl justify-between cursor-pointer">
                <FaHtml5 
                    className="text-[hsl(13,77%,52%)] transition duration-300 ease-in-out hover:scale-110 hover:filter hover:drop-shadow-[0_0_10px_hsl(13,77%,52%)]"
                />
                <FaCss3Alt 
                    className="text-[hsl(222,88%,55%)] transition duration-300 ease-in-out hover:scale-110 hover:filter hover:drop-shadow-[0_0_10px_hsl(222,88%,55%)]"
                />
                <RiJavascriptFill 
                    className="text-[hsl(53,93%,54%)] transition duration-300 ease-in-out hover:scale-110 hover:filter hover:drop-shadow-[0_0_10px_hsl(53,93%,54%)]"
                />
                <FaReact 
                    className="text-[hsl(193,95%,68%)] transition duration-300 ease-in-out hover:scale-110 hover:filter hover:drop-shadow-[0_0_10px_hsl(193,95%,68%)]"
                />
                <RiTailwindCssFill 
                    className="text-[hsl(198,93%,60%)] transition duration-300 ease-in-out hover:scale-110 hover:filter hover:drop-shadow-[0_0_10px_hsl(198,93%,60%)]"
                />
                <FaWordpress 
                    className="text-[hsl(199,65%,37%)] transition duration-300 ease-in-out hover:scale-110 hover:filter hover:drop-shadow-[0_0_10px_hsl(199,65%,37%)]"
                />
                <FaGitAlt 
                    className="text-[hsl(9,86%,57%)] transition duration-300 ease-in-out hover:scale-110 hover:filter hover:drop-shadow-[0_0_10px_hsl(9,86%,57%)]"
                />
                <IoLogoFirebase 
                    className="text-[hsl(45,100%,58%)] transition duration-300 ease-in-out hover:scale-110 hover:filter hover:drop-shadow-[0_0_10px_hsl(45,100%,58%)]"
                />
            </div>
        </section>
    );
}

export default Skills;
