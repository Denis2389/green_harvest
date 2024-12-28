import styles from './SectionDiscount.module.css'
import { useLayoutEffect } from 'react';
import ScrollTrigger from 'gsap';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const SectionDiscount = () => {


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
          start: "top 80%",
          end: "bottom 20%",
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
          start: "top 80%",
          end: "bottom 20%",
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
          start: "top 80%",
          end: "bottom 50%",
          scrub: true,
        },
      }
    );
  }, []);


  return (
    <section>
      <div className={styles.discountSection}>
        <h2 className={styles.discountTitle}>
          <span className={styles.discountTextSpan}>
            Discount up to 40%!
            <span className={styles.discountTextSpanSec}>
              Taste the vitamins and keep your health
            </span>
          </span>
        </h2>
      </div>
    </section>
  );
}

export default SectionDiscount