import styles from './List.module.css';
import clipboard from '../../assets/Clipboard.svg';
import { Trash } from '@phosphor-icons/react';
import { Task } from '../../@types/types';

interface ListProps {
  tasks: Task[];
}

export function List({ tasks }: ListProps) {
  const isEmptyTasksList = tasks.length === 0;

  return (
    <div className={styles.listContainer}>
      <header>
        <div>
          Taferas criadas <span className={styles.badge}>{tasks.length}</span>
        </div>
        <div>
          Concluídas <span className={styles.badge}>0 de {tasks.length}</span>
        </div>
      </header>
      <div className={styles.items}>
        {isEmptyTasksList && (
          <div className={styles.empty}>
            <img src={clipboard} alt="Imagem de lista vazia" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            Crie tarefas e organize seus itens a fazer
          </div>
        )}

        {!isEmptyTasksList &&
          tasks.map((task, index) => (
            <div className={styles.item} key={index}>
              <div>
                <input
                  className={styles.roundedCheckbox}
                  type="checkbox"
                  key={index}
                />
              </div>
              <div>{task.description ?? ''}</div>
              <div className={styles.trash}>
                <Trash size={24} key={index} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
