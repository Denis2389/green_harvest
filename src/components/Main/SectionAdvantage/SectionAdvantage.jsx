import styles from './SectionAdvantage.module.css'

const SectionAdvantage = () => {
    return (
      <section>
        <div className={styles.thirdSectionFlex}>
          <h2 className={styles.paragraphTextSecond}>
            To order your <span className={styles.textSpan}>vegetable</span>{" "}
            basket, simply follow these
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
                <span className={styles.titleSpan}>vegetable</span> you want to
                order by clicking on the checkboxes
                <span className={styles.titleSpan}>next to it</span>.
              </p>
            </div>
            <div className={styles.mainBox}>
              <div className={styles.circle}>2</div>
              <p className={styles.titleParagraphSecond}>
                Click on <span className={styles.titleSpan}>the basket</span>
                and fill out the form.
              </p>
            </div>
            <div className={`${styles.mainBox} ${styles.mainBoxThird}`}>
              <div className={styles.circle}>3</div>
              <p className={styles.titleParagraphThird}>
                Sit back and relax! Your
                <span className={styles.titleSpan}>fresh vegetables</span>
                basket will be delivered.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default SectionAdvantage