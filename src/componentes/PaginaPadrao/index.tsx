import { Link, Outlet } from 'react-router-dom';
import styles from './PaginaPadrao.module.css';
import Logo from './logo_camisa7.png';
import MenuLink from 'componentes/MenuLink';

export default function PaginaPadrao() {
  
  return (
    <>
      <header className={styles.header}>
        <img src={Logo} alt="Imagem torcida Botafogo"  className={styles.logo}/>
        <nav>
          <MenuLink to="/">Início</MenuLink>
          <MenuLink to="/beneficios">Benefícios</MenuLink>
        </nav>
      </header>
      
      <Outlet />
    </>
  )
}