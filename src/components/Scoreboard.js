import axios from "axios";
import React, { useEffect, useState } from "react";

export const Scoreboard = () => {
    const [scores, setScores] = useState([])
  const options = {
    method: "GET",
    url: "https://cricket-live-data.p.rapidapi.com/series",
    headers: {
      "X-RapidAPI-Key": "bc3ea9faa1msh684f3736c5ace1dp150b3ejsn65ec7388dfd1",
      "X-RapidAPI-Host": "cricket-live-data.p.rapidapi.com",
    },
  };

useEffect(() => {
    axios
    .request(options)
    .then(function (response) {
      console.log(response.data.results[1]);
      setScores(response.data.results[1].series)
    })
    .catch(function (error) {
      console.error(error);
    });
},[])
  return (
    <>
    <div class="space-y-2">
                {scores.slice(0,40).map((score, index) => (
                    <div class="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                  <div class="flex justify-between">
                    <div class="text-gray-400 text-xs">Number 10</div>
                    <div class="text-gray-400 text-xs">4h</div>
                  </div>
                  <p class="font-bold hover:text-yellow-800 cursor-auto">{score.series_name}</p>
                  <div class="text-sm text-second font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="text-gray-800 inline align-middle mr-1" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg>{score.status}
                  </div>
                </div>
                ))}
              </div>
    </>
  );
};
