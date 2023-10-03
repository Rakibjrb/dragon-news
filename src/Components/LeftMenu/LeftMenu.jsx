import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AiOutlineSchedule } from "react-icons/ai";

const LeftMenu = () => {
  const [category, setCategory] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data))
      .catch(() => toast.error("category not loaded !!!"));

    fetch("news.json")
      .then((res) => res.json())
      .then((newsData) => setNews(newsData))
      .catch(() => toast.error("news not loaded something went wrong !!!"));
  }, []);

  return (
    <div className="w-full">
      <h3 className="text-2xl font-semibold mb-4">All Category</h3>
      <ul className="w-full flex flex-col">
        {category.map((element) => (
          <Link
            key={element.id}
            className="hover:bg-slate-500 text-xl text-textCustom transition-colors hover:text-white text-left py-4 pl-4"
          >
            {element.name}
          </Link>
        ))}
      </ul>
      <div className="mt-2 space-y-5">
        {news.slice(20, 24).map((element) => (
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
  );
};

export default LeftMenu;
