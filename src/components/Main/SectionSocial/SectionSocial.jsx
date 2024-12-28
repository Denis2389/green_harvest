import styles from './SectionSocial.module.css'
import { FaInstagramSquare, FaFacebookSquare, FaYoutube } from "react-icons/fa";

const SectionSocial = () => {
    return (
      <div className={styles.socialContainer}>
        <div className={styles.social}>
          <img src="/images/footerImg.png" />
          <p>Follow us on our social networks:</p>
          <ul className={styles.socialList}>
            <li className={styles.socialItems}>
              <a target='_blank' href="https://www.instagram.com/?locale=ru"></a>
              <FaInstagramSquare size={55} color='#fafafa' className={styles.instIcon}/>
            </li>
            <li className={styles.socialItems}>
              <a target='_blank' href="https://www.facebook.com/?locale=uk_UA"></a>
              <FaFacebookSquare size={55} color='#fafafa'/>
            </li>
            <li className={styles.socialItems}>
              <a target='_blank' href="https://www.youtube.com/?app=desktop&gl=UA&hl=uk"></a>
              <FaYoutube size={55} color='#fafafa'/>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default SectionSocial