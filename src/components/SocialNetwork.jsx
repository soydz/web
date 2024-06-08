import { FaGithub, FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

export function SocialNetwork() {
    return (
        <div className="social_network">
            <div>
                <a href="https://github.com/soydz" target="_blanck">
                    <FaGithub className="icon"/>
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/dubanzuluaga/" target="_black">
                    <FaLinkedinIn />
                </a>
            </div>
            <div>
                <a href="https://twitter.com/soydz_/" target="_black">
                    <FaXTwitter />
                </a>
            </div>
            <div>
                <a href="https://www.instagram.com/soydz_/" target="_black">
                    <FaInstagram />
                </a>
            </div>
        </div>


    )
}