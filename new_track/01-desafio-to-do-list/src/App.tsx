import { useState } from 'react';
import './App.css';
import { Form } from './components/form/Form';
import { Header } from './components/header/Header';
import { List } from './components/list/List';
import { Task } from './@types/types';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <>
      <Header />
      <div className="container">
        <Form setTasks={setTasks} tasks={tasks} />
        <List setTasks={setTasks} tasks={tasks} />
      </div>
    </>
  );
}

export default App;
