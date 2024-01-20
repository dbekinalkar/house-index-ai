import { Marker, Annotation } from "react-simple-maps";
import { geoCentroid } from "d3-geo";

import { Tooltip } from "react-tooltip";

const State = ({ geo, allStates, offsets }) => {
  const centroid = geoCentroid(geo);
  const cur = allStates.find((s) => s.val === geo.id);

  return (
    <g key={geo.rsmKey + "-name"} className="select-none">
      {cur &&
        centroid[0] > -160 &&
        centroid[0] < -67 &&
        (Object.keys(offsets).indexOf(cur.id) === -1 ? (
          <Marker coordinates={centroid}>
            <text y="2" fontSize={14} textAnchor="middle">
              {cur.id}
            </text>
          </Marker>
        ) : (
          <Annotation
            subject={centroid}
            dx={offsets[cur.id][0]}
            dy={offsets[cur.id][1]}
          >
            <text x={4} fontSize={14} alignmentBaseline="middle">
              {cur.id}
            </text>
          </Annotation>
        ))}
    </g>
  );
};

export default State;
