import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";
import TaskColumn from "./components/TaskColumn";
import { useStore } from "./lib/store";

function App() {
  const { categories, addCategory } = useStore();
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
        <div className="flex w-full h-screen">
          {categories.map((category) => (
            <TaskColumn key={category.id} category={category} />
          ))}
          <div className="bg-gray-200 rounded w-44 p-2 h-10 cursor-pointer" onClick={addCategory}>
            + Add another list
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
