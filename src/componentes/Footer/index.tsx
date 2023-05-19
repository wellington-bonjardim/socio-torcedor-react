import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer>
      <p className={styles.paragrafo}>Todos os direitos são reservados ao <strong>Botafogo de Futebol e Regatas</strong></p>
        <div className={styles.social}>
          <a href="https://twitter.com/Botafogo?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noreferrer" className={styles.linkSocial}>
            <FontAwesomeIcon icon={faTwitter} size="2x" inverse className={styles.hover} />
          </a>

          <a href="https://www.instagram.com/botafogo/?hl=pt" target="_blank" rel="noreferrer" className={styles.linkSocial}>
            <FontAwesomeIcon icon={faInstagram} size="2x" inverse className={styles.hover}/>
          </a>

          <a href="https://www.facebook.com/Botafogo/" target="_blank" rel="noreferrer" className={styles.linkSocial}>
            <FontAwesomeIcon icon={faFacebook} size="2x" inverse className={styles.hover} />
          </a>
        </div>
    </footer>
  )
}