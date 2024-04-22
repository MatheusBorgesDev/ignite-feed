import { Post } from "./Post";
import { Header } from "./components/Header";

import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Matheus Borges"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla neque libero doloremque nostrum enim voluptas blanditiis cupiditate odio, est ratione molestiae. Odio ratione dicta corporis voluptate nam voluptas iusto sapiente!"
          />
        </main>
      </div>
    </div>
  );
}

export default App;
