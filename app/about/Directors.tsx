const Directors = () => {
  return (
    <div className="p-3">
      <h1 className="bg-black text-white text-center py-3 my-4">
        Meet Our Founders
      </h1>
      <div className="flex justify-center items-center flex-wrap">
        <figure className="my-2 p-3 shadow-md rounded-md w-[350px] flex flex-col justify-center items-center text-center lg:mx-2 lg:w-[250px]">
          <div
            className="w-28 h-28 bg-no-repeat bg-cover rounded-full mb-4"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/ddovp5ssb/image/upload/v1679960241/AB%20Photos/Directors/tshepo_khwti8.webp')",
            }}
          ></div>
          <figcaption>
            <h2 className="font-bold">Tshepo Theodore Khumako</h2>
            <p className="text-sm text-gray-600">Managing Director</p>
          </figcaption>
        </figure>
        <figure className="my-2 p-3 shadow-md rounded-md w-[350px] flex flex-col justify-center items-center text-center lg:mx-2 lg:w-[250px]">
          <div
            className="w-28 h-28 bg-no-repeat bg-cover rounded-full mb-4"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/ddovp5ssb/image/upload/v1679960228/AB%20Photos/Directors/tshanibezwe_zag3lh.webp')",
            }}
          ></div>
          <figcaption>
            <h2 className="font-bold">Tshanibezwe Mdakane</h2>
            <p className="text-sm text-gray-600">Managing Director</p>
          </figcaption>
        </figure>
        <figure className="my-2 p-3 shadow-md rounded-md w-[350px] flex flex-col justify-center items-center text-center lg:mx-2 lg:w-[250px]">
          <div
            className="w-28 h-28 bg-no-repeat bg-cover rounded-full mb-4"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/ddovp5ssb/image/upload/v1679960228/AB%20Photos/Directors/tshanibezwe_zag3lh.webp')",
            }}
          ></div>
          <figcaption>
            <h2 className="font-bold">Tsepo Ralefika</h2>
            <p className="text-sm text-gray-600">Managing Director</p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Directors;
