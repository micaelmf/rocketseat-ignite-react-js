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

  function toggleStatusChange(id: string) {
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
    countCompleted(tasksUpdated);
  }

  function deleteTask(id: string) {
    const tasksUpdated = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(tasksUpdated);
    countCompleted(tasksUpdated);
  }

  function countCompleted(tasksUpdated: Task[]) {
    const tasksCompleted = tasksUpdated.filter((task) => {
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
          tasks.map((task) => (
            <div className={styles.item} key={task.id}>
              <div>
                <input
                  className={styles.roundedCheckbox}
                  type="checkbox"
                  key={task.id}
                  value={status}
                  onChange={() => toggleStatusChange(task.id ?? '')}
                />
              </div>
              <div
                className={task.status === 'completed' ? styles.completed : ''}
              >
                {task.description ?? ''}
              </div>
              <div className={styles.trash}>
                <Trash
                  size={24}
                  key={task.id}
                  onClick={() => deleteTask(task.id ?? '')}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
