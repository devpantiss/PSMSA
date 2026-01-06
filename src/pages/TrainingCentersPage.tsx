import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
} from "react-leaflet";
import L, { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

/* -------------------------------------------------------------------------- */
/*                       Fix Leaflet Marker Icon Issue                         */
/* -------------------------------------------------------------------------- */

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

/* -------------------------------------------------------------------------- */
/*                            Custom SVG Marker                                */
/* -------------------------------------------------------------------------- */

const odishaMarker: L.DivIcon = new L.DivIcon({
  className: "odisha-marker",
  html: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34">
      <path fill="#a855f7" d="M12 2C8.1 2 5 5.1 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
    </svg>
  `,
  iconSize: [34, 34],
  iconAnchor: [17, 34],
  tooltipAnchor: [0, -28],
});

/* -------------------------------------------------------------------------- */
/*                               Types                                         */
/* -------------------------------------------------------------------------- */

interface TrainingLocation {
  name: string;
  coords: LatLngExpression;
  details: string;
}

/* -------------------------------------------------------------------------- */
/*                        Odisha Training Locations                            */
/* -------------------------------------------------------------------------- */

const ODISHA_LOCATIONS: TrainingLocation[] = [
  {
    name: "Bhawanipatna (Kalahandi)",
    coords: [19.9077, 83.1640],
    details: "Skill development & mining-linked training centre",
  },
  {
    name: "Jajapur",
    coords: [20.8378, 86.3377],
    details: "Steel & fabrication skilling hub",
  },
  {
    name: "Keonjhar",
    coords: [21.6287, 85.5817],
    details: "Iron ore belt operator training centre",
  },
  {
    name: "Sundargarh",
    coords: [22.1167, 84.0306],
    details: "Mining & heavy equipment training",
  },
  {
    name: "Angul",
    coords: [20.8409, 85.0977],
    details: "Power, mining & industrial workforce training",
  },
];

/* -------------------------------------------------------------------------- */
/*                             Main Component                                  */
/* -------------------------------------------------------------------------- */

const OdishaTrainingReachMap: React.FC = () => {
  const ODISHA_CENTER: LatLngExpression = [20.9517, 85.0985];
  const STADIA_API_KEY = "8f741830-1254-408f-a58c-cdbbf7deba3c";

  return (
    <section className="w-full bg-black py-16 mt-32">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Training Centres Across Odisha
        </h2>
        <p className="text-gray-400 mt-2 text-sm md:text-base">
          Strategic skilling hubs aligned with mining, steel & power corridors
        </p>
      </div>

      {/* Map */}
      <div className="px-4">
        <MapContainer
          center={ODISHA_CENTER}
          zoom={7}
          scrollWheelZoom={false}
          className="w-full h-[600px] rounded-2xl overflow-hidden"
        >
          <TileLayer
            attribution="© Stadia Maps © OpenMapTiles © OpenStreetMap"
            url={`https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.png?api_key=${STADIA_API_KEY}`}
            maxZoom={18}
          />

          {ODISHA_LOCATIONS.map((location, index) => (
            <Marker
              key={index}
              position={location.coords}
              icon={odishaMarker}
            >
              <Tooltip
                direction="top"
                offset={[0, -10]}
                opacity={1}
                className="purple-tooltip"
              >
                <div>
                  <strong>{location.name}</strong>
                  <br />
                  {location.details}
                </div>
              </Tooltip>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Scoped Styles */}
      <style>{`
        .odisha-marker {
          background: none !important;
          border: none !important;
        }

        .leaflet-container {
          background: #0a0a0a;
        }

        /* Purple Tooltip Styling */
        .purple-tooltip .leaflet-tooltip {
          background: linear-gradient(135deg, #6d28d9, #a855f7);
          color: #fff;
          border: none;
          border-radius: 10px;
          padding: 8px 12px;
          box-shadow: 0 10px 30px rgba(168, 85, 247, 0.4);
        }

        .purple-tooltip .leaflet-tooltip::before {
          border-top-color: #7c3aed;
        }
      `}</style>
    </section>
  );
};

export default OdishaTrainingReachMap;
