import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Task from "./pages/Task";
import TaskForm from "./pages/TaskForm";
import TaskProvider from "./contexts/TaskProvider";

export default function App() {
  return (
    <div className="bg-gray-50">
      <TaskProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<TaskForm />} />
            <Route path="/task" element={<Task />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </div>
  );
}
