import CardModelo from 'componentes/CardPlanos/CardModelo';
import listaConteudo from 'json/ConteudoCard.json';
import styles from './CardPlanos.module.css';

export default function CardPlanos() {
  return (
    <div className={styles.geral}>
      {listaConteudo.map(conteudo => (
        <CardModelo key={conteudo.id} {...conteudo} />
      ))}
    </div>
  )
}