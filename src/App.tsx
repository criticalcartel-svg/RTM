import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Task from "./pages/Task";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task" element={<Task />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
