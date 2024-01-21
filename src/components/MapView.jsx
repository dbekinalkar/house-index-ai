import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import allStates from "./data/allstates.json";
import stateShapes from "./data/stateShapes.json";
import State from "./State";

import { scaleLinear } from "d3-scale";

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
  .domain([28, 234]) // Range of your values
  .range(["#ffbbbb", "#ff0000"]); // Light red to dark red

const MapView = ({ setTooltipContent, fillColor, year, getData }) => {
  return (
    <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={stateShapes}>
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
                  stroke="#000"
                  geography={geo}
                  fill={redColorScale(
                    getData({
                      name: geo.properties.name,
                      id: geo.id,
                      year: year,
                    })
                  )}
                />
                <State geo={geo} offsets={offsets} allStates={allStates} />
              </g>
            ))}
          </>
        )}
      </Geographies>
    </ComposableMap>
  );
};

export default MapView;
