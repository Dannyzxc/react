import data from "./data";
import { useState, useEffect } from "react";

export default function Hero() {
  const [meme, setMeme] = useState({
    topText: "shut up",
    bottomText: "and take my money",
    randomImg: "https://source.unsplash.com/random/600x400?meme,day",
  });

  const [allMemeI, setAllMemeI] = useState(data);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => console.log(data.data.memes));

  }, []);

  function handleEvents() {
    // let items = data.data.memes.map(item => item);
    const memesArray = allMemeI.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);

    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImg: url,
      };
    });
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(meme);

    const { name, value } = event.target;

    setMeme((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    console.log("hello");
  };

  const returning = (
    <div className="w-2/4 mx-auto">
      <form onSubmit={handleSubmit}>
        <span className=" flex flex-col my-5">
          <input
            type="text"
            placeholder="Shut Up"
            className="my-2 p-3 capitalize"
            onChange={handleChange}
            value={meme.topText}
            name="topText"
          />
          <input
            type="text"
            placeholder="and take my money"
            className="my-2 p-3 capitalize"
            onChange={handleChange}
            value={meme.bottomText}
            name="bottomText"
          />
        </span>

        <button
          type="submit"
          onClick={handleEvents}
          className="border border-gray-200 w-full my-4 bg-purple-800"
        >
          Get a new meme image 🖼
        </button>
      </form>

      <div className="w-full h-96 relative">
        <img
          src={meme.randomImg}
          alt=""
          width="w-full h-full overflow-hidden"
        />
        <h2 className="absolute top-2 bg-gray-600 w-full text-3xl ">
          {meme.topText}
        </h2>
        <h2 className="absolute bottom-3 bg-gray-600 w-full text-3xl ">
          {meme.bottomText}
        </h2>
      </div>
    </div>
  );

  return returning;
}
