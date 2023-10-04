import { useEffect, useState } from "react";
import { AiOutlineSchedule } from "react-icons/ai";
import { Link } from "react-router-dom";

const LeftMenu = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((newsData) => setData(newsData));
  }, []);

  return (
    <div className="w-full">
      <div className="mt-2 space-y-5">
        {data.slice(5, 10).map((element) => (
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
                <Link to={`/news-details-page/${element._id}`}>
                  <h2 className="card-title mt-3">{element?.title}</h2>
                </Link>
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
