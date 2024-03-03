import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "./Auth/SignUp";
import SignIn from "./Auth/SignIn";
import RegisterEmailVerify from "./Auth/RegisterEmailVerify";
import RegisterEmailSuccess from "./Auth/RegisterEmailSuccess";
import ForgotPassword from "./Auth/ForgotPassword";
import ForgotPasswordEmailSent from "./Auth/ForgotPasswordEmailSent";
import ResetPassword from "./Auth/ResetPassword";
import ResetPasswordSuccess from "./Auth/ResetPasswordSuccess";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signUp",
      element: <SignUp />,
    },
    {
      path: "/signIn",
      element: <SignIn />,
    },
    {
      path: "/register-email-verify/:email",
      element: <RegisterEmailVerify />,
    },
    {
      path: "/email-verify/:token",
      element: <RegisterEmailSuccess />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    { path: "forgot-email-sent", element: <ForgotPasswordEmailSent /> },
    {
      path: "/reset-password",
      element: <ResetPassword />,
    },
    {
      path: "/reset-password-success",
      element: <ResetPasswordSuccess />,
    },
  ]);

  // Create a client
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      <ToastContainer />
    </>
  );
}

export default App;
