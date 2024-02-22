import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import GoalScorer from "./pages/GoalScorer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/GoalScorer",
    element: <GoalScorer/>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
