import styles from './List.module.css';
import clipboard from '../../assets/Clipboard.svg';
import { CheckCircle, Trash } from '@phosphor-icons/react';

export function List() {
  return (
    <div className={styles.listContainer}>
      <header>
        <div>
          Taferas criadas <span className={styles.badge}>0</span>
        </div>
        <div>
          Concluídas <span className={styles.badge}>0 de 0</span>
        </div>
      </header>
      <div className={styles.items}>
        {/* <div className={styles.empty}>
          <img src={clipboard} alt="Imagem de lista vazia" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          Crie tarefas e organize seus itens a fazer
        </div> */}
        <div className={styles.item}>
          <div>
            <input className={styles.roundedCheckbox} type="checkbox" />
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sint
            quae possimus porro a, nemo dolores sequi earum consequuntur debitis
            praesentium voluptatem blanditiis totam, ea voluptates, quo sit at
            consequatur.
          </div>
          <div className={styles.trash}>
            <Trash size={24} />
          </div>
        </div>
        <div className={styles.item}>
          <div>
            <input className={styles.roundedCheckbox} type="checkbox" />
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sint
            quae possimus porro a, nemo dolores sequi earum consequuntur debitis
            praesentium voluptatem blanditiis totam, ea voluptates, quo sit at
            consequatur.
          </div>
          <div className={styles.trash}>
            <Trash size={24} />
          </div>
        </div>
        <div className={styles.item}>
          <div>
            <input className={styles.roundedCheckbox} type="checkbox" />
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sint
            quae possimus porro a, nemo dolores sequi earum consequuntur debitis
            praesentium voluptatem blanditiis totam, ea voluptates, quo sit at
            consequatur.
          </div>
          <div className={styles.trash}>
            <Trash size={24} />
          </div>
        </div>
        <div className={styles.item}>
          <div>
            <input className={styles.roundedCheckbox} type="checkbox" />
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sint
            quae possimus porro a, nemo dolores sequi earum consequuntur debitis
            praesentium voluptatem blanditiis totam, ea voluptates, quo sit at
            consequatur.
          </div>
          <div className={styles.trash}>
            <Trash size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
