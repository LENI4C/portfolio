import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        // 
        <footer className="bg-slate-900 text-white p-10 text-center rounded-t-3xl">
            <h3 className="text-2xl font-semibold">
                Let's talk about your project :
            </h3>
            <a href="mailto:leni4c.dev@gmail.com" className="inline-block mt-5">
                leni4c.dev@gmail.com
            </a>
            <div className="social-links text-xl flex gap-3 mt-14 justify-center cursor-pointer">
                <FaLinkedinIn onClick={() => {
                    window.location.href = "https://www.linkedin.com/in/leni4c"
                }}/>
                <FaGithubAlt onClick={() => {
                    window.location.href = "https://www.github.com/leni4c"
                }}/>
                <FaInstagram onClick={() => {
                    window.location.href = "https://www.instagram.com/_leni4c_"
                }}/>
                <FaWhatsapp onClick={() => {
                    window.location.href = "https://wa.me/message/COZXHTCTUK5XB1"
                }}/>
                <FaXTwitter onClick={() => {
                    window.location.href = "https://www.x.com/leni4c"
                }}/>
            </div>
        </footer>
    );
};

export default Footer;
