import styles from './SectionSocial.module.css'
import { FaInstagramSquare, FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { useLayoutEffect } from 'react';
import ScrollTrigger from 'gsap';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const SectionSocial = () => {

  useLayoutEffect(() => {
    gsap.fromTo(
      `.${styles.social}`,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: `.${styles.social}`,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      `.${styles.socialItems}`,
      {
        opacity: 0,
        scale: 0.8,
        y: 30,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: 'back.out(1.7)',
        stagger: 0.2,
        scrollTrigger: {
          trigger: `.${styles.socialItems}`,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
        },
      }
    );
  }, []);

    return (
      <div className={styles.socialContainer}>
        <div className={styles.social}>
          <img src="/images/footerImg.png" />
          <p>Follow us on our social networks:</p>
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