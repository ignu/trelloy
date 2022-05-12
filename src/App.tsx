import "./App.css";
import TaskColumn from "./components/TaskColumn";
import { useStore } from "./lib/store";

function App() {
  const { categories, addCategory } = useStore();
  return (
    <div className="p-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
      <div className="flex w-full h-screen">
        {categories.map((category) => (
          <TaskColumn key={category.id.toString()} category={category} />
        ))}
        <div className="bg-gray-200 rounded w-44 p-2 h-10 cursor-pointer" onClick={addCategory}>
          + Add another list
        </div>
      </div>
    </div>
  );
}

export default App;
