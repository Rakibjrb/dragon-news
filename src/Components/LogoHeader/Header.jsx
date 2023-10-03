import moment from "moment/moment";
import Logo from "../../assets/imgs/logo.png";
const Header = () => {
  return (
    <div className="mt-8 font-poppins">
      <div className="flex justify-center">
        <img
          className="max-w-[350px] h-8 md:max-w-[470px] md:min-h-[60px]"
          src={Logo}
          alt="logo"
        />
      </div>
      <div>
        <h4 className="text-center mt-5 text-textCustom">
          Journalism Without Fear or Favour
        </h4>
        <h4 className="text-center mt-2 text-xl">
          {moment().format("dddd, MMMM D, YYYY")}
        </h4>
      </div>
    </div>
  );
};

export default Header;
