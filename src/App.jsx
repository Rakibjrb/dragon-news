import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="max-w-screen-xl mx-auto font-poppins px-4 xl:px-0">
      <Outlet></Outlet>
    </div>
  );
};

export default App;
