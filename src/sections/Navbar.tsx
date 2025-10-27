import { useState } from "react";
import { motion } from "motion/react";

const sections = ["Home", "About", "Experiences", "Projects", "Demo", "Contact", "Socials"];

function Navigation({ onLinkClick }: { onLinkClick?: () => void }) {
  const scrollToSection = (section: string) => {
    // Try different possible ID formats
    const possibleIds = [
      section.toLowerCase(),  // "about"
      section,               // "About"  
      section.toLowerCase() + '-section', // "about-section"
      section + 'Section'    // "AboutSection"
    ];
    
    let element = null;
    // Try to find the element with any of these IDs
    for (const id of possibleIds) {
      element = document.getElementById(id);
      if (element) break;
    }
    
    if (element) {
      const yOffset = -80; // adjust for sticky navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      console.warn(`Could not find section with ID: ${section}`);
      // List all elements with IDs for debugging
      const allIds = Array.from(document.querySelectorAll('[id]')).map(el => el.id);
      console.log('Available IDs:', allIds);
    }
    
    onLinkClick?.(); // close mobile menu if provided
  };

  return (
    <ul className="nav-ul">
      {sections.map((section) => (
        <li key={section} className="nav-li">
          <button
            className="nav-link"
            onClick={() => scrollToSection(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-[200] w-full backdrop-blur-lg bg-primary/80">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Moez
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 0.5 }}
        >
          <nav className="pb-5">
            <Navigation onLinkClick={() => setIsOpen(false)} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;