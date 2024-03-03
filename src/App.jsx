import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "./Auth/SignUp";
import SignIn from "./Auth/SignIn";
import RegisterEmailVerify from "./Auth/RegisterEmailVerify";
import RegisterEmailSuccess from "./Auth/RegisterEmailSuccess";
import ForgotPassword from "./Auth/ForgotPassword";
import ForgotPasswordEmailSent from "./Auth/ForgotPasswordEmailSent";
import ResetPassword from "./Auth/ResetPassword";
import ResetPasswordSuccess from "./Auth/ResetPasswordSuccess";

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
    {
      path: "/signIn",
      element: <SignIn />,
    },
    {
      path: "/register-email-verify",
      element: <RegisterEmailVerify />,
    },
    {
      path: "/register-success",
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

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
