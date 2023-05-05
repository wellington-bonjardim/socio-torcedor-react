import CardModelo from 'componentes/CardPlanos/CardModelo';
import './CardPlanos.module.css';
import listaConteudo from 'json/ConteudoCard.json';

export default function CardPlanos() {
  return (
    <div>
      {listaConteudo.map(conteudo => (
        <CardModelo key={conteudo.id} {...conteudo} />
      ))}
    </div>
  )
}