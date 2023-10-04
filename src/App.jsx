import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="max-w-screen-xl mx-auto font-poppins px-4 xl:px-0">
      <Outlet></Outlet>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default App;
