import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Todo from "./tabs/todo/Todo";
import Weather from "./tabs/weather/Weather";

function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Navigate to="/weather" />
        },
        {
          path: '/weather',
          element: <Weather />
        },
        {
          path: '/todo',
          element: <Todo />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={routes} />
  );
}

export default App;
