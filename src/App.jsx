import { Post } from "./Post";
import { Header } from "./components/Header";

import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <Post
        author="Matheus Borges"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla neque libero doloremque nostrum enim voluptas blanditiis cupiditate odio, est ratione molestiae. Odio ratione dicta corporis voluptate nam voluptas iusto sapiente!"
      />
    </div>
  );
}

export default App;
