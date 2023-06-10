import styles from './List.module.css';
import clipboard from '../../assets/Clipboard.svg';
import { Trash } from '@phosphor-icons/react';
import { Task } from '../../@types/types';
import { useState } from 'react';

interface ListProps {
  setTasks: (tasks: Task[]) => void;
  tasks: Task[];
}

export function List({ setTasks, tasks }: ListProps) {
  const [status, setStatus] = useState<'pending' | 'completed'>('pending');
  const [completed, setCompleted] = useState(0);
  const isEmptyTasksList = tasks.length === 0;

  function handleStatusChange(id: string) {
    const tasksUpdated = tasks.map((task) => {
      if (task.id == id) {
        if (task.status == 'pending') {
          task.status = 'completed';
        } else {
          task.status = 'pending';
        }
      }
      return task;
    });

    setTasks(tasksUpdated);

    const tasksCompleted = tasks.filter((task) => {
      return task.status == 'completed';
    });

    setCompleted(tasksCompleted.length);
  }

  return (
    <div className={styles.listContainer}>
      <header>
        <div>
          Taferas criadas <span className={styles.badge}>{tasks.length}</span>
        </div>
        <div>
          Concluídas{' '}
          <span className={styles.badge}>
            {completed} de {tasks.length}
          </span>
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
                  value={status}
                  onChange={() => handleStatusChange(task.id ?? '')}
                />
              </div>
              <div
                className={task.status === 'completed' ? styles.completed : ''}
              >
                {task.description ?? ''} {task.status}
              </div>
              <div className={styles.trash}>
                <Trash size={24} key={index} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
