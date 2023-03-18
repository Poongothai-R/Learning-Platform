import { Routes, Route } from "react-router-dom";
import AddCourse from "../components/AddCourse";


// Project files
import ContentPage from "../pages/ContentPage";


export default function LoggedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ContentPage />} />
      <Route path="/contentpage" element={<ContentPage />} />
      <Route path="/addcourse" element={<AddCourse />} />
    </Routes>
  );
}