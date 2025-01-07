import styles from './Header.module.css'
import { useState, useTransition } from 'react'
import { HiSquare3Stack3D } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import BurgerMenu from './BurgerMenu/BurgerMenu';
import { FaInstagram, FaLinkedin, FaTelegram } from 'react-icons/fa'


const Header = () => {

  const { i18n } = useTransition()

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  }

  const [isOpen, setIsOpen] = useState(false)

  const handleToggleMenu = () => {
    setIsOpen(!isOpen)
  }
  
  if(isOpen) {
    return <BurgerMenu handleToggleMenu={handleToggleMenu} isOpen={isOpen}/>
  }

  
    return (
      <header>
        <div className={styles.container}>
          <div className={styles.headerLogo}>
            <div className={styles.logoContainer}>
              <a href="#">
                <HiSquare3Stack3D color="white" size={24} />
              </a>
              <a href="#">
                <span className={styles.logoName}>green.harvest</span>
              </a>
            </div>
            <div className={styles.headerLinks}>
              <a href="https://www.instagram.com/deniska2389/">
                <FaInstagram size={50} color="white" />
              </a>
              <a href="https://t.me/feet11">
                <FaTelegram size={50} color="white" />
              </a>
              <a href="https://www.linkedin.com/in/denis-berezniak-b3a2912b1/">
                <FaLinkedin size={50} color="white" />
              </a>
              <button onClick={() => changeLanguage('ua')} className={styles.btnChangeUkr}>Українська</button>
              <button onClick={() => changeLanguage('en')} className={styles.btnChangeEng}>English</button>
            </div>
            <button onClick={handleToggleMenu} className={styles.burgerBtn}>
              <RxHamburgerMenu size={32} />
            </button>
          </div>
        </div>
      </header>
    );
}

export default Header