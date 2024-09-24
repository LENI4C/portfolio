import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white p-5">
            <h3 className="text-2xl font-semibold">
                {" "}
                Let's talk about your project :{" "}
            </h3>
            <a href="mailto:leni4c.dev@gmail.com" className="my-8">leni4c.dev@gmail.com</a>
            <div className="social-links text-xl flex gap-3 my-3">
                <FaLinkedinIn />
                <FaGithubAlt />
                <FaInstagram />
                <FaWhatsapp />
                <FaXTwitter />
            </div>
        </footer>
    );
};

export default Footer;
