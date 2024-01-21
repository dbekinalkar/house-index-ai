import MapView from "./MapView";
import basePrices from "./data/BasePrices.js";

import { Tooltip } from "react-tooltip";
import { useState } from "react";

const getPrice = (id) => {
  const stateId = basePrices.find((item) => item.val === id);

  const basePrice = stateId ? stateId.price : null;

  return basePrice;
};

const getData = (state) => {
  const basePrice = getPrice(state.id);

  return `${state.name} $${basePrice}`;
};

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
