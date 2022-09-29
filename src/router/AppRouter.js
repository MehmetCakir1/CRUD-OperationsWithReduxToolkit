import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePost from "../app/features/CreatePost";
import UserPost from "../app/features/UserPost";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserPost />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
