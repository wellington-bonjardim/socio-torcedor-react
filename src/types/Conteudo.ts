import ConteudoCard from 'json/ConteudoCard.json';

type ConteudoCard = {
  id: number;
  plano: string;
  preco: string;
  valorIngresso: string;
  kit: string;
  descontos: string;
  nivel: string;
}

export type Conteudo = typeof ConteudoCard[0]