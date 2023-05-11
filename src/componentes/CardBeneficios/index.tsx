import CardModelo from 'componentes/CardBeneficios/CardModelo';
import listaBeneficios from 'json/CardModeloBeneficios.json';
import styles from './CardBeneficios.module.css';

export default function CardBeneficios() {
  return (
    <div className={styles.principal}>
      {listaBeneficios.map(beneficio => (
        <CardModelo key={beneficio.id} {...beneficio} />
      ))}
    </div>
  )
}