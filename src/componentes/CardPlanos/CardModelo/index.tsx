import styles from './CardModelo.module.css';
import listaConteudo from 'json/ConteudoCard.json';

type Props = typeof listaConteudo[0]

export default function CardModelo(props: Props) {
  const { 
    plano, 
    preco, 
    prioridade, 
    valorIngresso, 
    convidado, 
    estacionamento, 
    descontoCamisa, 
    descontos, 
    nivel, 
    experiencias, 
    kit, 
    zeDelivery 
  } = props

  return (
    <div className={styles.card}>
      <div className={styles.texto}>
        <h5>{plano}</h5>
        <h1>{preco}</h1>
        <div className={styles.divider}></div>
        <p>{prioridade}</p>
        <div className={styles.divider}></div>
        <p>{valorIngresso}</p>
        <div className={styles.divider}></div>
        <p>{convidado}</p>
        <div className={styles.divider}></div>
        <p>{estacionamento}</p>
        <div className={styles.divider}></div>
        <p>{convidado}</p>
        <div className={styles.divider}></div>
        <p>{descontoCamisa}</p>
        <div className={styles.divider}></div>
        <p>{descontos}</p>
        <div className={styles.divider}></div>
        <p>{nivel}</p>
        <div className={styles.divider}></div>
        <p>{experiencias}</p>
        <div className={styles.divider}></div>
        <p>{kit}</p>
        <div className={styles.divider}></div>
        <p className={styles.ultimoItem}>{zeDelivery}</p>
        <a href="https://camisa7.botafogo.com.br/" target="_blank" rel="noreferrer">
          <button className={styles.botaoVireSocio}>VIRE SÓCIO!</button>
        </a>
      </div>
    </div>
  )
}