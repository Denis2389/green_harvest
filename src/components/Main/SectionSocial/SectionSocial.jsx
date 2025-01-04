import styles from './SectionSocial.module.css'
import { FaInstagramSquare, FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { useLayoutEffect } from 'react';
import ScrollTrigger from 'gsap';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

const SectionSocial = () => {

  const { t } = useTranslation;

  useLayoutEffect(() => {
    gsap.fromTo(
      `.${styles.social}`,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: `.${styles.social}`,
          start: 'top 70%',
          end: 'bottom 10%',
          scrub: true,
        },
      }
    );
  }, []);

    return (
      <div className={styles.socialContainer}>
        <div className={styles.social}>
          <img src="/images/footerImg.png" />
          <p>{t('socialText')}</p>
          <ul className={styles.socialList}>
            <li className={styles.socialItems}>
              <a target='_blank' href="https://www.instagram.com/?locale=ru"></a>
              <FaInstagramSquare size={55} color='#fafafa' className={styles.instIcon}/>
            </li>
            <li className={styles.socialItems}>
              <a target='_blank' href="https://www.facebook.com/?locale=uk_UA"></a>
              <FaFacebookSquare size={55} color='#fafafa'/>
            </li>
            <li className={styles.socialItems}>
              <a target='_blank' href="https://www.youtube.com/?app=desktop&gl=UA&hl=uk"></a>
              <FaYoutube size={55} color='#fafafa'/>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default SectionSocial