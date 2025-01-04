import styles from './SectionTitle.module.css'
import gsap from 'gsap';
import { useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';

const SectionTitle = () => {

  const { t } = useTranslation();

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
              {t('titleHeaderText')}
            </h1>
            <p className={styles.headerTextParagraph}>
              {t('titleHeaderDescription')}
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