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
            <a href="#"><span className={styles.logoName}>green.harvest</span></a>
            </div>
            <button className={styles.burgerBtn}><RxHamburgerMenu size={32}/></button>
          </div>
        </div>
      </header>
    );
}

export default Header