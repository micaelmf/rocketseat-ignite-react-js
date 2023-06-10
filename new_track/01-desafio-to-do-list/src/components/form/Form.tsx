import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { Submit } from '../buttons/submit/Submit';
import styles from './Form.module.css';
import { Task } from '../../@types/types';

type FormProps = {
  setTasks: (tasks: Task[]) => void;
  tasks: Task[];
};

export function Form({ setTasks, tasks }: FormProps) {
  const [task, setTask] = useState<Task>({ description: '' });

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    const newTask: Task = {
      id: Date.now().toString(),
      description: task.description,
      status: 'pending',
    };

    if (newTask.description) {
      setTasks([...tasks, newTask]);
      setTask({ description: '' });
    }
  }

  function handleCreateTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');

    setTask({
      description: event.target.value,
    });
  }

  function handleTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Campo obrigatório!');
  }

  return (
    <form onSubmit={handleCreateTask} className={styles.form}>
      <input
        type="text"
        placeholder="Adicione um nova tarefa"
        value={task?.description}
        onChange={handleCreateTaskChange}
        onInvalid={handleTaskInvalid}
        required
      />
      <Submit />
    </form>
  );
}
