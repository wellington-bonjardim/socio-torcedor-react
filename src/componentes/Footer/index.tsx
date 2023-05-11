import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer>
      <p>Todos os direitos são reservados ao <strong>Botafogo de Futebol e Regatas</strong></p>
        <div className={styles.social}>
          <a href="https://twitter.com/Botafogo?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" inverse className={styles.hover} />
          </a>

          <a href="https://www.instagram.com/botafogo/?hl=pt" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" inverse className={styles.hover}/>
          </a>

          <a href="https://www.facebook.com/Botafogo/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" inverse className={styles.hover} />
          </a>
        </div>
    </footer>
  )
}