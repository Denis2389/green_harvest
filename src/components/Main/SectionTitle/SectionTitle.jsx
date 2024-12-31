import styles from './SectionTitle.module.css'
import gsap from 'gsap';
import { useLayoutEffect } from 'react';

const SectionTitle = () => {

  useLayoutEffect(() => {
    gsap.fromTo(
      `.${styles.headerText}`,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out'
      }
    );
    gsap.fromTo(
      `.${styles.headerTextParagraph}`,
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      }
    );
  }, [])
    return (
      <section className={styles.section}>
        <div className={styles.sectionContainerFlex}>
          <div className={styles.firstSectionWidth}>
            <h1 className={styles.headerText}>
              organic vegetables to your diet today!
            </h1>
            <p className={styles.headerTextParagraph}>
              Our expertly curated vegetable baskets are made with the freshest,
              highest quality vegetables available. Fresh Harvest Box has got
              you covered. Fresh, high-quality vegetables in expertly curated
              vegetable baskets delivered to you.
            </p>
          </div>
          <div className={styles.firstBcPhoto}></div>
        </div>
        <div className={styles.firstPhotoContainer}>
          <div className={styles.secondBcPhoto}></div>
        </div>
      </section>
    );
}

export default SectionTitle