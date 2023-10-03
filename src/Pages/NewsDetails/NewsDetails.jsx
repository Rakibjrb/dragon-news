import { BsBookmark, BsShare } from "react-icons/bs";
import { AiFillEye, AiOutlineSchedule } from "react-icons/ai";
import { BiLeftArrowAlt } from "react-icons/bi";
import Header from "../../Components/LogoHeader/Header";
import RightMenu from "../../Components/RightMenu/RightMenu";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const NewsDetails = () => {
  const newses = JSON.parse(sessionStorage.getItem("newsData"));
  const { _id, author, title, thumbnail_url, rating, total_view, details } =
    newses;

  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((newsData) => setNews(newsData))
      .catch(() => toast.error("news not loaded something went wrong !!!"));
  }, []);

  return (
    <>
      <Header />
      <div className="grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-5">
        <div className="col-span-2">
          <h2 className="text-2xl font-bold mb-5">News details</h2>
          <div className="border">
            <div className="bg-gray-200 p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img
                  className="w-10 h-10 rounded-full"
                  src={author?.img}
                  alt={author?.name}
                />
                <div>
                  <h3 className="font-bold">{author?.name}</h3>
                  <p>{author?.published_date}</p>
                </div>
              </div>
              <div className="flex gap-4 mr-4">
                <button>
                  <BsBookmark />
                </button>
                <button>
                  <BsShare />
                </button>
              </div>
            </div>
            <div className="p-5 pb-0">
              <h2 className="text-2xl font-bold mb-4 hover:cursor-pointer">
                {title}
              </h2>
              <img
                className="w-full h-80 mb-4"
                src={thumbnail_url}
                alt={title}
              />
              <p className="mb-3">{details}</p>
            </div>
            <div className="px-5 py-8">
              <div className="flex justify-between items-center">
                <div className="flex gap-3 mb-3">
                  <div className="rating">
                    <input
                      type="radio"
                      name={`rating-${_id}`}
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name={`rating-${_id}`}
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name={`rating-${_id}`}
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name={`rating-${_id}`}
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name={`rating-${_id}`}
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                  <p className="text-xl">{rating.number}</p>
                </div>
                <p className="flex gap-2 items-center">
                  <AiFillEye className="text-xl" />
                  {total_view}
                </p>
              </div>
              <div className="mt-3">
                <Link
                  to="/"
                  className="btn btn-error text-white font-normal rounded-none"
                >
                  <BiLeftArrowAlt className="text-3xl" /> All news in this
                  category
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-2xl font-bold">Editor Insights</h2>
            <div className="w-full mt-5">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {news.slice(7, 10).map((element) => (
                  <div key={element?._id}>
                    <div className="card card-compact">
                      <figure>
                        <img
                          className="w-full h-40"
                          src={element?.thumbnail_url}
                          alt={element?.title}
                        />
                      </figure>
                      <div>
                        <h2 className="card-title mt-3">{element?.title}</h2>
                        <div className=" flex items-center gap-2 mt-3">
                          <p className="text-xl">
                            <AiOutlineSchedule />
                          </p>
                          <p>{element?.author?.published_date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <RightMenu />
        </div>
      </div>
    </>
  );
};

export default NewsDetails;
