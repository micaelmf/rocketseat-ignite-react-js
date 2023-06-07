import './App.css';
import { Header } from './components/header/Header';
import { List } from './components/list/List';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <List />
      </div>
    </>
  );
}

export default App;
