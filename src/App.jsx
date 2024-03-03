import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "./Auth/SignUp";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <h1>hello world</h1>,
    },
    {
      path: "/signUp",
      element: <SignUp />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
