import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { TaskForm } from './components/TaskForm';
import { TasksList } from './components/TasksList';

function App() {
  
  return (
    <div className="App">
      <h1>Hello word</h1>
      <TaskForm />
      <TasksList />
    </div>
  );
}

export default App;
