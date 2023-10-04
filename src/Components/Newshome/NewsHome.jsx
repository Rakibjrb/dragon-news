import { BsBookmark, BsShare } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NewsHome = ({ data }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Dragon News Home</h2>
      <div className="space-y-10">
        {data.map((singleNews) => {
          const { _id, author, title, thumbnail_url, rating, total_view } =
            singleNews;
          const id = _id;
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
                <Link to={`/news-details-page/${id}`}>
                  <h2 className="text-2xl font-bold mb-4 hover:cursor-pointer">
                    {title}
                  </h2>
                </Link>
                <img
                  className="w-full h-80 mb-4"
                  src={thumbnail_url}
                  alt={title}
                />
                <p className="mb-3">{description} .....</p>

                <Link to={`/news-details-page/${id}`}>
                  <p className="text-red-500 hover:cursor-pointer">Read More</p>
                </Link>
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

NewsHome.propTypes = {
  data: PropTypes.array,
};
