import styles from './SectionReviews.module.css'
import { useLayoutEffect } from 'react';
import ScrollTrigger from 'gsap';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const SectionReviews = () => {
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
          end: "bottom 10%",
          scrub: true,
        },
      }
    );
  }, []);

    return (
      <div className={styles.freshContainer}>
        <h2 className={styles.freshTitle}>
          reviews from our <span className={styles.freshTextSpan}>customers</span>
        </h2>
        <p className={styles.freshParagraph}>
          Words of our customers: impressions and opinions about the quality of
          our services and the freshness of our products.
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
            These vegetables are my secret to delicious and healthy meals. The
            quality is always at the highest level, the aroma and taste are
            enchanting. I advise every fan of real products!
          </p>
        </div>
      </div>
    );
}

export default SectionReviews