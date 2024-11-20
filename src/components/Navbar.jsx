import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex items-center">
                <span className="text-4xl font-bold">JD</span>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-3xl">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="#">
                    <FaEnvelope />
                </a>
            </div>
        </nav>
    )
}

export default Navbar
