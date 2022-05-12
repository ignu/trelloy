import './App.css';
import { useStore } from './lib/store';

function App() {
  const { tasks } = useStore();
  return (
    <div className="App">
      <div>
        {tasks.length} 
      </div>
    </div>
  );
}

export default App;
