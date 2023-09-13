import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "../Pages/project";
import AddProject from "../Pages/addProject";
export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="add" element={<AddProject />} />
          <Route path="/add/:id" element={<AddProject />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}