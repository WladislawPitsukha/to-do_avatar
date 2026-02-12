//TODO: analize after other tasks
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import SpeedDialMain from "@/components/SpeedDialMain";
import TodoList from "@/components/ListTodo";

export default function Home() {
  return (
    <div className="bg-white min-h-screen relative">
      <Navbar />
      <main className="relative pt-4 px-4">
        <TodoList />
        <div className="fixed bottom-24 right-4 z-50">
            <SpeedDialMain />
        </div>
      </main>
      <Footer />
    </div>
  );
}
