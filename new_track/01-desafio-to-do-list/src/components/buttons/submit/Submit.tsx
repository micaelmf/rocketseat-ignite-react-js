import { PlusCircle } from '@phosphor-icons/react';
import styles from './Submit.module.css';

export function Submit() {
  return (
    <button type="submit" className={styles.submit}>
      Criar <PlusCircle size={24} />
    </button>
  );
}
