import styles from './SectionDiscount.module.css'
import { useLayoutEffect } from 'react';
import ScrollTrigger from 'gsap';
import gsap from 'gsap';
import { useTranslation, Trans } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

const SectionDiscount = () => {

  const { t } = useTranslation();

  useLayoutEffect(() => {
    gsap.fromTo(
      `.${styles.discountTitle}`,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: `.${styles.discountTitle}`,
          start: "top 70%",
          end: "bottom 10%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      `.${styles.discountTextSpan}`,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: `.${styles.discountTextSpan}`,
          start: "top 70%",
          end: "bottom 10%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      `.${styles.discountTextSpanSec}`,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: `.${styles.discountTextSpanSec}`,
          start: "top 70%",
          end: "bottom 10%",
          scrub: true,
        },
      }
    );
  }, []);


  return (
    <section>
      <div className={styles.discountSection}>
        <h2 className={styles.discountTitle}>
          <Trans>
          <span className={styles.discountTextSpan}>Discount up to 40%!</span> <span className={styles.discountTextSpanSec}>Taste the vitamins and keep your health</span>
          </Trans>
        </h2>
      </div>
    </section>
  );
}

export default SectionDiscount