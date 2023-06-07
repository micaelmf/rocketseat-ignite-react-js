import styles from './Header.module.css';
import logo from '../../assets/logo.svg';
import { Form } from '../form/Form';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logomarca do App To-do List" />
      <Form />
    </header>
  );
}
