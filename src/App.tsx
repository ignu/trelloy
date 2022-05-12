import "./App.css";
import TaskColumn from "./components/TaskColumn";
import { useStore } from "./lib/store";

function App() {
  const { columns } = useStore();
  return (
    <div className="App">
      <div>
        {columns.map((category) => (
          <TaskColumn key={category} category={category} />
        ))}
      </div>
    </div>
  );
}

export default App;
