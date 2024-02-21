import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Home from './components/Home';
import Menu from './components/Menu';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addTask" element={<TaskForm />} />
          <Route path="/tasks" element={<TaskList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
