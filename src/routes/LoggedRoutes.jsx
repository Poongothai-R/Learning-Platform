import { Routes, Route } from "react-router-dom";
import AddCourse from "../components/AddCourse";
import UpdateCourse from "../components/UpdateCourse";


// Project files
import ContentPage from "../pages/ContentPage";


export default function LoggedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ContentPage />} />
      <Route path="/contentpage" element={<ContentPage />} />
      <Route path="/addcourse" element={<AddCourse />} />
      <Route path="/updatecourse" element={<UpdateCourse />} />
    </Routes>
  );
}