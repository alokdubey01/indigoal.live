import React, { useState, useEffect } from "react";
import axios from "axios";
import { Scoreboard } from "./Scoreboard";

export const Featured = () => {
  const [news, setNews] = useState([]);
  const [highlight, setHighlight] = useState([]);

  const endpoint =
    "https://newsapi.org/v2/everything?q=cricket&sortBy=publishedAt&apiKey=5bc9ccd925514483949046f3dab73ff6";
  useEffect(() => {
    axios.get(endpoint).then((res) => {
      console.log(res.data);
      setNews(res.data.articles);
    });
  }, []);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=t20&sortBy=publishedAt&apiKey=5bc9ccd925514483949046f3dab73ff6"
      )
      .then((res) => {
        console.log(res.data);
        setHighlight(res.data.articles);
      });
  }, []);
  return (
    <div>
      <div className="mx-auto grid grid-cols-7 pt-6 gap-2 p-8">
        <div className="rounded col-span-1">
          <h1 className="text-lg font-medium text-second">Top Stories</h1>
          <div className="px-2">
            {news.slice(0,51).map((item, index) => (
              <div>
                <p className="text-xs font-[500] leading-5 py-2 text-gray-600">
                  {item.title}
                </p>
                {/* <div className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">{item.publishedAt}</div> */}
                <div className="leading-3 border-b-2 border-gray-300  dark:border-gray-700 border-dashed border-1" />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded col-span-4">
          <h1 className="text-lg font-medium text-second">Top Feathured</h1>
          <div class="mx-auto">
            {highlight.slice(0,20).map((news, index) => (
              <div class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl p-3 max-w-xs md:max-w-3xl border border-white bg-white">
                <div class="w-1/2 bg-white grid place-items-center">
                  <img src={news.urlToImage} alt={news.title} class="rounded" />
                </div>
                <div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                  <h3 class="font-bold text-gray-800 text-xl">{news.title}</h3>
                  <p class=" text-gray-500 text-sm">{news.description}</p>
                  <p class="text-sm font-semibold text-gray-700">
                    <small>{news.author}</small>{" "}
                    <small className="text-second">{news.publishedAt}</small>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded col-span-2">
          <h1 className="text-lg font-medium text-second">Scoreboard</h1>
          <div className="px-2">
            <Scoreboard />
          </div>
        </div>
      </div>
    </div>
  );
};
