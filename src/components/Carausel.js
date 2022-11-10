import { useState, useRef, useEffect } from "react";
import {GiCrossedSabres} from 'react-icons/gi'
import axios from 'axios'

// Data
import data from "./data.json";

const Carousel = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);
  const [matches, setMatches] = useState([])
  const baseURL = "https://api.cricapi.com/v1/currentMatches?apikey=4ed01469-195c-4a62-b796-f7e4c3c70a7f&offset=0";
  // const baseURL = "http://localhost:4000";

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data.data);
      setMatches(response.data.data)
    });
  }, [])

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel mx-auto">
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="bg-second rounded-full my-auto text-white w-10 h-10 text-center opacity-80 hover:opacity-100 disabled:opacity-0 disabled:cursor-auto z-10 p-0 m-0 transition-all ease-in-out duration-100"
            disabled={isDisabled("prev")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="bg-second rounded-full my-auto text-white w-10 h-10 text-center opacity-80 hover:opacity-100 disabled:opacity-0 disabled:cursor-auto z-10 p-0 m-0 transition-all ease-in-out duration-100"
            disabled={isDisabled("next")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >

{matches.map((match, index) => (
            <div
              key={index}
              className="carousel-item text-center relative snap-start"
            >
                <div className="flex">
                  <div className="rounded-3xl">
                    <div className="flex flex-col">
                      <div className="bg-white relative drop-shadow-md rounded-xl p-4 m-4">
                        <div className="flex-none sm:flex">
                          <div className="flex-auto justify-between">
                            <h2 className="text-xs text-gray-600 text-center font-semibold">
                              ICC T20 World Cup
                            </h2>
                            <div className="flex items-center justify-between">
                              <div className="flex flex-col items-center w-32">
                                <div className="flex items-center">
                                  <img
                                    src={match.teamInfo[0].img}
                                    className="w-10 h-10 rounded-full border-slate-300 p-1 mr-2"
                                    style={{borderWidth: '1px'}}
                                    alt={match.teamInfo[0].name}
                                  />
                                  <div className="flex-none text-lg text-blue-800 font-bold leading-none">
                                    {match.teamInfo[0].shortname}
                                  </div>
                                </div>
                                <div className="text-xs font-semibold text-gray-500">
                                  {/* {match.score[0].r}{"-"}{match.score[0].w} */}
                                </div>
                                <div className="text-xs font-semibold text-gray-500">
                                  {/* {match.score[0].o}{" Over"} */}
                                  {match.score[0].o}
                                </div>
                              </div>

                              <div><GiCrossedSabres/></div>

                              <div className="flex flex-col items-center w-32">
                                <div className="flex items-center">
                                  <div className="flex-none text-lg text-blue-800 font-bold leading-none">
                                  {match.teamInfo[1].shortname}
                                  </div>
                                  <img
                                    src={match.teamInfo[1].img}
                                    className="w-10 h-10 rounded-full border-slate-300 p-1 mr-2"
                                    style={{borderWidth: '1px'}}
                                    alt={match.teamInfo[1].name}
                                  />
                                </div>
                                <div className="text-xs font-semibold text-gray-500">
                                {/* {match.score[0].r}{"-"}{match.score[0].w} */}
                                </div>
                                <div className="text-xs font-semibold text-gray-500">
                                {/* {match.score[1].o} */}
                                {console.log(match.score[0].r)}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-center text-xs font-medium mt-2 text-[#6A0202]">
                          {/* India won by 12 runs */}
                          {match.status}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
