import listaConteudo from 'json/ConteudoCard.json';

type Props = typeof listaConteudo[0]

export default function CardModelo(props: Props) {
  const { plano, preco, valorIngresso, kit, descontos, nivel } = props

  return (
    <div>
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
    </div>
  )
}