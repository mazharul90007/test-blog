import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaBlog, FaEnvelope, FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
    const { darkMode, setDarkMode } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    
    return (
        <nav className="navbar bg-teal-100 shadow px-6 py-4">
            {/* Left Side: Logo */}
            <div className="flex-1">
                <Link to="/" className="text-2xl font-bold text-amber-700 flex items-center gap-2">
                    <span>My Blog</span>
                </Link>
            </div>

            {/* Right Side: Navigation Links */}
            <div className="hidden lg:flex space-x-6">
                <Link to="/" className="flex items-center gap-2 hover:text-primary">
                    Home
                </Link>
                <Link to="/about" className="flex items-center gap-2 hover:text-primary">
                    About
                </Link>
                <Link to="/blog" className="flex items-center gap-2 hover:text-primary">
                    Blog
                </Link>
                <Link to="/contact" className="flex items-center gap-2 hover:text-primary">
                    Contact
                </Link>
            </div>

            {/* Dark Mode Toggle */}
            <button onClick={() => setDarkMode(!darkMode)} className={`text-xl border p-2 ml-2 rounded-full shadow hover:scale-110 transition-transform transform ${darkMode ? 'bg-white' : 'text-white bg-black'}`}>
                {darkMode ? <FaMoon className="text-black" /> : <FaSun />}
            </button>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="btn btn-ghost btn-circle lg:hidden ml-4">
                {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Mobile Menu (Drawer) */}
            {menuOpen && (
                <div className="absolute top-16 right-4 bg-base-100 shadow-xl p-4 rounded-lg flex flex-col space-y-4 lg:hidden">
                    <Link to="/" className="flex items-center gap-2 hover:text-primary">
                        Home
                    </Link>
                    <Link to="/about" className="flex items-center gap-2 hover:text-primary">
                        About
                    </Link>
                    <Link to="/blog" className="flex items-center gap-2 hover:text-primary">
                        Blog
                    </Link>
                    <Link to="/contact" className="flex items-center gap-2 hover:text-primary">
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
