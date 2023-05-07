import listaBeneficios from 'json/CardModeloBeneficios.json';

type Props = typeof listaBeneficios[0]

export default function CardModelo(props: Props) {
  const {titulo, icone, descricaoIcone, beneficios} = props

  return (
    <div>
      <h5>{titulo}</h5>
      <img src={icone} alt={descricaoIcone} />
      <p>{beneficios}</p>
      <a href="https://camisa7.botafogo.com.br/" target="_blank" rel="noreferrer"><button>APROVEITE!</button></a>
    </div>
  )
}