import { Link, useLoaderData } from "react-router-dom";
import Header from "../../Components/LogoHeader/Header";
import Marquee from "react-fast-marquee";
import Nav from "../../Layout/Navbar/Nav";
import LeftMenu from "../../Components/LeftMenu/LeftMenu";
import NewsHome from "../../Components/Newshome/NewsHome";
import RightMenu from "../../Components/RightMenu/RightMenu";
import AmazingNews from "../../Components/AmazingNews/AmazingNews";

const Home = () => {
  const data = useLoaderData();
  const randomNumber = () => Math.floor(Math.random() * 10) + 1;
  const newsTitle = data
    .slice(0, randomNumber())
    .map((singleNews) => singleNews.title);

  return (
    <>
      <Header />
      <div className="mt-8 flex gap-3 bg-bgCustom p-3 items-center">
        <button className="btn btn-error text-white">Latest</button>
        <Marquee
          className="text-black text-[18px]"
          pauseOnHover={true}
          speed={100}
        >
          <Link className="mr-20">{newsTitle}</Link>
        </Marquee>
      </div>
      <Nav />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-6">
        <div className="w-full">
          <LeftMenu />
        </div>
        <div className="col-span-2">
          <NewsHome data={data} />
        </div>
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

export default Home;
