import styles from './Footer.module.css'
import { HiSquare3Stack3D } from "react-icons/hi2";

const Footer = () => {
    return (
      <footer className={styles.footer}>
        <div className={styles.footerLogo}>
          <div className={styles.logoFlex}>
            <a href="#">
              <HiSquare3Stack3D color="white" size={24} />
            </a>
            <a href="#">
              <span className={styles.logoName}>green.harvest</span>
            </a>
          </div>
          <p className={styles.footerLogoText}>
            Whether youre looking for a healthy snack or a thoughtful gift, our
            fruit baskets are the perfect choice.
          </p>
          <div className={styles.footerFlex}>
            <a className={styles.footerTextFirst} href="#">
              how it works
            </a>
            <a className={styles.footerTextSecond} href="#">
              vegetables
            </a>
            <a className={styles.footerTextThird} href="#">
              reviews
            </a>
          </div>
          <ul className={styles.footerInfo}>
            <li className={styles.footerMenuInfo}>
              <a
                className={styles.footerLinkTel}
                href="tel:+380 (68) 443-94-26"
                target="_blank"
              >
                +380 (68) 443-94-26
              </a>
            </li>
            <li className={styles.footerMenuInfo}>
              1678 S. Pioneer Road Salt
              <br />
              Lake City UT 84104
            </li>
          </ul>
        </div>
      </footer>
    );
}

export default Footer