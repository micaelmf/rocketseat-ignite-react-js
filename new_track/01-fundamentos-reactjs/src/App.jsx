import { Post } from './components/Post';
import { Header } from './components/Header';
import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Micael Ferreira"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquam voluptas, reprehenderit dolor, asperiores nihil nostrum vel qui dolorem quaerat molestias mollitia blanditiis velit id cupiditate voluptatem sint expedita exercitationem."
          />
          <Post author="Vanessa Pereira" content="Outro post." />
          <Post />
        </main>
      </div>
    </div>
  );
}

export default App;
