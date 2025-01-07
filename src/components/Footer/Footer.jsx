import styles from './Footer.module.css'
import { HiSquare3Stack3D } from "react-icons/hi2";
import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

  const { t } = useTranslation();

  useLayoutEffect(() => {
    gsap.fromTo(
      `.${styles.logoFirst}`,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: `.${styles.logoFirst}`,
          start: "top 70%",
          end: "bottom 10%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      `.${styles.logoSecond}`,
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: `.${styles.logoSecond}`,
          start: "top 70%",
          end: "bottom 10%",
          scrub: true,
        },
      }
    );
  }, [])

    return (
      <footer className={styles.footer}>
        <div className={styles.footerLogo}>
          <div className={styles.logoFlex}>
            <a href="#">
              <HiSquare3Stack3D className={styles.logoFirst} color="white" size={24} />
            </a>
            <a className={styles.logoSecond} href="#">
              <span className={styles.logoName}>green.harvest</span>
            </a>
          </div>
          <p className={styles.footerLogoText}>
            {t('footerTitle')}
          </p>
          <div className={styles.footerFlex}>
            <a className={styles.footerTextFirst} href="#">
              {t('footerTextFirst')}
            </a>
            <a className={styles.footerTextSecond} href="#">
              {t('footerTextSecond')}
            </a>
            <a className={styles.footerTextThird} href="#">
              {t('footerTextThird')}
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