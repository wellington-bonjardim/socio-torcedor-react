import { Link, useLocation } from 'react-router-dom';
import styles from './MenuLink.module.css';

interface Props {
  children: string
  to: string
}

export default function MenuLink({ children, to}: Props) {
  const paginaAtual = useLocation()

  return (
    <Link className={`
      ${styles.link}
      ${paginaAtual.pathname === to ? styles.linkSelecionado : ""}
    `} to={to}>
      {children}
    </Link>
  )
}