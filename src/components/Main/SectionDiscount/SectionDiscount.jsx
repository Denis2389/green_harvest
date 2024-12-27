import styles from './SectionDiscount.module.css'

const SectionDiscount = () => {
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