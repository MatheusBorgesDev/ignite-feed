import styles from "./App.module.css";

import { Post, PostType } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import "./global.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/MatheusBorgesDev.png",
      name: "Matheus Borges",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.",
      },
      { type: "paragraph", content: "O nome do projeto é DoctorCare 🚀 " },
      { type: "link", content: "matheus.design/doctorcare" },
    ],
    publishedAt: new Date("2024-04-20 20:00:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/GiovaniGirardi.png",
      name: "Giovani Girardi",
      role: "Senior Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.",
      },
      { type: "paragraph", content: "O nome do projeto é DoctorCare 🚀 " },
      { type: "link", content: "matheus.design/doctorcare" },
    ],
    publishedAt: new Date("2024-04-23 19:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
