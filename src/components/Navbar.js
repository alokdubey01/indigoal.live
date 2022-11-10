import React, { useEffect, useState } from "react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { BiUserCircle, BiSearchAlt } from "react-icons/bi";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Carousel from "./Carausel";
import axios from "axios";

export const Navbar = () => {
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
    axios.get("https://newsapi.org/v2/everything?q=t20&sortBy=publishedAt&apiKey=5bc9ccd925514483949046f3dab73ff6").then((res) => {
      console.log(res.data);
      setHighlight(res.data.articles);
    });
  }, []);
  return (
    <>
      <div className="bg-main col-md-12 items-center justify-between flex p-8 pt-0 pb-0">
        <div className="h-12 w-16 text-white -ml-4 rotate-180">
          <HiOutlineBars3BottomRight className="h-12 w-1/2 cursor-pointer" />
        </div>
        <div className="text-white text-md">indigoal.live</div>
        <div className="h-12 w-16 text-white flex ">
          <BiSearchAlt className="h-1/2 w-1/2 mt-3 mr-4 cursor-pointer" />
          <BiUserCircle className="h-1/2 w-1/2 mt-3 cursor-pointer" />
        </div>
      </div>
      {/* <div className="border-bottom: 2px solid #eaeaea w-full bg-gray-200 flex justify-between text-center items-center border-gray-300 border">
        <div className="flex list-none p-1">
          <li className="py-2 px-6 rounded-md cursor-pointer bg-white text-sm">
            IND vs PAK
          </li>
          <li className="py-2 px-6 rounded-md cursor-pointer text-gray-500 hover:bg-gray-300 text-sm">
            PAK vs ZIM
          </li>
          <li className="py-2 px-6 rounded-md cursor-pointer text-gray-500 hover:bg-gray-300 text-sm">
            ENG vs AUS
          </li>
          <li className="py-2 px-6 rounded-md cursor-pointer text-gray-500 hover:bg-gray-300 text-sm">
            ENG vs AUS
          </li>
          <li className="py-2 px-6 rounded-md cursor-pointer text-gray-500 hover:bg-gray-300 text-sm">
            ENG vs AUS
          </li>
          <li className="py-2 px-6 rounded-md cursor-pointer text-gray-500 hover:bg-gray-300 text-sm">
            ENG vs AUS
          </li>
          <li className="py-2 px-6 rounded-md cursor-pointer text-gray-500 hover:bg-gray-300 text-sm">
            ENG vs AUS
          </li>
        </div>
        <div>
          <p className="flex items-center mr-4 cursor-pointer">
            All
            <MdOutlineArrowDropDown />
          </p>
        </div>
      </div> */}
    </>
  );
};
