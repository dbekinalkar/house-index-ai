import MapView from "./MapView";

import { Tooltip } from "react-tooltip";
import { useState } from "react";

import { getPrice } from "../application/DB.js";
import { getData } from "../application/DB.js";

const Map = ({ year }) => {
  const [state, setState] = useState({});

  return (
    <div className=" mx-auto w-full max-w-screen-md h-full container   flex items-center justify-center bg-white rounded-lg">
      <MapView
        className="h-96 "
        year={year}
        setTooltipContent={setState}
        getPrice={getPrice}
      />
      <Tooltip id="my-tooltip">{getData(state, year)}</Tooltip>
    </div>
  );
};

export default Map;
