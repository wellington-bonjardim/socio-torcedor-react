import './CardPlanos.module.css'
import { Conteudo } from 'types/Conteudo';

export default function CardPlanos({
  plano,
  preco,
  valorIngresso,
  kit,
  descontos,
  nivel
}: Conteudo) {
  return (
    <div className='principal'>
      <div className='card'>
      <h5>{plano}</h5>
      <h1>{preco}</h1>
      <div className='divider'>DIVIDER</div>
      <p>{valorIngresso}</p>
      <div className='divider'>DIVIDER</div>
      <p>{kit}</p>
      <div className='divider'>DIVIDER</div>
      <p>{descontos}</p>
      <div className='divider'>DIVIDER</div>
      <p>{nivel}</p>
      <div className='divider'>DIVIDER</div>
      <a href="https://camisa7.botafogo.com.br/" target="_blank"><button>VIRE SÓCIO!</button></a>
    </div>
    </div>
  )
}