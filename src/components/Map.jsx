import MapView from "./MapView";
import MapCharts from "./MapCharts";

import { Tooltip } from "react-tooltip";
import { useEffect, useState } from "react";

const Map = () => {
  const [content, setContent] = useState("");
  useEffect(() => {}, [content]);

  return (
    <div className=" mx-auto w-full h-full container   flex items-center justify-center bg-white rounded-lg">
      <MapView
        className="h-96 "
        fillColor="#FF0000"
        setTooltipContent={setContent}
      />
      <Tooltip id="my-tooltip">{content}</Tooltip>
    </div>
  );
};

export default Map;
