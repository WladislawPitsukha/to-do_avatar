//TODO: make the main page of the app

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import TodoList from "@/components/todoList";

export default function Home() {
  return (
    <div>
      <Navbar />
      <TodoList />
      <Footer />
    </div>
  );
}
