import styles from './SectionReviews.module.css'
import { useLayoutEffect } from 'react';
import ScrollTrigger from 'gsap';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

const SectionReviews = () => {

  const { t } = useTranslation;

  useLayoutEffect(() => {
    gsap.fromTo(
      `.${styles.freshTitle}`,
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: `.${styles.freshTitle}`,
          start: "top 70%",
          end: "bottom 10%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      `.${styles.freshParagraph}`,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: `.${styles.freshParagraph}`,
          start: "top 70%",
          end: "bottom 10%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      `.${styles.boxModel}`,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: `.${styles.boxModel}`,
          start: "top 70%",
          end: "bottom 10%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      `.${styles.imgJhon}`,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        delay: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: `.${styles.imgJhon}`,
          start: "top 70%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }, []);

    return (
      <div className={styles.freshContainer}>
        <h2 className={styles.freshTitle}>
          {t('reviewsTitle')}
        </h2>
        <p className={styles.freshParagraph}>
          {t('reviewsDescription')}
        </p>
        <div className={styles.boxModel}>
          <img
            className={styles.imgJhon}
            src='/images/john.png'
            alt="john"
            width="56px"
            height="56px"
          />
          <h4 className={styles.nameTitle}>John Wax</h4>
          <p className={styles.nameText}>
            {t('reviewsHuman')}
          </p>
        </div>
      </div>
    );
}

export default SectionReviews