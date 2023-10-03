import { Link } from "react-router-dom";
import Nav from "../../Layout/Navbar/Nav";

const Login = () => {
  return (
    <div>
      <Nav />
      <div className="hero min-h-[500px]">
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
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
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-1">
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
