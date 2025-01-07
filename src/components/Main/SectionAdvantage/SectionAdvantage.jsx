import styles from './SectionAdvantage.module.css'
import gsap from 'gsap';
import { useLayoutEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';

const SectionAdvantage = () => {

  const { t } = useTranslation

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {

    const isDesktop = window.innerWidth >= 820;

    const desktopConfig = {
      paragraphTextSecond: { x: -200, duration: 1.5 },
      paragraphTitle: { x: -200, duration: 1.5 },
      mainBox: { x: 200, duration: 1.6, stragger: 0.3 },
      scrollTrigger: {
        paragraphTextSecond: { start: 'top 70%', end: 'bottom 20%' },
      }
    }

    const mobileConfig = {
      paragraphTextSecond: { x: -100, duration: 1.2 },
      paragraphTitle: { x: -100, duration: 1.2 },
      mainBox: { x: 100, duration: 1.3, stragger: 0.2 }
    }

    const config = isDesktop ? desktopConfig : mobileConfig

    gsap.fromTo(
      `.${styles.paragraphTextSecond}`,
      { x: config.paragraphTextSecond, opacity: 0 }, 
      {
        x: 0,                 
        opacity: 1,            
        duration: config.paragraphTextSecond.duration,     
        ease: 'power2.out',
        scrollTrigger: {      
          trigger: `.${styles.paragraphTextSecond}`, 
          start: 'top 70%',
          end: 'bottom 20%',   
          scrub: true
        }
      }
    );
    gsap.fromTo(
      `.${styles.paragraphTitle}`,
      { x: config.paragraphTitle.x, opacity: 0 }, 
      {
        x: 0,                 
        opacity: 1,            
        duration: config.paragraphTitle.duration,     
        ease: 'power2.out',   
        scrollTrigger: {      
          trigger: `.${styles.paragraphTitle}`, 
          start: 'top 70%',
          end: 'bottom 10%',  
          scrub: true
        }
      }
    );
    gsap.fromTo(
      `.${styles.mainBox}`,
      { x: config.mainBox.x, opacity: 0 }, 
      {
        x: 0,                 
        opacity: 1,            
        duration: config.mainBox.duration,
        stagger: config.mainBox.stragger,
        ease: 'power1.inOut',   
        scrollTrigger: {      
          trigger: `.${styles.mainBox}`, 
          start: 'top 80%',
          end: 'bottom 50%',   
          scrub: true
        }
      }
    );
  }, [])
   
    return (
      <section>
        <div className={styles.thirdSectionFlex}>
          <h2 className={styles.paragraphTextSecond}>
            {t('advantageTitle')}
          </h2>
          <p className={styles.paragraphTitle}>
            {t('advantageDescription')}
          </p>
          <div className={styles.mainBoxSection}>
            <div className={`${styles.mainBox} ${styles.mainBoxFirst}`}>
              <div className={styles.circle}>1</div>
              <p className={styles.titleParagraphFirst}>
                {t('advantagesFirstCard"')}
              </p>
            </div>
            <div className={`${styles.mainBox} ${styles.mainBoxSecond}`}>
              <div className={styles.circle}>2</div>
              <p className={styles.titleParagraphSecond}>
                {t('advantagesSecondCard')}
              </p>
            </div>
            <div className={`${styles.mainBox} ${styles.mainBoxThird}`}>
              <div className={styles.circle}>3</div>
              <p className={styles.titleParagraphThird}>
                {t('advantagesThirdCard')}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default SectionAdvantage