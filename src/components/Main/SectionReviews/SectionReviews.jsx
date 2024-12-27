import styles from './SectionReviews.module.css'

const SectionReviews = () => {
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