import { BsGoogle, BsGithub, BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import qZone1 from "../../assets/imgs/qZone1.png";
import qZone2 from "../../assets/imgs/qZone2.png";
import qZone3 from "../../assets/imgs/qZone3.png";

const RightMenu = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold">Login with</h2>
      <div className="mt-4 space-y-3">
        <button className="flex items-center btn btn-outline w-full">
          <BsGoogle className="text-xl" /> <p>Login With Google</p>
        </button>
        <button className="flex items-center btn btn-outline w-full">
          <BsGithub className="text-xl" /> <p>Login With Google</p>
        </button>
      </div>
      <div className="mt-7">
        <h2 className="text-2xl font-semibold">Find us on</h2>
        <div className="mt-4 only:space-y-3">
          <button className="flex items-center btn btn-outline w-full rounded-b-none text-left">
            <FaFacebook className="text-xl" /> <p>Facebook</p>
          </button>
          <button className="flex items-center btn btn-outline w-full border-y-0 rounded-l-none rounded-r-none">
            <AiFillTwitterCircle className="text-xl" /> <p>Twitter</p>
          </button>
          <button className="flex items-center btn btn-outline w-full rounded-t-none">
            <BsInstagram className="text-xl" /> <p>Instagram</p>
          </button>
        </div>
      </div>
      <div className="mt-7 p-4 bg-[#F3F3F3]">
        <h2 className="text-2xl font-semibold">Q-zone</h2>
        <div className="mt-4 only:space-y-5">
          <img className="w-full" src={qZone1} alt="qzone pic 1" />
          <img className="w-full" src={qZone2} alt="qzone pic 2" />
          <img className="w-full" src={qZone3} alt="qzone pic 3" />
        </div>
      </div>
    </div>
  );
};

export default RightMenu;
