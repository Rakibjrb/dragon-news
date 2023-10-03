import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BsBookmark, BsShare } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const NewsHome = () => {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();

  const handleNewsDetails = (id) => {
    const clickedNews = news.find((element) => element._id === id);
    sessionStorage.clear();
    sessionStorage.setItem("newsData", JSON.stringify(clickedNews));
    setTimeout(() => {
      navigate("/news-details-page");
    }, 300);
  };

  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((newsData) => setNews(newsData))
      .catch(() => toast.error("news not loaded something went wrong !!!"));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Dragon News Home</h2>
      <div className="space-y-10">
        {news.map((singleNews) => {
          const { _id, author, title, thumbnail_url, rating, total_view } =
            singleNews;
          let desc = singleNews?.details;
          let description = desc.slice(0, 300);
          return (
            <div key={_id} className="border">
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
                <h2
                  onClick={() => handleNewsDetails(_id)}
                  className="text-2xl font-bold mb-4 hover:cursor-pointer"
                >
                  {title}
                </h2>
                <img
                  className="w-full h-80 mb-4"
                  src={thumbnail_url}
                  alt={title}
                />
                <p className="mb-3">{description} .....</p>

                <p
                  onClick={() => handleNewsDetails(_id)}
                  className="text-red-500 hover:cursor-pointer"
                >
                  Read More
                </p>
              </div>
              <div className="p-5 flex justify-between items-center">
                <div className="flex gap-3">
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsHome;
