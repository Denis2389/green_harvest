import styles from './BurgerMenu.module.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';

const BurgerMenu = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
      <>
        <button className={styles.burgerBtn}>
          <RxHamburgerMenu size={24} />
        </button>
        <div>

        </div>
      </>
    );
}

export default BurgerMenu