import styles from './BurgerMenu.module.css'
import { useState } from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const BurgerMenu = () => {

    const [isOpen, setIsOpen] = useState(false);
    
    // const handleOpenModal = () => {
    //   setIsOpen(true)
    // }

    const handleCloseModal = () => {
      setIsOpen(false)
    }

    return (
      <>
        {isOpen && (
          <div className={styles.burgerMenu}>
            <button onClick={handleCloseModal}>
              <IoMdClose />
            </button>
            <h2>Contacts</h2>
            <p>you can contact me here</p>
            <a href="https://www.instagram.com/deniska2389/">
              <FaInstagram />
            </a>
            <a href="https://t.me/feet11">
              <FaTelegram />
            </a>
            <a href="https://www.linkedin.com/in/denis-berezniak-b3a2912b1/">
              <FaLinkedin />
            </a>
            <p>And check my Github here👇</p>
            <a href="https://github.com/Denis2389">
              <FaGithub />
            </a>
          </div>
        )}
      </>
    );
}

export default BurgerMenu