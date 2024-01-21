import MapView from "./MapView";

import { Tooltip } from "react-tooltip";
import { useEffect, useState } from "react";

import { getPrice } from "../application/DB.js";
import { getData } from "../application/DB.js";

const Map = ({ year }) => {
  const [state, setState] = useState({});
  const [months, setMonths] = useState(0);

  useEffect(() => {
    setMonths(getData(state, year));
  }, [state]);

  return (
    <div className=" mx-auto w-full max-w-screen-md h-full container   flex items-center justify-center bg-white rounded-lg">
      <MapView
        className="h-96 "
        year={year}
        setTooltipContent={setState}
        getData={getData}
      />
      <Tooltip id="my-tooltip">
        {state.name} requires {months} months of work
      </Tooltip>
    </div>
  );
};

export default Map;
