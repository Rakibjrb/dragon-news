import { Link, useNavigate } from "react-router-dom";
import Nav from "../../Layout/Navbar/Nav";
import { useContext, useRef } from "react";
import { AuthContext } from "../../Components/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { loginWithEmailPassowrd, forgotPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const emailRef = useRef("");

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginWithEmailPassowrd(email, password)
      .then(() => {
        toast.success("user login success .....");
        setTimeout(() => {
          navigate("/");
        }, 300);
      })
      .catch(() => toast.error("something went wrong !!!"));
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    e.stopPropagation();
    forgotPassword(emailRef.current.value)
      .then(() =>
        toast.success("reset password sent to your email please check.....")
      )
      .catch(() => toast.error("something went wrong !!!"));
  };

  return (
    <div>
      <Nav />
      <div className="hero min-h-[500px]">
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                ref={emailRef}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a
                  onClick={handleForgotPassword}
                  href="#"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div type="submit" className="form-control mt-1">
              <button className="btn btn-primary">Login</button>
            </div>
            <p className="text-sm mt-2">
              {`Don't`} have any account?{" "}
              <Link to="/signup-form" className="text-red-500 font-semibold">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
