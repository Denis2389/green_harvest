import styles from './SectionTitle.module.css'

const SectionTitle = () => {
    return (
      <section>
        <h1 className={styles.headerText}>
          organic vegetables to your diet today!
        </h1>
        <p className={styles.headerTextParagraph}>
          Our expertly curated vegetable baskets are made with the freshest,
          highest quality vegetables available. Fresh Harvest Box has got you
          covered. Fresh, high-quality vegetables in expertly curated vegetable
          baskets delivered to you.
        </p>
        <div className={styles.firstBcPhoto}></div>
        <div className={styles.firstPhotoContainer}>
          <div className={styles.secondBcPhoto}></div>
        </div>
      </section>
    );
}

export default SectionTitle