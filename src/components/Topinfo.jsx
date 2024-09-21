import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Topinfo = () => {
    return (
        <>
            <section className="info-card">
                <div className="top-sec">
                    <img src="" alt="" />
                    <div className="top-sec-text">
                        <h2>Hi, I'm Leni4c.</h2>
                        <h3>Frontend Developer</h3>
                    </div>
                </div>
                <div className="social-links">
                    <FaLinkedinIn />
                    <FaGithubAlt />
                    <FaInstagram />
                    <FaWhatsapp />
                    <FaXTwitter />
                </div>
                <div className="top-sec-info">
                    <p> Passionate about web development.</p>
                    <span>I enjoy learning new things and try to overcome new challenges while analyzing how I improved through them.</span>
                </div>
            </section>
        </>
    );
};

export default Topinfo;
