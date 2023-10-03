import AmazingNewsBG from "../../assets/imgs/bg.png";

const AmazingNews = () => {
  return (
    <div
      className="flex items-center justify-center h-[500px]"
      style={{ background: `url(${AmazingNewsBG})` }}
    >
      <div className="w-[220px] space-y-8">
        <h2 className="text-3xl font-extrabold text-white text-center">
          Create an Amazing Newspaper
        </h2>
        <p className="text-white text-center text-xl">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <div className="flex justify-center">
          <button className="btn btn-error text-white">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default AmazingNews;
