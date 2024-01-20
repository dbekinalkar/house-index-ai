import { useState } from "react";

import PropTypes from "prop-types";

import Map from "./Map";

const Main = ({ id }) => {
  const [progress, setProgress] = useState(0);

  const progressToYear = (progress) => {
    switch (progress) {
      case "0":
        return 2015;
      case "25":
        return 2016;
      case "50":
        return 2017;
      case "75":
        return 2018;
      case "100":
        return 2019;
      default:
        return 2015;
    }
  };

  return (
    <div id={id} className="container mx-auto min-h-screen p-8">
      <Map />

      <div className="text-center text-3xl my-4">Year: {progressToYear(progress)}</div>

      <input
        type="range"
        min={0}
        max="100"
        value={progress}
        onChange={(e) => {
          setProgress(e.target.value);
        }}
        className="range"
        step="25"
      />
      <div className="w-full flex justify-between text-xs px-2">
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
      </div>
    </div>
  );
};

Main.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Main;
