import { geoCentroid } from "d3-geo";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import allStates from "./data/allstates.json";
import State from "./State";

import { scaleLinear } from "d3-scale";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const offsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21],
};

const redColorScale = scaleLinear()
  .domain([31400, 229000]) // Range of your values
  .range(["#ffcccc", "#ff0000"]); // Light red to dark red

const MapView = ({ setTooltipContent, fillColor, year, getPrice }) => {
  return (
    <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies }) => (
          <>
            {geographies.map((geo) => (
              <g
                key={geo.rsmKey}
                onMouseEnter={() => {
                  setTooltipContent({
                    name: geo.properties.name,
                    id: geo.id,
                    year: year,
                  });
                }}
                onMouseLeave={() => {
                  // setTooltipContent("");
                }}
                data-tooltip-id="my-tooltip"
              >
                <Geography
                  key={geo.rsmKey}
                  stroke="#000"
                  geography={geo}
                  fill={redColorScale(getPrice(geo.id) + (year - 2020) * 10000)}
                />
                <State
                  key={geo.rsmKey}
                  geo={geo}
                  offsets={offsets}
                  allStates={allStates}
                />
              </g>
            ))}
          </>
        )}
      </Geographies>
    </ComposableMap>
  );
};

export default MapView;
