import AmazingNews from "../../Components/AmazingNews/AmazingNews";
import Header from "../../Components/LogoHeader/Header";
import RightMenu from "../../Components/RightMenu/RightMenu";

const NewsDetails = () => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-5">
        <div className="col-span-2">News</div>
        <div>
          <RightMenu />
          <div className="mt-7">
            <AmazingNews />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetails;
