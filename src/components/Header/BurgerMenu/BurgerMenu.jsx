import styles from './BurgerMenu.module.css'
import { FaInstagram, FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const BurgerMenu = ({ handleToggleMenu, isOpen }) => {
  
    return (
          <div className={`${styles.burgerMenu} ${isOpen ? styles.open : ""}`}>
            <button onClick={handleToggleMenu}>
              <IoMdClose size={40} color='white'/>
            </button>
            <h2>Contacts</h2>
            <p>you can contact me here:</p>
            <div className={styles.socialIcons}>
              <a href="https://www.instagram.com/deniska2389/">
                <FaInstagram size={50} color="white" />
              </a>
              <a href="https://t.me/feet11">
                <FaTelegram size={50} color="white" />
              </a>
              <a href="https://www.linkedin.com/in/denis-berezniak-b3a2912b1/">
                <FaLinkedin size={50} color="white" />
              </a>
              <p className={styles.gText}>And check my Github here&nbsp;👇</p>
              <a href="https://github.com/Denis2389">
                <FaGithub size={50} color="white" style={{ margin: 'auto', marginLeft: '80px'}}/>
              </a>
            </div>
          </div>
    );
}

export default BurgerMenu