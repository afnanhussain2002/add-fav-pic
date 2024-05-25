const HomeBanner = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Add Favorite Item</h1>
          <p className="py-6">
           Store your favorite item picture from all of picture
          </p>
          <div className="flex gap-3">
          <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
          <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
