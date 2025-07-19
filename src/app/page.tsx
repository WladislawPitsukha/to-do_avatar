//TODO: analize after other tasks
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import TodoList from "@/components/todoList";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <TodoList />
      <Footer />
    </div>
  );
}
