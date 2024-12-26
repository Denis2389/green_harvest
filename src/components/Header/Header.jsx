import styles from './Header.module.css'
import { HiSquare3Stack3D } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";


const Header = () => {
    return (
      <header>
        <div className={styles.container}>
          <div className={styles.headerLogo}>
            <div className={styles.logoContainer}>
            <a href="#">
              <HiSquare3Stack3D color='white' size={24} />
            </a>
            <span className={styles.logoName}>green.harvest</span>
            </div>
            <nav>
                <div className={styles.burgerMenu}>
                    <span></span>
                </div>
            </nav>
            {/* <button className={styles.burgerBtn}><RxHamburgerMenu size={24}/></button> */}
          </div>
        </div>
      </header>
    );
}

export default Header