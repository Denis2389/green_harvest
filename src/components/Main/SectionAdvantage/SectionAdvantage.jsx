import styles from './SectionAdvantage.module.css'
import gsap from 'gsap';
import { useLayoutEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';

const SectionAdvantage = () => {

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.fromTo(
      `.${styles.paragraphTextSecond}`,
      { x: -200, opacity: 0 }, 
      {
        x: 0,                 
        opacity: 1,            
        duration: 1.5,     
        ease: 'power2.out',   
        scrollTrigger: {      
          trigger: `.${styles.paragraphTextSecond}`, 
          start: 'top 70%',
          end: 'bottom 10%',   
          scrub: true
        }
      }
    );
    gsap.fromTo(
      `.${styles.paragraphTitle}`,
      { x: -200, opacity: 0 }, 
      {
        x: 0,                 
        opacity: 1,            
        duration: 1.5,     
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
      { x: 200, opacity: 0 }, 
      {
        x: 0,                 
        opacity: 1,            
        duration: 1.6,
        stagger: 0.3,
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
            To order your <span className={styles.textSpan}>vegetable</span>{" "}
            basket simply follow these
            <span className={styles.textSpan}>easy steps</span>
          </h2>
          <p className={styles.paragraphTitle}>
            Our baskets are assembled with care and delivered straight to your
            doorstep, so you can enjoy the taste of fresh fruit without ever
            leaving your home.
          </p>
          <div className={styles.mainBoxSection}>
            <div className={`${styles.mainBox} ${styles.mainBoxFirst}`}>
              <div className={styles.circle}>1</div>
              <p className={styles.titleParagraphFirst}>
                Just choose the
                <span className={styles.titleSpan}>&nbsp;vegetable</span> you want to
                order by clicking on the checkboxes
                <span className={styles.titleSpan}>&nbsp;next to it</span>.
              </p>
            </div>
            <div className={`${styles.mainBox} ${styles.mainBoxSecond}`}>
              <div className={styles.circle}>2</div>
              <p className={styles.titleParagraphSecond}>
                Click on <span className={styles.titleSpan}>the basket&nbsp;</span>
                and fill out the form.
              </p>
            </div>
            <div className={`${styles.mainBox} ${styles.mainBoxThird}`}>
              <div className={styles.circle}>3</div>
              <p className={styles.titleParagraphThird}>
                Sit back and relax! Your
                <span className={styles.titleSpan}>&nbsp;fresh vegetables&nbsp;</span>
                basket will be delivered.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default SectionAdvantage