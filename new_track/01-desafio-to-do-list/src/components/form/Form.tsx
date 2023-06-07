import { Submit } from '../buttons/submit/Submit';
import styles from './Form.module.css';

export function Form() {
  return (
    <div className={styles.form}>
      <input type="text" placeholder="Adicione um nova tarefa" />
      <Submit />
    </div>
  );
}
