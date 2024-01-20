import { useState } from "react";

import PropTypes from "prop-types";

import Map from "./Map";

const Main = ({ id }) => {
  const [progress, setProgress] = useState(0);

  const progressToYear = (progress) => {
    switch (progress) {
      case "0":
        return 2020;
      case "10":
        return 2021;
      case "20":
        return 2022;
      case "30":
        return 2023;
      case "40":
        return 2024;
      case "50":
        return 2025;
      case "60":
        return 2026;
      case "70":
        return 2027;
      case "80":
        return 2028;
      case "90":
        return 2029;
      case "100":
        return 2030;
      default:
        return 2020;
    }
  };

  return (
    <div id={id} className="container mx-auto max-h-screen p-8">
      <Map year={progressToYear(progress)} />

      <div className="text-center text-3xl my-4">
        Year: {progressToYear(progress)}
      </div>

      <input
        type="range"
        min={0}
        max="100"
        value={progress}
        onChange={(e) => {
          setProgress(e.target.value);
        }}
        className="range"
        step="10"
      />
      <div className="w-full flex justify-between text-xs px-2">
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
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
