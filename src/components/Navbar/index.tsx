import { useState } from 'react';
import styles from './Navbar.module.css';
import ThemeToggle from '../ThemeToggle';
import MenuToggle from '../MenuToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between items-center p-4">
        <a className="cursor-pointer">
          <p className="hover:text-primary-500">
            @pierrezhou/<span className={styles.blinkingCursor}>_</span>
          </p>
        </a>

        <MenuToggle
          onClick={toggleMenu}
          isActive={isMenuOpen}
          className="md:hidden"
        />

        <div
          className={`${isMenuOpen ? 'hidden' : ''} w-full md:block md:w-auto`}
        >
          <ul className="flex flex-col p-4 mt-4 md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li className="mb-4 md:mb-0">
              <a
                href="#"
                className="block py-2 px-3 hover:text-primary-500 md:p-0"
              >
                Projets
              </a>
            </li>
            <li className="mb-4 md:mb-0">
              <a
                href="#"
                className="block py-2 px-3 hover:text-primary-500 md:p-0"
              >
                A Propos
              </a>
            </li>
            <li className="mb-4 md:mb-0">
              <a
                href="#"
                className="block py-2 px-3 hover:text-primary-500 md:p-0"
              >
                Contact
              </a>
            </li>
            <li className="mb-4 md:mb-0">
              <ThemeToggle className="py-2 px-3 hover:text-primary-500 inline-flex items-center justify-center md:p-0" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
