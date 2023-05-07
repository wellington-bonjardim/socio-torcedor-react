import CardModelo from 'componentes/CardBeneficios/CardModelo';
import listaBeneficios from 'json/CardModeloBeneficios.json';

export default function CardBeneficios() {
  return (
    <div>
      {listaBeneficios.map(beneficio => (
        <CardModelo key={beneficio.id} {...beneficio} />
      ))}
    </div>
  )
}