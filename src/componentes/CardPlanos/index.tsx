import './CardPlanos.module.css'
// import { IConteudoCard } from 'interfaces/Conteudo';
import listaConteudo from 'json/ConteudoCard.json'

interface IConteudoCard {
  id: number
  plano: string
  preco: string
  valorIngresso: string
  kit: string
  descontos: string
  nivel: string
}

const CardPlanos = (props: IConteudoCard) => {
  return (
    <div className='principal'>
      <div className='card'>
      <h5>{props.plano}</h5>
      <h1>{props.preco}</h1>
      <div className='divider'>DIVIDER</div>
      <p>{props.valorIngresso}</p>
      <div className='divider'>DIVIDER</div>
      <p>{props.kit}</p>
      <div className='divider'>DIVIDER</div>
      <p>{props.descontos}</p>
      <div className='divider'>DIVIDER</div>
      <p>{props.nivel}</p>
      <div className='divider'>DIVIDER</div>
      <a href="https://camisa7.botafogo.com.br/" target="_blank"><button>VIRE SÓCIO!</button></a>
    </div>
    </div>
  )
}

export default CardPlanos