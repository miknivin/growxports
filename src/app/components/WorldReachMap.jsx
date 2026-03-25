import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import worldMapData from "world-atlas/countries-110m.json";

const defaultMarkers = [
  { name: "Brazil", coordinates: [-52, -14] },
  { name: "United Arab Emirates", coordinates: [54.3773, 24.4539] },
  { name: "India", coordinates: [78.9629, 20.5937] },
  { name: "Russia", coordinates: [104, 60] },
];

export function WorldReachMap({
  markers = defaultMarkers,
  className = "w-full max-w-[980px] mx-auto mb-16",
  mapFill = "#162458",
  markerFill = "#FEC76F",
  markerStroke = "#F6F6F6",
}) {
  return (
    <div className={className}>
      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{ scale: 170 }}
        width={980}
        height={440}
        className="w-full h-auto"
      >
        <Geographies geography={worldMapData}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={mapFill}
                stroke="transparent"
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {markers.map((marker) => (
          <Marker key={marker.name} coordinates={marker.coordinates}>
            <circle
              r={5.5}
              fill={markerFill}
              stroke={markerStroke}
              strokeWidth={1.5}
              style={{
                filter: "drop-shadow(0 0 8px rgba(254, 199, 111, 0.95))",
              }}
            />
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}
