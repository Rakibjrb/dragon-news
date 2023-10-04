import { Link, useNavigate } from "react-router-dom";
import Nav from "../../Layout/Navbar/Nav";
import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const termsandconditions = e.target.termsandconditions.checked;
    if (!termsandconditions) {
      toast.error("please accept our terms & conditions....");
      return;
    }
    createUser(email, password)
      .then(() => {
        toast.success("Account creation successfull ....");
        e.target.reset();
        navigate("/login-form");
      })
      .catch(() => toast.error("something went wrong !!!"));
  };

  return (
    <div>
      <Nav />
      <div className="hero min-h-[600px]">
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="full name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                placeholder="photo link"
                className="input input-bordered"
                name="photo"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
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
                name="password"
                required
              />
            </div>
            <label htmlFor="termsandconditions">
              <input
                className="mr-2"
                type="checkbox"
                name="termsandconditions"
              />
              Accept our{" "}
              <Link className="text-red-500">terms & conditions</Link>
            </label>
            <div className="form-control mt-1">
              <button className="btn btn-primary">Sign Up</button>
            </div>
            <p className="text-sm mt-2">
              {`Don't`} have any account?{" "}
              <Link to="/login-form" className="text-red-500 font-semibold">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
