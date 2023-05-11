import styles from './CardModelo.module.css';
import listaConteudo from 'json/ConteudoCard.json';

type Props = typeof listaConteudo[0]

export default function CardModelo(props: Props) {
  const { plano, preco, valorIngresso, kit, descontos, nivel } = props

  return (
    <div className={styles.card}>
      <h5>{plano}</h5>
      <h1>{preco}</h1>
      <div className={styles.divider}></div>
      <p>{valorIngresso}</p>
      <div className={styles.divider}></div>
      <p>{kit}</p>
      <div className={styles.divider}></div>
      <p>{descontos}</p>
      <div className={styles.divider}></div>
      <p>{nivel}</p>
      <a href="https://camisa7.botafogo.com.br/" target="_blank" rel="noreferrer"><button>VIRE SÓCIO!</button></a>
    </div>
  )
}