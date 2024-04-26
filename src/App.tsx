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
      { type: "paragraph", content: "E aí !!!" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz em um evento de programação.",
      },
      { type: "paragraph", content: "O nome do projeto é Voice Notes 🚀 " },
      {
        type: "link",
        content: "",
      },
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
        content: "Tem projeto novo vindo por aí... Aguardem!!!",
      },
      { type: "paragraph", content: "" },
      { type: "link", content: "" },
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
